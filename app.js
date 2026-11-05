/**
 * REVALUE - From Surplus to New Value
 * Interactive Web Profile Engine
 * Ecopreneur Competition (ECTION) 2026 UNESA
 * Tim Kompespiking
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });
    }

    // 2. Preloader Logic
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 600);
        });
        // Fallback in case load event already fired
        setTimeout(() => {
            if (preloader && !preloader.classList.contains('fade-out')) {
                preloader.classList.add('fade-out');
            }
        }, 2000);
    }

    // 3. Dark Mode & Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    function updateThemeIcons(isDark) {
        if (isDark) {
            darkIcon.classList.add('hidden');
            lightIcon.classList.remove('hidden');
        } else {
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
        }
    }

    // Check initial preference
    const savedTheme = localStorage.getItem('revalue-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

    if (initialDark) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('revalue-theme', isDark ? 'dark' : 'light');
            updateThemeIcons(isDark);
        });
    }

    // 4. Mobile Menu Navigation
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 5. Eco Leaf Cursor Trail
    let lastTime = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastTime < 50) return; // throttle
        lastTime = now;

        const leaf = document.createElement('div');
        leaf.className = 'leaf-trail';
        leaf.style.left = `${e.pageX - 6}px`;
        leaf.style.top = `${e.pageY - 6}px`;
        document.body.appendChild(leaf);

        setTimeout(() => {
            leaf.style.opacity = '0';
            leaf.style.transform = `translate(${(Math.random() - 0.5) * 40}px, ${(Math.random() - 0.5) * 40}px) scale(0.2) rotate(${Math.random() * 360}deg)`;
        }, 50);

        setTimeout(() => {
            leaf.remove();
        }, 650);
    });

    // 6. Interactive Food Passport (QR Traceability) Data & Selector
    const batchData = {
        'RV-2026-014': {
            id: 'RV-2026-014-SBY',
            name: 'Tepung Komposit Wortel & Labu Kuning Sirkular',
            category: 'Bahan Baku B2B (Standardized Composite Flour)',
            mesh: '100 Mesh Fine Milling',
            weight: '1.000 Gram (Vacuum Sealed Multi-Layer)',
            harvestSource: 'Hotel Bintang 4 & Supermarket Surabaya Timur',
            rescueTime: '01 Nov 2026, 19:30 WIB (Cold-Box 12°C)',
            freshInput: '3,20 kg Surplus Grade B Segar',
            outputYield: '1,00 kg Tepung Kering Terstandar (Yield 31,25%)',
            dehydration: 'Low-Temp Dehydration 55°C (10 Jam)',
            moisture: '7,1% (Standar Maks. ≤ 8,0%)',
            waterActivity: '0,52 aw (Anti Jamur & Bakteri)',
            mbrioLab: 'Passed - Bebas Salmonella, E. coli, & Kapang Khamir',
            halal: 'Tersertifikasi 100% Halal Indonesia & Standar CPPOB BPOM',
            shelfLife: '9 Bulan (Best Before: 02 Ags 2027)',
            circularityScore: 94,
            carbonPrevented: '7,44 kg CO₂-eq',
            co2SavedBadge: 'Setara menanam 0,34 pohon / batch',
            recUse: 'Substitusi 15%-25% tepung terigu untuk bakery, bolu, cookies, pastry, dan mi sayur sehat.'
        },
        'RV-2026-022': {
            id: 'RV-2026-022-MLG',
            name: 'Purée Mangga & Pisang Matang Beku Terstandar',
            category: 'Bahan Baku B2B (Vacuum-Sealed Frozen Purée)',
            mesh: 'Heavy-Duty Pulper Homogenized',
            weight: '2.000 Gram (Frozen Pack -18°C)',
            harvestSource: 'Sentra Grosir Buah & Kafe Jaringan Malang Raya',
            rescueTime: '03 Nov 2026, 08:30 WIB (Cold-Box 8°C)',
            freshInput: '2,55 kg Buah Surplus Matang Optimal',
            outputYield: '2,00 kg Purée Segar Bebas Biji & Kulit (Yield 78,4%)',
            dehydration: 'Pasteurisasi Termal 78°C (15 Menit) + Rapid Chilling',
            moisture: 'Kadar Padatan Terlarut (Brix) 18°',
            waterActivity: 'pH 4,2 (Asam Sitrat Alami Food-Grade)',
            mbrioLab: 'Passed - Standar Mikrobiologi Olahan Buah BPOM',
            halal: 'Tersertifikasi Halal & Higienis CPPOB',
            shelfLife: '6 Bulan Beku pada -18°C (Best Before: 03 Mei 2027)',
            circularityScore: 96,
            carbonPrevented: '5,92 kg CO₂-eq',
            co2SavedBadge: 'Setara reduksi emisi 24 km berkendara motor',
            recUse: 'Bahan baku isian (filling) roti manis, selai artisan, smoothies kafe, dan gelato lokal.'
        },
        'RV-2026-031': {
            id: 'RV-2026-031-SDA',
            name: 'Keripik Buah & Sayur Dehidrasi Rendah Minyak',
            category: 'Lini Ritel B2C (Crispy Dehydrated Chips)',
            mesh: 'Sliced 2-3mm Chips Crispy',
            weight: '150 Gram (Stand Up Aluminium Foil Pouch)',
            harvestSource: 'Pasar Induk Agrobisnis Sidoarjo & Supermarket Lokal',
            rescueTime: '04 Nov 2026, 20:00 WIB (Cold-Box 10°C)',
            freshInput: '0,95 kg Irisan Apel & Wortel Grade B',
            outputYield: '150 Gram Keripik Dehidrasi Bebas Minyak Jahat (Yield 15,8%)',
            dehydration: 'Dehidrator Sirkulasi Udara 58°C (12 Jam)',
            moisture: '4,5% (Kering Renyah Maksimal)',
            waterActivity: '0,41 aw (Masa Simpan Sangat Stabil)',
            mbrioLab: 'Passed - Uji Sensori, Angka Lempeng Total Sesuai Syarat',
            halal: '100% Bahan Nabati Alami Tanpa Pengawet Sintetis',
            shelfLife: '12 Bulan (Best Before: 04 Nov 2027)',
            circularityScore: 92,
            carbonPrevented: '2,21 kg CO₂-eq',
            co2SavedBadge: '100% Zero-Waste to Landfill',
            recUse: 'Camilan sehat tinggi serat untuk mahasiswa, pekerja urban, dan keluarga peduli bumi.'
        }
    };

    let qrCodeInstance = null;

    function renderFoodPassportBatch(batchKey) {
        const item = batchData[batchKey];
        if (!item) return;

        // Update DOM elements
        const batchBadge = document.getElementById('qr-batch-badge');
        const productName = document.getElementById('qr-product-name');
        const productCategory = document.getElementById('qr-product-category');
        const harvestSource = document.getElementById('qr-harvest-source');
        const rescueTime = document.getElementById('qr-rescue-time');
        const freshInput = document.getElementById('qr-fresh-input');
        const outputYield = document.getElementById('qr-output-yield');
        const processingMethod = document.getElementById('qr-processing-method');
        const moistureValue = document.getElementById('qr-moisture');
        const waterActivity = document.getElementById('qr-water-activity');
        const mbrioStatus = document.getElementById('qr-mbrio-status');
        const halalStatus = document.getElementById('qr-halal-status');
        const shelfLife = document.getElementById('qr-shelf-life');
        const scoreDisplay = document.getElementById('qr-score-display');
        const scoreBar = document.getElementById('qr-score-bar');
        const carbonSaved = document.getElementById('qr-carbon-saved');
        const carbonSub = document.getElementById('qr-carbon-sub');
        const recApp = document.getElementById('qr-rec-app');

        if (batchBadge) batchBadge.textContent = item.id;
        if (productName) productName.textContent = item.name;
        if (productCategory) productCategory.textContent = item.category;
        if (harvestSource) harvestSource.textContent = item.harvestSource;
        if (rescueTime) rescueTime.textContent = item.rescueTime;
        if (freshInput) freshInput.textContent = item.freshInput;
        if (outputYield) outputYield.textContent = item.outputYield;
        if (processingMethod) processingMethod.textContent = item.dehydration;
        if (moistureValue) moistureValue.textContent = item.moisture;
        if (waterActivity) waterActivity.textContent = item.waterActivity;
        if (mbrioStatus) mbrioStatus.textContent = item.mbrioLab;
        if (halalStatus) halalStatus.textContent = item.halal;
        if (shelfLife) shelfLife.textContent = item.shelfLife;
        if (scoreDisplay) scoreDisplay.textContent = `${item.circularityScore}/100`;
        if (scoreBar) scoreBar.style.width = `${item.circularityScore}%`;
        if (carbonSaved) carbonSaved.textContent = item.carbonPrevented;
        if (carbonSub) carbonSub.textContent = item.co2SavedBadge;
        if (recApp) recApp.textContent = item.recUse;

        // Render QR Code using QRCode library if present, or SVG fallback
        const qrContainer = document.getElementById('live-qr-code');
        if (qrContainer) {
            qrContainer.innerHTML = '';
            const qrUrl = `https://revalue.id/passport?batch=${encodeURIComponent(item.id)}`;
            if (typeof QRCode !== 'undefined') {
                qrCodeInstance = new QRCode(qrContainer, {
                    text: qrUrl,
                    width: 140,
                    height: 140,
                    colorDark: '#153F32',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });
            } else {
                qrContainer.innerHTML = `
                    <div class="w-32 h-32 bg-white p-2 rounded-lg border-2 border-forest-800 flex items-center justify-center text-center">
                        <div>
                            <i class="fa-solid fa-qrcode text-5xl text-forest-800 mb-1"></i>
                            <div class="text-[9px] font-mono font-bold">${item.id}</div>
                        </div>
                    </div>
                `;
            }
        }

        // Update button states
        document.querySelectorAll('.batch-btn').forEach(btn => {
            if (btn.getAttribute('data-batch') === batchKey) {
                btn.classList.add('bg-forest-800', 'text-lime-400', 'border-lime-400', 'shadow-md');
                btn.classList.remove('bg-white', 'dark:bg-darkbg-800', 'text-gray-700', 'dark:text-gray-200');
            } else {
                btn.classList.remove('bg-forest-800', 'text-lime-400', 'border-lime-400', 'shadow-md');
                btn.classList.add('bg-white', 'dark:bg-darkbg-800', 'text-gray-700', 'dark:text-gray-200');
            }
        });
    }

    // Attach batch buttons
    document.querySelectorAll('.batch-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const batchKey = btn.getAttribute('data-batch');
            renderFoodPassportBatch(batchKey);
        });
    });

    // Initial render
    renderFoodPassportBatch('RV-2026-014');

    // 7. Interactive Financial ROI & Sensitivity Calculator
    const volumeSlider = document.getElementById('calc-volume-slider');
    const volumeDisplay = document.getElementById('calc-volume-val');

    function calculateFinancials(volumeKg) {
        // Base constants from REVALUE Proposal Bab VII
        const pricePerKgB2B = 45000; // Rp45.000 / kg
        const baseFixedCost = 7700000; // Rp7.700.000 / month
        const baseVarCost300 = 6550000; // Rp6.550.000 for 300kg (Rp21.833,33 / kg)
        const varCostPerKg = baseVarCost300 / 300; // Rp21.833,33 / kg
        const capexTotal = 34500000; // Rp34.500.000 initial investment

        // Scaling ratios based on volume
        const scale = volumeKg / 300;

        // Revenue streams:
        // 1. B2B Ingredients: volumeKg * 45000
        const revB2B = volumeKg * pricePerKgB2B;
        // 2. PaaS + B2C retail: base Rp4.500.000 scaled slightly
        const revPaaS_B2C = Math.round(4500000 * Math.pow(scale, 0.7));
        // 3. Circular Partnership + QR SaaS: base Rp3.000.000 scaled slightly
        const revSaaS = Math.round(3000000 * Math.pow(scale, 0.6));
        const totalRevenue = revB2B + revPaaS_B2C + revSaaS;

        // OpEx:
        // Fixed costs scale slightly if volume > 500kg (extra hub/cloud kitchen headroom)
        let fixedCost = baseFixedCost;
        if (volumeKg > 450) {
            fixedCost = Math.round(baseFixedCost * (1 + (volumeKg - 450) / 1000));
        }
        // Variable costs scale linearly with volume
        const variableCost = Math.round(volumeKg * varCostPerKg);
        const totalOpEx = fixedCost + variableCost;

        // Operating Net Surplus
        const netSurplus = totalRevenue - totalOpEx;
        const netMargin = (netSurplus / totalRevenue) * 100;

        // Contribution Margin Ratio
        const cmRatio = (totalRevenue - variableCost) / totalRevenue;
        const bepRupiah = Math.round(fixedCost / cmRatio);

        // Payback Period (Months)
        const paybackMonths = netSurplus > 0 ? (capexTotal / netSurplus).toFixed(1) : '∞';

        // Annualized metrics
        const annualRevenue = totalRevenue * 12;
        const annualSurplus = netSurplus * 12;
        const annualRoi = ((annualSurplus / capexTotal) * 100).toFixed(1);

        // Carbon reduction: input is roughly 2x output (yield 50%) -> volumeKg * 2 kg fresh rescued
        // EF = 2.32424 kg CO2-eq per kg food
        const co2MonthlyTon = (volumeKg * 2 * 2.32424) / 1000;
        const co2AnnualTon = (co2MonthlyTon * 12).toFixed(2);

        // Update DOM
        const formatRp = (num) => 'Rp' + num.toLocaleString('id-ID');

        document.getElementById('res-total-rev').textContent = formatRp(totalRevenue);
        document.getElementById('res-rev-b2b').textContent = formatRp(revB2B);
        document.getElementById('res-rev-paas').textContent = formatRp(revPaaS_B2C);
        document.getElementById('res-rev-saas').textContent = formatRp(revSaaS);

        document.getElementById('res-total-opex').textContent = formatRp(totalOpEx);
        document.getElementById('res-fixed-cost').textContent = formatRp(fixedCost);
        document.getElementById('res-var-cost').textContent = formatRp(variableCost);

        const surplusEl = document.getElementById('res-net-surplus');
        surplusEl.textContent = formatRp(netSurplus);
        if (netSurplus >= 0) {
            surplusEl.className = 'text-2xl sm:text-3xl font-black text-lime-400';
        } else {
            surplusEl.className = 'text-2xl sm:text-3xl font-black text-red-400';
        }

        document.getElementById('res-margin').textContent = `${netMargin.toFixed(1)}%`;
        document.getElementById('res-bep').textContent = formatRp(bepRupiah);
        document.getElementById('res-payback').textContent = `${paybackMonths} Bulan`;
        document.getElementById('res-roi').textContent = `${annualRoi}% / thn`;
        document.getElementById('res-annual-rev').textContent = formatRp(annualRevenue);
        document.getElementById('res-co2-prevented').textContent = `${co2AnnualTon} Ton CO₂-eq`;
    }

    if (volumeSlider && volumeDisplay) {
        volumeSlider.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            volumeDisplay.textContent = `${val} kg`;
            calculateFinancials(val);
        });
        // Initial run at default 300 kg
        calculateFinancials(300);
    }

    // 8. 6-Stage Operational Flow Interactive Stepper
    const stageDetails = {
        1: {
            title: '01. RESCUE (Penyelamatan & Penjemputan Terjadwal)',
            tag: 'HULU & RANTAI DINGIN',
            desc: 'Penyelamatan terjadwal surplus buah & sayur Grade B dari hotel, katering, supermarket, dan pasar induk sebelum mengalami pembusukan.',
            points: [
                'Notifikasi sistem terintegrasi via Dashboard Mitra & WhatsApp Business (08.00–10.00 & 19.00–21.00 WIB).',
                'Armada kurir lokal dilengkapi boks berinsulasi (insulated cold-box) berpendingin <15°C.',
                'Pencatatan berat timbangan awal dan penyerahan tanda terima digital Food Passport.',
                'Insentif pemulihan nilai ekonomi bagi mitra pemasok hulu.'
            ],
            icon: 'fa-truck-fast',
            color: 'text-amber-500'
        },
        2: {
            title: '02. SORTIR (Seleksi Higienitas & Pemisahan Karakter Bahan)',
            tag: 'STANDAR KEAMANAN NOL TOLERANSI',
            desc: 'Inspeksi kualitas fisik ketat oleh teknologis pangan di Micro Circular Hub untuk memisahkan komoditas yang layak olah secara ilmiah.',
            points: [
                'Toleransi 0% untuk jamur, kebusukan, bau asam, atau kontaminasi hama (bahan rusak langsung dialihkan ke pakan/kompos).',
                'Pencucian bertingkat dengan air mengalir dan larutan food-grade sanitizer (ozonated water/klorin pangan).',
                'Klasifikasi Jalur A (Bahan berpati & berserat padat: pisang, wortel, labu, ubi, bayam).',
                'Klasifikasi Jalur B (Bahan berair tinggi / juicy: mangga, tomat, stroberi, nanas).'
            ],
            icon: 'fa-filter',
            color: 'text-emerald-500'
        },
        3: {
            title: '03. TRANSFORM (Adaptive Upcycling & Rekayasa Pangan)',
            tag: 'TEKNOLOGI PENGOLAHAN PRESISI',
            desc: 'Proses pengolahan canggih suhu rendah yang mempertahankan 100% nutrisi, serat pangan, pigmen alami, dan antioksidan.',
            points: [
                'Lini Kering: Steam blanching / asam sitrat 0.2% -> Food Dehydrator suhu 50°C–60°C selama 8–12 jam -> Penggilingan mikro 100 mesh.',
                'Lini Basah: Heavy-duty pulper / blender -> Pasteurisasi suhu 75°C–85°C selama 15 menit -> Rapid cooling.',
                'Penurunan drastis kadar air dan aktivitas air (aw < 0.60) yang menghentikan pertumbuhan mikroba.',
                'Perpanjangan masa simpan alami dari 2-3 hari menjadi 6 hingga 12 bulan tanpa bahan pengawet sintetis.'
            ],
            icon: 'fa-arrows-rotate',
            color: 'text-lime-500'
        },
        4: {
            title: '04. QUALITY CONTROL (Uji Fisikokimia & Lab MBRIO)',
            tag: 'VALIDASI LABORATORIUM RESMI BPOM',
            desc: 'Setiap batch wajib melalui pemeriksaan ketat parameter fisikokimia internal dan uji mikrobiologi berkala di laboratorium independen.',
            points: [
                'Uji internal per batch: Kadar air moisture analyzer (≤ 8,0%), keasaman pH meter (pH ≤ 4,5), serta organoleptik aroma/warna/tekstur.',
                'Uji berkala di MBRIO Food Laboratory: Angka Lempeng Total (TPC), Salmonella, Coliform, serta Kapang dan Khamir.',
                'Shelf-life Testing dengan metode Accelerated Shelf-Life Testing (ASLT).',
                'Pemenuhan sertifikasi Halal Indonesia & standar CPPOB (Cara Produksi Pangan Olahan yang Baik) BPOM RI.'
            ],
            icon: 'fa-microscope',
            color: 'text-cyan-500'
        },
        5: {
            title: '05. TRACE & QR (Pengemasan Vakum & Food Passport QR)',
            tag: 'INTEGRITAS DIGITAL PER BATCH',
            desc: 'Produk yang lolos QC dikemas kedap udara dan disematkan label identitas digital Food Passport QR unik yang transparan.',
            points: [
                'Pengemasan menggunakan mesin Chamber Vacuum Sealer dalam kantong food-grade nylon multi-layer kedap oksigen.',
                'Generator otomatis kode QR unik batch (misal #RV-2026-014-SBY) yang dapat dipindai kamera smartphone apapun.',
                'Perhitungan otomatis Circularity Score (0-100) menggunakan formula matematis pemulihan massa dan emisi karbon dicegah.',
                'Konsumen B2B/B2C dapat melihat asal-usul mitra, tanggal rescue, dan lembar sertifikat analisis (CoA).'
            ],
            icon: 'fa-qrcode',
            color: 'text-indigo-500'
        },
        6: {
            title: '06. RETURN (Distribusi Berdampak & Pelaporan ESG)',
            tag: 'EKONOMI SIRKULAR LENGKAP',
            desc: 'Penyaluran bahan pangan berkualitas tinggi ke UMKM bakery dan konsumen, sekaligus mengirimkan laporan reduksi emisi CO₂-eq ke mitra hulu.',
            points: [
                'Distribusi pesanan B2B ke UMKM bakery, produsen pastry, kue kering, dan pabrik mi sehat dengan harga hemat 25%-52.6%.',
                'Penjualan produk ritel B2C bernilai tambah tinggi di platform e-commerce dan bazar kampus.',
                'Pembaruan otomatis metrik sertifikat hijau pada Automated ESG Dashboard mitra hotel & korporasi.',
                'Pemberian lencana resmi "REVALUE Circular Partner" sebagai bukti nyata implementasi SDG 12, 8, dan 9.'
            ],
            icon: 'fa-recycle',
            color: 'text-forest-600'
        }
    };

    function selectStage(stageNum) {
        const data = stageDetails[stageNum];
        if (!data) return;

        // Update active dots / buttons
        document.querySelectorAll('.stage-btn').forEach(btn => {
            const num = btn.getAttribute('data-stage');
            if (num == stageNum) {
                btn.classList.add('bg-lime-400', 'text-forest-900', 'font-black', 'shadow-lg');
                btn.classList.remove('bg-gray-100', 'dark:bg-darkbg-800', 'text-gray-600', 'dark:text-gray-300');
            } else {
                btn.classList.remove('bg-lime-400', 'text-forest-900', 'font-black', 'shadow-lg');
                btn.classList.add('bg-gray-100', 'dark:bg-darkbg-800', 'text-gray-600', 'dark:text-gray-300');
            }
        });

        // Update display card
        const card = document.getElementById('stage-detail-card');
        if (card) {
            card.innerHTML = `
                <div class="flex flex-col md:flex-row gap-8 items-start">
                    <div class="md:w-1/3 w-full bg-forest-900 text-white p-6 rounded-2xl flex flex-col justify-between h-full border border-forest-700/60 shadow-xl">
                        <div>
                            <span class="inline-block px-3 py-1 rounded-full bg-lime-400/20 text-lime-400 text-xs font-bold mb-4 tracking-wider uppercase">${data.tag}</span>
                            <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-3xl text-lime-400 mb-6 shadow-inner">
                                <i class="fa-solid ${data.icon}"></i>
                            </div>
                            <h4 class="text-xl sm:text-2xl font-black mb-3 leading-snug">${data.title}</h4>
                            <p class="text-sm text-gray-300 leading-relaxed mb-6">${data.desc}</p>
                        </div>
                        <div class="pt-4 border-t border-forest-800/80 text-xs text-lime-300 flex items-center justify-between">
                            <span>SOP Micro Circular Hub</span>
                            <span class="font-bold">Step ${stageNum} / 6</span>
                        </div>
                    </div>
                    <div class="md:w-2/3 w-full space-y-4">
                        <h5 class="text-base font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                            <i class="fa-solid fa-list-check text-lime-500"></i> Prosedur Operasional Terstandarisasi (SOP)
                        </h5>
                        <div class="grid grid-cols-1 gap-3">
                            ${data.points.map((pt, i) => `
                                <div class="p-4 rounded-xl bg-white dark:bg-darkbg-800 border border-gray-200 dark:border-gray-700 shadow-sm flex items-start gap-4">
                                    <div class="w-8 h-8 rounded-full bg-lime-400/20 text-forest-800 dark:text-lime-400 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                                        ${i + 1}
                                    </div>
                                    <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">${pt}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    document.querySelectorAll('.stage-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            selectStage(btn.getAttribute('data-stage'));
        });
    });
    // Init stage 1
    selectStage(1);

    // 9. BMC 9-Blok Filter & Explorer
    const bmcCards = document.querySelectorAll('.bmc-item-card');
    const bmcFilterBtns = document.querySelectorAll('.bmc-filter-btn');

    bmcFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const zone = btn.getAttribute('data-zone');
            bmcFilterBtns.forEach(b => {
                b.classList.remove('bg-forest-800', 'text-lime-400', 'shadow-md');
                b.classList.add('bg-white', 'dark:bg-darkbg-800', 'text-gray-700', 'dark:text-gray-300');
            });
            btn.classList.add('bg-forest-800', 'text-lime-400', 'shadow-md');
            btn.classList.remove('bg-white', 'dark:bg-darkbg-800', 'text-gray-700', 'dark:text-gray-300');

            bmcCards.forEach(card => {
                if (zone === 'all' || card.getAttribute('data-zone') === zone) {
                    card.classList.remove('hidden');
                    card.classList.add('animate-fadeIn');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 10. Team Member Profile Modal Details
    const teamProfiles = {
        'bimo': {
            name: 'BIMO SATRIO',
            role: 'Ketua Tim / Chief Executive Officer (CEO)',
            subRole: 'Head of Business Development & Strategic Partnerships',
            avatarIcon: 'fa-chess-king',
            badgeBg: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40',
            quote: '“Membangun jembatan ekonomi sirkular yang membuktikan bahwa pemulihan lingkungan dan profitabilitas bisnis dapat bersatu dalam satu tarikan nafas.”',
            bio: 'Mahasiswa berorientasi entrepreneurship dan analisis strategis bisnis sirkular. Memimpin Tim Kompespiking dalam kompetisi nasional ECTION 2026 UNESA dengan fokus pada arsitektur model bisnis multi-pihak, penetrasi pasar B2B, dan negosiasi pasokan surplus pangan.',
            jobdesk: [
                'Memimpin perumusan visi strategis, model bisnis Business Model Canvas (BMC), dan peta jalan ekspansi 3 tahun REVALUE.',
                'Bertanggung jawab penuh atas akuisisi kontrak pasokan surplus pangan hulu dengan manajemen hotel bintang 3–5, jaringan ritel supermarket, katering korporat, dan pengelola pasar induk.',
                'Memimpin penetrasi penjualan langsung (direct sales) bahan baku tepung komposit dan purée ke UMKM bakery dan industri kuliner lokal di koridor Surabaya–Sidoarjo–Malang.',
                'Merancang dan mengeksekusi skema langganan B2B berulang (Circular Partnership Tiered Recurring Fee & lisensi Food Passport QR).',
                'Mengawasi alokasi anggaran investasi CapEx (Rp34,5 Juta) dan manajemen arus kas bulanan OpEx (Rp14,25 Juta) untuk memastikan pencapaian titik impas (BEP) dan payback period 5,1 bulan.',
                'Bertindak sebagai pembicara utama (lead presenter) mewakili tim pada penjurian Ecopreneur Competition ECTION 2026 UNESA dan forum kemitraan investor.'
            ],
            kpis: [
                'Akuisisi 5–10 mitra pasokan hulu aktif pada Kuartal 1',
                'Penetrasi kontrak B2B ke 15–20 UMKM bakery aktif (serapan 300 kg/bln)',
                'Ketercapaian target omzet tahun pertama Rp252.000.000 (margin bersih 32,1%)',
                'Pencapaian Payback Period di bawah 6 bulan sejak peluncuran'
            ],
            skills: ['Strategic Planning', 'B2B Corporate Sales', 'Contract Negotiation', 'Financial Modeling', 'ESG Framework', 'Public Pitching']
        },
        'putra': {
            name: 'PUTRA PANGERAN JEREMIA',
            role: 'Anggota 1 / Chief Operating Officer (COO)',
            subRole: 'Head of Food Technology, Formulations & Quality Control',
            avatarIcon: 'fa-flask-vial',
            badgeBg: 'bg-amber-500/20 text-amber-400 border border-amber-500/40',
            quote: '“Surplus pangan Grade B memiliki kandungan gizi dan fitokimia 100% utuh. Kuncinya ada pada rekayasa pengolahan higienis berstandar ilmiah ketat.”',
            bio: 'Fokus pada rekayasa teknologi pangan, standardisasi keamanan pangan CPPOB/GMP, formulasi upcycling adaptif, dan protokol kendali mutu mikrobiologi bekerja sama dengan laboratorium MBRIO dan Badan Pengawas Obat dan Makanan (BPOM).',
            jobdesk: [
                'Merancang dan mengoperasikan tata kelola fasilitas Micro Circular Hub berbasis cloud kitchen (30–45 m²) sesuai prinsip Cara Produksi Pangan Olahan yang Baik (CPPOB/GMP).',
                'Menyusun Standard Operating Procedure (SOP) sortasi hulu yang sangat ketat dengan toleransi 0% terhadap bahan pangan berjamur, busuk, atau berbau asam.',
                'Mengembangkan formula Adaptive Upcycling untuk dua lini utama: dehidrasi suhu rendah (50°C–60°C) tepung komposit 100-mesh dan purée beku pasteurisasi (75°C–85°C).',
                'Melaksanakan pengujian fisikokimia harian di lab internal Hub: pengukuran kadar air dengan infrared moisture analyzer (wajib ≤ 8,0%), uji aktivitas air (aw < 0,60), dan uji pH (≤ 4,5).',
                'Mengoordinasikan pengujian laboratorium mikrobiologi independen bersama MBRIO Food Laboratory (uji Salmonella, E. coli, Coliform, dan kapang/khamir) serta uji masa simpan (ASLT).',
                'Memastikan seluruh tahapan proses produksi memenuhi persyaratan sertifikasi Halal Indonesia dan legalitas edar PIRT/BPOM RI.'
            ],
            kpis: [
                'Tingkat kelolosan uji mikrobiologi lab MBRIO 100% Passed',
                'Efisiensi rendemen pengolahan (Yield rata-rata 50% blended)',
                'Zero-defect mutu produk tepung (kadar air konstan ≤ 8,0%)',
                'Kepatuhan 100% checklist CPPOB dan sertifikasi Halal'
            ],
            skills: ['Food Engineering', 'HACCP & CPPOB / GMP', 'Microbiology Lab Testing', 'Moisture & Water Activity Analysis', 'Thermal Pasteurization', 'Halal Compliance']
        },
        'ivan': {
            name: 'IVAN FADHILA',
            role: 'Anggota 2 / Chief Technology Officer (CTO)',
            subRole: 'Head of Digital Systems, IoT & Rantai Pasok Logistik',
            avatarIcon: 'fa-network-wired',
            badgeBg: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40',
            quote: '“Transparansi digital adalah kunci kepercayaan. Melalui Food Passport QR dan algoritma Circularity Score, setiap gram pangan yang diselamatkan dapat dibuktikan jejaknya.”',
            bio: 'Bertanggung jawab atas infrastruktur digital terpadu REVALUE, arsitektur data Food Passport QR interaktif, pengembangan Automated ESG Dashboard, serta optimalisasi logistik rantai dingin dan utilitas mesin pengolahan.',
            jobdesk: [
                'Membangun dan mengelola arsitektur digital platform web Food Passport (QR Code) berbasis cloud untuk ketertelusuran rantai pasok dari hulu ke hilir.',
                'Merumuskan dan mengimplementasikan algoritma Circularity Score (CS = 0.5 R_mass + 0.3 Q_shelf + 0.2 E_pack) untuk setiap batch produk terstandar.',
                'Mengembangkan antarmuka real-time Automated ESG Dashboard bagi mitra korporasi hulu untuk melacak tonase pangan diselamatkan dan konversi reduksi emisi gas rumah kaca (2,32424 kg CO₂-eq/kg).',
                'Mengelola sistem logistik rantai pasok (cold-chain insulated box <15°C) serta optimasi rute armada penjemputan surplus pangan dan pengiriman pesanan B2B lokal.',
                'Mengawasi instalasi, pemeliharaan preventif (preventive maintenance), dan kalibrasi mesin pengolahan utama (dehydrator multi-tray, flour grinder, vacuum chamber sealer, freezer).',
                'Menganalisis metrik data neraca massa (mass balance) operasional dan menyiapkan kesiapan sistem teknologi untuk replikasi Social Franchise Multi-Hub di Tahun 3.'
            ],
            kpis: [
                'Uptime sistem Food Passport QR & Dashboard ESG 99,9%',
                'Ketepatan waktu penjemputan logistik surplus hulu < 2 jam sejak order',
                'Keandalan mesin pengolahan & preventive maintenance 100% terjadwal',
                'Akurasi kalkulasi otomatis Circularity Score & emisi karbon 100%'
            ],
            skills: ['Web Architecture & Cloud Systems', 'QR Code Generation Systems', 'Cold-Chain Logistics Management', 'Equipment Maintenance & IoT', 'Algorithmic Impact Modeling', 'Data Visualization']
        }
    };

    const teamModal = document.getElementById('team-profile-modal');
    const modalContent = document.getElementById('team-modal-body');

    window.openTeamModal = function(memberKey) {
        const mem = teamProfiles[memberKey];
        if (!mem || !teamModal || !modalContent) return;

        modalContent.innerHTML = `
            <div class="relative bg-white dark:bg-darkbg-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-gray-200 dark:border-forest-700/60 shadow-2xl overflow-y-auto max-h-[90vh]">
                <button onclick="closeTeamModal()" class="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 dark:bg-darkbg-700 text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center justify-center transition">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>

                <div class="flex items-center gap-4 mb-6">
                    <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-forest-900 flex items-center justify-center text-3xl sm:text-4xl text-lime-400 shadow-lg border border-forest-700">
                        <i class="fa-solid ${mem.avatarIcon}"></i>
                    </div>
                    <div>
                        <span class="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1 ${mem.badgeBg}">
                            ${mem.subRole}
                        </span>
                        <h3 class="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">${mem.name}</h3>
                        <p class="text-sm font-semibold text-forest-700 dark:text-lime-300">${mem.role}</p>
                    </div>
                </div>

                <div class="p-4 rounded-xl bg-forest-50 dark:bg-darkbg-900 border border-forest-200 dark:border-forest-800 mb-6 italic text-sm text-forest-900 dark:text-gray-300">
                    ${mem.quote}
                </div>

                <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    ${mem.bio}
                </p>

                <div class="mb-6">
                    <h4 class="text-sm font-black text-forest-900 dark:text-lime-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-briefcase"></i> Rincian Jobdesk & Tanggung Jawab Operasional:
                    </h4>
                    <ul class="space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                        ${mem.jobdesk.map(j => `
                            <li class="flex items-start gap-2.5">
                                <i class="fa-solid fa-circle-check text-lime-500 text-xs mt-1 shrink-0"></i>
                                <span>${j}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="mb-6">
                    <h4 class="text-sm font-black text-forest-900 dark:text-lime-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                        <i class="fa-solid fa-bullseye"></i> Key Performance Indicators (KPI):
                    </h4>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        ${mem.kpis.map(k => `
                            <div class="p-3 rounded-lg bg-gray-50 dark:bg-darkbg-700/60 border border-gray-200 dark:border-gray-700 font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                <i class="fa-solid fa-arrow-trend-up text-lime-500 shrink-0"></i>
                                <span>${k}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div>
                    <h4 class="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Bidang Keahlian:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${mem.skills.map(s => `
                            <span class="px-2.5 py-1 rounded-md bg-forest-800/10 dark:bg-forest-900/60 text-forest-800 dark:text-lime-300 text-xs font-medium border border-forest-600/20">
                                ${s}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        teamModal.classList.remove('hidden');
        teamModal.classList.add('flex');
    };

    window.closeTeamModal = function() {
        if (!teamModal) return;
        teamModal.classList.add('hidden');
        teamModal.classList.remove('flex');
    };

    if (teamModal) {
        teamModal.addEventListener('click', (e) => {
            if (e.target === teamModal) {
                closeTeamModal();
            }
        });
    }

    // 11. Survey Image Lightbox
    const surveyLightbox = document.getElementById('survey-lightbox');
    window.openSurveyLightbox = function() {
        if (surveyLightbox) {
            surveyLightbox.classList.remove('hidden');
            surveyLightbox.classList.add('flex');
        }
    };
    window.closeSurveyLightbox = function() {
        if (surveyLightbox) {
            surveyLightbox.classList.add('hidden');
            surveyLightbox.classList.remove('flex');
        }
    };

    // 12. TOWS Matrix Interactive Switcher
    const towsTabs = document.querySelectorAll('.tows-tab-btn');
    const towsCards = document.querySelectorAll('.tows-content-card');

    towsTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tows');
            towsTabs.forEach(t => {
                t.classList.remove('bg-forest-800', 'text-lime-400');
                t.classList.add('bg-white', 'dark:bg-darkbg-800', 'text-gray-700', 'dark:text-gray-300');
            });
            tab.classList.add('bg-forest-800', 'text-lime-400');
            tab.classList.remove('bg-white', 'dark:bg-darkbg-800', 'text-gray-700', 'dark:text-gray-300');

            towsCards.forEach(c => {
                if (c.getAttribute('data-tows-card') === target) {
                    c.classList.remove('hidden');
                } else {
                    c.classList.add('hidden');
                }
            });
        });
    });

    // 13. FAQ Accordion Logic
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const ans = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isExpanded = !ans.classList.contains('hidden');

            // Close other items
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
            document.querySelectorAll('.faq-icon').forEach(i => i.classList.remove('rotate-180'));

            if (!isExpanded) {
                ans.classList.remove('hidden');
                icon.classList.add('rotate-180');
            }
        });
    });

    // 14. Contact / Lead Consultation Form submission toast
    const contactForm = document.getElementById('revalue-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim Pengajuan...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Berhasil Terkirim!';
                submitBtn.classList.remove('bg-lime-400', 'text-forest-900');
                submitBtn.classList.add('bg-emerald-600', 'text-white');

                // Show alert toast
                alert('Terima kasih! Tim Kompespiking REVALUE (Bimo Satrio, Putra Pangeran Jeremia, Ivan Fadhila) akan segera menghubungi Anda dalam kurun waktu 1x24 jam untuk koordinasi kemitraan / pengiriman sampel.');

                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.add('bg-lime-400', 'text-forest-900');
                    submitBtn.classList.remove('bg-emerald-600', 'text-white');
                }, 2500);
            }, 1200);
        });
    }
});
