<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portofolio | Membangun Masa Depan dengan Kode & AI</title>

    <!-- CSS & JS Assets Via Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <!-- Latar Belakang Lingkungan Bercahaya -->
    <div class="ambient-lighting"></div>

    <!-- Navigasi -->
    <nav class="navbar">
        <div class="logo">KARA.DEV</div>
        <div class="nav-links">
            <a href="#hero" class="active">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
        </div>
        <a href="https://wa.me/6285241068441?text=Halo%20Kara,%20saya%20tertarik%20mengajak%20Anda%20berkolaborasi%20dalam%20sebuah%20project!" target="_blank" style="text-decoration: none;"><button class="hire-btn">Hire Me via WA</button></a>
    </nav>

    <!-- Pahlawan (Hero) Utama -->
    <main class="hero" id="hero">
        <div class="hero-left">
            <div class="subtitle">Portofolio Digital Dari KvRaCode</div>
            <h1 class="title">MEMBANGUN MASA DEPAN DENGAN KODE & AI.</h1>

            <div class="cards-container">
                <div class="capability-card">
                    <div class="icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                        </svg>
                    </div>
                    <div class="card-content">
                        <h3>Full-Stack Dev</h3>
                        <p>Crafting seamless end-to-end applications</p>
                    </div>
                </div>

                <div class="capability-card">
                    <div class="icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <path d="M12 18h.01" />
                        </svg>
                    </div>
                    <div class="card-content">
                        <h3>Mobile Dev (Android)</h3>
                        <p>Native performance and fluid interfaces</p>
                    </div>
                </div>

                <div class="capability-card">
                    <div class="icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </div>
                    <div class="card-content">
                        <h3>Machine Learning</h3>
                        <p>Computer vision & intelligent processing</p>
                    </div>
                </div>
            </div>

            <button class="primary-btn">
                LIHAT PROYEK SAYA
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <div class="hero-right">
            <!-- Disinilah objek 3D kita akan dimuat oleh Three.js -->
            <div id="canvas-container"></div>
        </div>
    </main>

    <!-- Keahlian & Teknologi (Skills Section) -->
    <section class="skills-section fade-in" id="skills">
        <div class="skills-heading">
            <span class="skills-subtitle">TEKNOLOGI & KEAHLIAN</span>
            <h2 class="skills-title">Mastering the <span class="text-neon-purple">Digital Forge.</span></h2>
            <p class="skills-desc">Sekumpulan alat dan bahasa pemrograman yang saya gunakan untuk membangun solusi
                perangkat lunak yang skalabel, aman, dan berkinerja tinggi.</p>
        </div>

        <div class="skills-grid">
            <!-- 01 Frontend -->
            <div class="skill-card purple-glow">
                <div class="card-top">
                    <div class="card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg></div>
                    <div class="card-number">01</div>
                </div>
                <h3>Frontend</h3>
                <p>Membangun antarmuka yang responsif, intuitif, dan cepat dengan fokus pada UX.</p>
                <div class="skill-bars">
                    <div class="s-bar">
                        <div class="s-info"><span>REACT / NEXT.JS</span><span>95%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-purple" style="width: 95%;"></div>
                        </div>
                    </div>
                    <div class="s-bar">
                        <div class="s-info"><span>TAILWIND CSS</span><span>98%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-purple" style="width: 98%;"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 02 Backend -->
            <div class="skill-card cyan-glow">
                <div class="card-top">
                    <div class="card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                        </svg></div>
                    <div class="card-number">02</div>
                </div>
                <h3>Backend</h3>
                <p>Arsitektur server-side yang kuat, manajemen database, dan API yang aman.</p>
                <div class="skill-bars">
                    <div class="s-bar">
                        <div class="s-info"><span>NODE.JS / GO</span><span>90%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-cyan" style="width: 90%;"></div>
                        </div>
                    </div>
                    <div class="s-bar">
                        <div class="s-info"><span>POSTGRESQL</span><span>85%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-cyan" style="width: 85%;"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 03 Mobile -->
            <div class="skill-card purple-glow">
                <div class="card-top">
                    <div class="card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </svg></div>
                    <div class="card-number">03</div>
                </div>
                <h3>Mobile Apps</h3>
                <p>Pengembangan aplikasi cross-platform seluler yang dinamis dan native-like.</p>
                <div class="skill-bars">
                    <div class="s-bar">
                        <div class="s-info"><span>REACT NATIVE / FLUTTER</span><span>92%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-purple" style="width: 92%;"></div>
                        </div>
                    </div>
                    <div class="s-bar">
                        <div class="s-info"><span>KOTLIN / ANDROID</span><span>88%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-purple" style="width: 88%;"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 04 AI / ML -->
            <div class="skill-card cyan-glow">
                <div class="card-top">
                    <div class="card-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg></div>
                    <div class="card-number">04</div>
                </div>
                <h3>AI / ML</h3>
                <p>Integrasi model bahasa besar dan pengembangan pipeline cerdas.</p>
                <div class="skill-bars">
                    <div class="s-bar">
                        <div class="s-info"><span>PYTORCH / LLMS</span><span>75%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-cyan" style="width: 75%;"></div>
                        </div>
                    </div>
                    <div class="s-bar">
                        <div class="s-info"><span>DATA ANALYSIS</span><span>80%</span></div>
                        <div class="s-track">
                            <div class="s-fill bg-cyan" style="width: 80%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Terminal Inventory Mockup -->
        <div class="terminal-mockup">
            <div class="terminal-header">
                <div class="term-buttons">
                    <div class="t-btn btn-r"></div>
                    <div class="t-btn btn-y"></div>
                    <div class="t-btn btn-g"></div>
                </div>
                <div class="term-title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        style="margin-right: 5px;">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    TOOLS_INVENTORY.SH
                </div>
                <div class="term-close">×</div>
            </div>

            <div class="terminal-body">
                <p class="term-prompt"><span class="term-user">kara@system:~$</span> ls tools/software</p>
                <div class="tools-grid">
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)"
                                stroke-width="2">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </span><span>VS Code</span>
                    </div>
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-blue)"
                                stroke-width="2">
                                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
                                <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
                                <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
                                <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
                                <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
                            </svg>
                        </span><span>Figma</span>
                    </div>
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)"
                                stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path
                                    d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                </path>
                            </svg>
                        </span><span>Postman</span>
                    </div>
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-blue)"
                                stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                        </span><span>Git / GitHub</span>
                    </div>
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)"
                                stroke-width="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </span><span>Redis</span>
                    </div>
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-blue)"
                                stroke-width="2">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </span><span>Nginx</span>
                    </div>
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-purple)"
                                stroke-width="2">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </span><span>Kubernetes</span>
                    </div>
                    <div class="tool-item">
                        <span class="t-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--neon-blue)"
                                stroke-width="2">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </span><span>Auth0</span>
                    </div>
                </div>
                <p class="term-prompt mt-4"><span class="term-user">kara@system:~$</span> <span
                        class="term-cursor">_</span></p>
            </div>

            <div class="terminal-footer">
                <div class="status-left">
                    <div class="status-dot"></div>
                    <span>SYSTEM STATUS: OPTIMAL & AVAILABLE FOR HIRE</span>
                </div>
                <div class="status-right">
                    <span class="badge-dark">LATENCY: 12ms</span>
                    <span class="badge-dark text-cyan">UPTIME: 99.9%</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Perjalanan / Experience (The Journey) -->
    <section class="experience-section fade-in" id="experience">
        <div class="exp-badge-container">
            <div class="exp-badge">
                <span class="status-dot"></span> WORK_HISTORY_V3.0
            </div>
        </div>
        
        <div class="skills-heading">
            <h2 class="skills-title">The <span class="text-neon-purple">Journey.</span></h2>
            <p class="skills-desc">Membangun infrastruktur digital berskala besar dengan fokus pada performa, keamanan, dan arsitektur yang berkelanjutan.</p>
        </div>

        <div class="journey-container">
            <!-- Sidebar Kiri -->
            <div class="journey-sidebar">
                <!-- Summary Card -->
                <div class="side-card purple-border fade-in">
                    <h3>Pengalaman Karier</h3>
                    <p class="text-secondary mt-2" style="font-size: 0.9rem; line-height: 1.5;">Pengalaman mumpuni dalam merancang <i>Software Architecture</i>, Pengembangan Seluler, & Integrasi <i>Computer Vision</i>.</p>
                </div>

                <!-- Tech Ecosystem Card -->
                <div class="side-card bg-darker mt-4 fade-in">
                    <div class="card-header-small">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--neon-blue)" stroke-width="2"><path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path></svg>
                        <span>TECH ECOSYSTEM</span>
                    </div>
                    <div class="tech-chips">
                        <span class="chip">Laravel</span>
                        <span class="chip">React Native</span>
                        <span class="chip">YOLOv8</span>
                        <span class="chip">OpenCV</span>
                        <span class="chip">Mobile Apps</span>
                        <span class="chip">Python</span>
                    </div>
                </div>

                <!-- History.sh terminal mockup -->
                <div class="term-micro mt-4 fade-in">
                    <div class="term-micro-nav">
                        <div class="dots"><span class="dr"></span><span class="dy"></span><span class="dg"></span></div>
                        <span class="tm-title">history.sh</span>
                    </div>
                    <div class="term-micro-body">
                        <p><span class="text-neon-blue">$</span> <span class="text-neon-purple">git log --oneline</span></p>
                        <p class="text-dim">f2a3c1 - Integrated YOLO model</p>
                        <p class="text-dim">8d4e9b - Migrated DB to Laravel</p>
                        <p class="text-dim">2a91f5 - Implemented Rest API</p>
                        <p class="text-dim">c7e4d2 - Initial React App</p>
                        <p><span class="text-neon-blue">$</span> <span class="term-cursor">_</span></p>
                    </div>
                </div>
            </div>

            <!-- Garis Waktu Kanan -->
            <div class="journey-timeline fade-in">
                <div class="timeline-line"></div>
                
                <!-- Item 1: Computer Vision -->
                <div class="timeline-item">
                    <div class="timeline-node purple-node"></div>
                    <div class="timeline-content">
                        <div class="tl-header">
                            <div>
                                <h3>Computer Vision / AI Engineer</h3>
                                <span class="tl-company"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg> Integrasi Deteksi Objek</span>
                            </div>
                            <span class="tl-date">SEKARANG</span>
                        </div>
                        <p class="tl-desc">Memimpin perancangan model kecerdasan buatan berbasis <b>Computer Vision</b> untuk mendeteksi spesifikasi objek secara presisi tinggi.</p>
                        <ul class="tl-bullets">
                            <li>Melakukan seting pemrosesan *real-time* ke sistem *edge*.</li>
                            <li>Mengintegrasikan hasil deteksi *inference* dari layer AI langsung ke endpoint API.</li>
                        </ul>
                    </div>
                </div>

                <!-- Item 2: Mobile -->
                <div class="timeline-item">
                    <div class="timeline-node cyan-node"></div>
                    <div class="timeline-content">
                        <div class="tl-header">
                            <div>
                                <h3>Mobile Application Developer</h3>
                                <span class="tl-company"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> Produk End-User</span>
                            </div>
                            <span class="tl-date">FOKUS UTAMA</span>
                        </div>
                        <p class="tl-desc">Membuat aplikasi antarmuka seluler/mobile inovatif yang menghubungkan data *machine learning* dan sistem pendukung pengguna akhir.</p>
                        <ul class="tl-bullets">
                            <li>Membangun logika antarmuka seluler dengan responsivitas navigasi optimal.</li>
                            <li>Sinkronisasi data multi-perangkat via API Laravel dan pengamanan autentikasi pengguna secara *native*.</li>
                        </ul>
                    </div>
                </div>

                <!-- Item 3: Laravel Web -->
                <div class="timeline-item">
                    <div class="timeline-node dim-node"></div>
                    <div class="timeline-content">
                        <div class="tl-header">
                            <div>
                                <h3>Fullstack Web Developer</h3>
                                <span class="tl-company"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"></path></svg> Kerangka Dasar Laravel</span>
                            </div>
                            <span class="tl-date">INFRASTRUKTUR AWAL</span>
                        </div>
                        <p class="tl-desc">Merekayasa portal backend terpusat *(central server)* beserta database *relational* solid menggunakan **Laravel** sebagai platform komando utama.</p>
                        
                        <div class="tl-images">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80" alt="Code Architecture" />
                            <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80" alt="Matrix Engineering" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Ayo Berkolaborasi (Contact Section) -->
    <section class="contact-section fade-in" id="contact">
        <div class="contact-layout">
            <!-- Info Kiri -->
            <div class="contact-info">
                <div class="status-online">
                    <span class="status-dot"></span> SISTEM ONLINE
                </div>
                <h2 class="contact-title">Ayo<br><span class="text-neon-purple">Berkolaborasi.</span></h2>
                <p class="contact-desc">Membangun infrastruktur digital masa depan dengan presisi arsitektural. Hubungi saya untuk diskusi teknis atau peluang proyek baru.</p>

                <div class="contact-details">
                    <div class="detail-item">
                        <span class="detail-label">EMAIL_DIRECT</span>
                        <a href="mailto:hello@kara.dev" class="detail-value">hello@kara.dev</a>
                    </div>
                    <div class="detail-item mt-4">
                        <span class="detail-label">LOCATION_NODE</span>
                        <span class="detail-value">South Sulawesi, Indonesia [ID_SULSEL]</span>
                    </div>
                </div>

                <div class="social-links">
                    <a href="#" class="soc-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg></a>
                    <a href="#" class="soc-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></a>
                    <a href="#" class="soc-btn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></a>
                </div>
            </div>

            <!-- Formulir Terminal Kanan -->
            <div class="contact-terminal">
                <div class="term-micro-nav">
                    <div class="dots"><span class="dr"></span><span class="dy"></span><span class="dg"></span></div>
                    <span class="tm-title">CONTACT_MODULE.v2.SH</span>
                    <div></div>
                </div>
                <form action="https://formsubmit.co/karadevlop@gmail.com" method="POST">
                    <!-- Setup FormSubmit -->
                    <input type="hidden" name="_subject" value="Pesan Baru dari Portofolio Kara.DEV!">
                    <input type="hidden" name="_captcha" value="false">
                    
                    <div class="term-form-body">
                        <div class="form-row">
                            <div class="form-group">
                                <label>NAMA_PENGGUNA</label>
                                <div class="input-wrapper">
                                    <input type="text" name="name" required placeholder="Input Nama Anda...">
                                    <span class="input-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>ALAMAT_EMAIL</label>
                                <div class="input-wrapper">
                                    <input type="email" name="email" required placeholder="user@domain.com">
                                    <span class="input-icon">@</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group full-width mt-4">
                            <label>PESAN_ENKRIPSI</label>
                            <div class="input-wrapper">
                                <textarea name="message" required placeholder="Tuliskan pesan Anda di sini..." rows="4"></textarea>
                                <span class="input-icon top"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                            </div>
                        </div>
                    </div>
                    <div class="term-form-footer">
                        <span class="waiting-text">MENUNGGU INPUT...<span class="term-cursor">_</span></span>
                        <button type="submit" class="transmit-btn">KIRIM TRANSMISI <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"></path></svg></button>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <!-- Base Operations Map -->
    <section class="base-operations fade-in">
        <div class="map-overlay">
            <div class="map-pin">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#131722" stroke="white" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="4" fill="#9d4edd" stroke="none"></circle></svg>
            </div>
            <h3 class="base-title">Base Operations: SULSEL_ID</h3>
            <p class="base-coords">KORDINAT: -5.1476° S, 119.4327° E</p>
        </div>
    </section>

    <!-- Footer Modern -->
    <footer class="footer-modern">
        <div class="f-left">
            &copy; {{ date('Y') }} KARA.DEV // SYSTEM_STABLE
        </div>
        <div class="f-center">
            <a href="#">GITHUB</a>
            <a href="#">LINKEDIN</a>
            <a href="#">CODEPEN</a>
        </div>
        <div class="f-right">
            <span class="status-dot"></span> LATENSI: 14MS
        </div>
    </footer>
</body>

</html>