"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TiltCard } from "@/components/TiltCard";

const BRANDS = [
    {
        name: "Cemara",
        logo: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=150&q=80",
        desc: "LKS dan bank soal populer untuk SD–SMP dengan layout yang bersih dan mudah dipahami.",
    },
    {
        name: "Viva Pakarindo",
        logo: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=150&q=80",
        desc: "Kuat di buku ujian dan persiapan PAS/PTS untuk berbagai jenjang.",
    },
    {
        name: "Wajar",
        logo: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=150&q=80",
        desc: "Pilihan banyak sekolah negeri untuk latihan harian dan pengayaan.",
    },
    {
        name: "Maestro",
        logo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=150&q=80",
        desc: "Fokus pada pendalaman konsep dan soal bertipe HOTS.",
    },
    {
        name: "Fokus",
        logo: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=150&q=80",
        desc: "Seri intensif menjelang ujian dengan ringkasan materi padat.",
    },
    {
        name: "Kartika",
        logo: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=150&q=80",
        desc: "Materi tematik dan latihan kontekstual untuk jenjang SD.",
    },
    {
        name: "Cerdas",
        logo: "https://images.unsplash.com/photo-1519681393798-3828fb4090bb?auto=format&fit=crop&w=150&q=80",
        desc: "Buku latihan dengan variasi soal berjenjang dari mudah ke sulit.",
    },
    {
        name: "Cakrawala",
        logo: "https://images.unsplash.com/photo-1507842217121-9e962835d75d?auto=format&fit=crop&w=150&q=80",
        desc: "Koleksi soal ujian dan pembahasan yang lengkap untuk SMP–SMA.",
    },
    {
        name: "Mahir",
        logo: "https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=150&q=80",
        desc: "Latihan soal praktis untuk meningkatkan ketangkasan mengerjakan soal.",
    },
];

export const HomeContent = () => {
    const [activeBrandIndex, setActiveBrandIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBrandIndex((prev) => (prev + 1) % BRANDS.length);
        }, 4000); // 4 detik biar sempat kebaca

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const targets = document.querySelectorAll<HTMLElement>(
            ".animate-hero-scroll, .animate-reveal-scrub"
        );

        if (!targets.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15, // 15% elemen kelihatan baru animasi
                rootMargin: "0px 0px -10% 0px",
            }
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const activeBrand = BRANDS[activeBrandIndex];
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-page text-main font-body transition-colors duration-300">
            <Navbar />

            <div className="layout-container flex h-full grow flex-col">
                <div className="flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-full max-w-screen-xl flex-1 px-4 sm:px-10 md:px-20 lg:px-40">
                        <main className="flex flex-col gap-16 md:gap-24 lg:gap-32 mt-8">
                            {/* 2. Hero Section */}
                            <div className="animate-hero-scroll origin-bottom">
                                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                    <div
                                        className="flex min-h-[600px] flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-end px-8 pb-12 md:px-16 md:pb-20 relative"
                                        style={{
                                            backgroundImage:
                                                'linear-gradient(rgba(5, 8, 20, 0.3) 0%, rgba(5, 8, 20, 0.8) 100%), url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2690&auto=format&fit=crop")',
                                        }}
                                    >
                                        <div className="flex flex-col gap-6 text-left max-w-3xl relative z-10">
                                            <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight font-display drop-shadow-lg">
                                                Distributor LKS & <br /> Buku Ujian Sekolah
                                            </h1>
                                            <h2 className="text-white/95 text-lg md:text-xl font-medium leading-relaxed font-body max-w-2xl drop-shadow-md">
                                                Mitra terpercaya sekolah dan orang tua dalam menyediakan bahan ajar berkualitas. Stok terkontrol, pengiriman rapi, dan layanan profesional.
                                            </h2>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto mt-4">
                                            <Link
                                                href="https://wa.me/6281234567890"
                                                target="_blank"
                                                className="flex items-center justify-center rounded-lg h-14 px-8 bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg hover:-translate-y-1 transition-all text-lg font-bold tracking-wide"
                                            >
                                                Konsultasi Sekarang
                                            </Link>
                                            <Link
                                                href="#produk"
                                                className="flex items-center justify-center rounded-lg h-14 px-8 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all text-lg font-bold tracking-wide border border-white/30"
                                            >
                                                Lihat Katalog
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2.1 Merk / Penerbit yang Tersedia – Slider Card Besar */}
                            <section className="animate-reveal-scrub">
                                <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-end md:justify-between">
                                    <div>
                                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-1 block">
                                            Merk & Penerbit
                                        </span>
                                        <h2 className="text-primary-dark dark:text-primary text-2xl md:text-3xl font-bold font-display tracking-tight">
                                            Penerbit Unggulan di Kevin Book Store
                                        </h2>
                                        <p className="text-gray-700 text-sm md:text-base mt-1 max-w-xl">
                                            Kami bekerja sama dengan berbagai penerbit LKS dan buku ujian yang sudah akrab di sekolah-sekolah Indonesia.
                                        </p>
                                    </div>

                                    <div className="hidden md:flex flex-col items-end">
                                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold mb-1">
                                            Sedang Ditampilkan
                                        </p>
                                        <p className="text-lg md:text-xl font-display font-bold text-primary-dark dark:text-white">
                                            {activeBrand.name}
                                        </p>
                                    </div>
                                </div>

                                {/* Kartu slider utama */}
                                <div className="max-w-3xl mx-auto">
                                    <div
                                        key={activeBrand.name}
                                        className="brand-slide group relative overflow-hidden rounded-2xl border border-border-soft bg-bg-elevated/80 dark:bg-bg-elevated/90 shadow-2xl"
                                    >
                                        {/* Gambar besar brand */}
                                        <div className="relative aspect-[16/9] w-full overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-soft/30 via-transparent to-primary-soft/40 pointer-events-none" />
                                            <div className="absolute inset-0 scale-105 group-hover:scale-110 transition-transform duration-700 ease-out">
                                                <Image
                                                    src={activeBrand.logo}
                                                    alt={activeBrand.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 768px"
                                                />
                                            </div>

                                            {/* Overlay teks di dalam gambar */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 mb-3 border border-white/20 backdrop-blur-md">
                                                    <span className="material-symbols-outlined text-sm text-amber-300">
                                                        workspace_premium
                                                    </span>
                                                    <span className="text-xs font-semibold tracking-wide text-white uppercase">
                                                        Penerbit Mitra KBS
                                                    </span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white drop-shadow mb-2">
                                                    {activeBrand.name}
                                                </h3>
                                                <p className="text-white/85 text-sm md:text-base max-w-2xl leading-relaxed font-body">
                                                    {activeBrand.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dots indikator di bawah gambar */}
                                    <div className="flex items-center justify-center gap-2 mt-5">
                                        {BRANDS.map((brand, index) => (
                                            <button
                                                key={brand.name}
                                                type="button"
                                                onClick={() => setActiveBrandIndex(index)}
                                                className={`h-2.5 rounded-full transition-all ${index === activeBrandIndex
                                                    ? "w-7 bg-primary"
                                                    : "w-2.5 bg-border-soft hover:bg-primary/60"
                                                    }`}
                                                aria-label={`Lihat merk ${brand.name}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* 3. Untuk Siapa KBS? */}
                            <section id="untuk-siapa" className="animate-reveal-scrub">
                                <div className="flex items-center gap-4 mb-10">
                                    <span className="h-px w-12 bg-primary/30"></span>
                                    <h2 className="text-primary-dark dark:text-primary text-3xl md:text-4xl font-bold font-display tracking-tight">
                                        Bab 1: Siapa yang Kami Layani?
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {[
                                        {
                                            icon: "school",
                                            title: "Sekolah & Guru",
                                            desc: "Solusi pengadaan satu pintu untuk kebutuhan satu sekolah. Rekap mudah, pembayaran fleksibel.",
                                        },
                                        {
                                            icon: "groups",
                                            title: "Koordinator Kelas",
                                            desc: "Bantu orang tua pesan kolektif. Transparan, rapi, dan menguntungkan bagi kas kelas.",
                                            highlight: true,
                                        },
                                        {
                                            icon: "person",
                                            title: "Orang Tua",
                                            desc: "Pesan satuan untuk putra-putri Anda. Tersedia di marketplace kesayangan.",
                                        },
                                    ].map((item, index) => (
                                        <TiltCard
                                            key={index}
                                            className={`h-full animate-reveal-scrub stagger-${index + 1}`}
                                        >
                                            <div className="flex flex-col items-start gap-4 p-8">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                                    <span className="material-symbols-outlined text-3xl">
                                                        {item.icon}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h3 className="mb-2 text-xl font-bold font-display text-primary-dark">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-muted leading-relaxed font-body">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </TiltCard>
                                    ))}
                                </div>
                            </section>

                            {/* 4. Produk Unggulan */}
                            <section id="produk" className="animate-reveal-scrub">
                                <div className="flex items-center gap-4 mb-10">
                                    <span className="h-px w-12 bg-primary/30"></span>
                                    <h2 className="text-primary-dark dark:text-primary text-3xl md:text-4xl font-bold font-display tracking-tight">
                                        Bab 2: Koleksi Produk
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group relative overflow-hidden rounded-3xl bg-bg-elevated border border-border-soft">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="p-8 md:p-12 relative z-10">
                                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                                <span className="material-symbols-outlined text-2xl">
                                                    menu_book
                                                </span>
                                            </div>
                                            <h3 className="mb-3 text-2xl font-bold font-display text-primary-dark">
                                                LKS (Lembar Kerja Siswa)
                                            </h3>
                                            <p className="mb-8 text-muted leading-relaxed font-body">
                                                Tersedia untuk semua jenjang (SD, SMP, SMA) dan semua mata pelajaran.
                                                Kurikulum Merdeka & K13 Revisi.
                                            </p>
                                            <ul className="space-y-3 mb-8">
                                                {["Tematik SD", "Mapel SMP & SMA", "Modul Proyek P5"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-main">
                                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary text-[10px]">
                                                            ✓
                                                        </span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                href="https://wa.me/6281234567890?text=Halo%20KBS,%20saya%20mau%20tanya%20stok%20LKS"
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                            >
                                                Cek Ketersediaan
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="group relative overflow-hidden rounded-3xl bg-bg-elevated border border-border-soft">
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="p-8 md:p-12 relative z-10">
                                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                <span className="material-symbols-outlined text-2xl">
                                                    quiz
                                                </span>
                                            </div>
                                            <h3 className="mb-3 text-2xl font-bold font-display text-primary-dark">
                                                Buku Ujian & Bank Soal
                                            </h3>
                                            <p className="mb-8 text-muted leading-relaxed font-body">
                                                Persiapan matang untuk asesmen sumatif, ujian sekolah, dan SNBT.
                                                Lengkap dengan pembahasan.
                                            </p>
                                            <ul className="space-y-3 mb-8">
                                                {["Asesmen Sumatif", "Ujian Sekolah", "SNBT & Olimpiade"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-main">
                                                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 text-[10px]">
                                                            ✓
                                                        </span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                            <Link
                                                href="https://wa.me/6281234567890?text=Halo%20KBS,%20saya%20mau%20tanya%20buku%20ujian"
                                                target="_blank"
                                                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
                                            >
                                                Lihat Judul
                                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 5. Program Kelas / Sekolah */}
                            <section id="program-kelas" className="animate-reveal-scrub">
                                <div className="rounded-3xl bg-gradient-to-b from-primary-dark to-[#0f172a] p-8 md:p-16 text-white text-center relative overflow-hidden">
                                    {/* Dekorasi background */}
                                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                                        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
                                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
                                    </div>

                                    <div className="relative z-10 max-w-3xl mx-auto">
                                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 mb-6 border border-white/20 backdrop-blur-md">
                                            <span className="material-symbols-outlined text-sm text-amber-300">
                                                stars
                                            </span>
                                            <span className="text-xs font-bold tracking-widest uppercase">
                                                Program Spesial
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 leading-tight">
                                            Kelola Pesanan Satu Kelas? <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-emerald-300">
                                                Lebih Mudah & Hemat.
                                            </span>
                                        </h2>
                                        <p className="text-lg text-white/80 mb-10 font-body leading-relaxed">
                                            Dapatkan harga khusus koordinator, pengemasan per nama siswa, dan gratis ongkir untuk pemesanan kolektif.
                                        </p>
                                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                            <Link
                                                href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20tanya%20program%20koordinator%20kelas"
                                                target="_blank"
                                                className="w-full sm:w-auto px-8 py-4 bg-white text-primary-dark rounded-xl font-bold hover:bg-sky-50 transition-colors shadow-lg flex items-center justify-center gap-2"
                                            >
                                                <span className="material-symbols-outlined">group_add</span>
                                                Daftar Koordinator
                                            </Link>
                                            <Link
                                                href="#faq"
                                                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                                            >
                                                Pelajari Syaratnya
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 6. Testimoni Singkat */}
                            <section className="animate-reveal-scrub">
                                <div className="text-center mb-12">
                                    <h2 className="text-primary-dark dark:text-primary text-2xl md:text-3xl font-bold font-display">
                                        Kata Mereka
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        {
                                            q: "Sangat terbantu!",
                                            t: "Buku sampai tepat waktu sebelum ujian, packing rapi banget per anak.",
                                            n: "Bu Ani, Guru SD",
                                        },
                                        {
                                            q: "Lengkap banget.",
                                            t: "Cari LKS penerbit apa aja ada. Adminnya juga ramah diajak konsultasi.",
                                            n: "Pak Budi, Orang Tua",
                                        },
                                        {
                                            q: "Recomended.",
                                            t: "Buat koordinator kelas kayak saya, sistemnya KBS ngebantu banget.",
                                            n: "Mama Dika, Koordinator",
                                        },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-bg-elevated p-6 rounded-2xl border border-border-soft">
                                            <div className="flex gap-1 text-amber-400 mb-3">
                                                {[1, 2, 3, 4, 5].map((s) => (
                                                    <span key={s} className="material-symbols-outlined text-sm fill-current">
                                                        star
                                                    </span>
                                                ))}
                                            </div>
                                            <h4 className="font-bold text-lg mb-2 text-primary-dark dark:text-white">
                                                "{item.q}"
                                            </h4>
                                            <p className="text-sm text-muted mb-4 font-body">
                                                {item.t}
                                            </p>
                                            <p className="text-xs font-bold text-primary uppercase tracking-wider">
                                                — {item.n}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* 7. FAQ */}
                            <section id="faq" className="animate-reveal-scrub max-w-3xl mx-auto w-full">
                                <div className="text-center mb-10">
                                    <h2 className="text-primary-dark dark:text-primary text-3xl font-bold font-display">
                                        Pertanyaan Umum
                                    </h2>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {[
                                        {
                                            q: "Apakah ada minimal pembelian?",
                                            a: "Tidak ada. Beli 1 buku pun kami layani. Namun untuk harga grosir/koordinator ada minimal order tertentu.",
                                        },
                                        {
                                            q: "Bisa kirim ke luar kota?",
                                            a: "Bisa banget. Kami melayani pengiriman ke seluruh Indonesia menggunakan ekspedisi terpercaya (JNE, J&T, SiCepat, Cargo).",
                                        },
                                        {
                                            q: "Bagaimana cara jadi reseller?",
                                            a: "Silakan hubungi WhatsApp kami. Ada paket khusus untuk toko buku kecil atau koperasi sekolah.",
                                        },
                                    ].map((item, index) => (
                                        <details
                                            key={index}
                                            className="group bg-bg-elevated rounded-lg border border-border-soft overflow-hidden"
                                        >
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-bold font-display text-lg hover:bg-primary-soft/10 transition-colors text-main">
                                                {item.q}
                                                <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">
                                                    expand_more
                                                </span>
                                            </summary>
                                            <div className="p-6 pt-0 text-gray-700 leading-relaxed font-body">
                                                {item.a}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </section>

                            {/* 8. Kontak */}
                            <section id="kontak" className="animate-reveal-scrub mb-20">
                                <div className="text-center max-w-2xl mx-auto">
                                    <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-dark mb-6">
                                        Mulai Cerita Baru
                                    </h2>
                                    <p className="text-xl text-main mb-10 font-body">
                                        Siap meningkatkan kualitas pembelajaran di sekolah Anda? Hubungi kami untuk diskusi lebih lanjut.
                                    </p>
                                    <Link
                                        href="https://wa.me/6281234567890"
                                        target="_blank"
                                        className="inline-flex items-center justify-center rounded-full h-16 px-10 bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-xl hover:-translate-y-1 transition-all text-lg font-bold shadow-lg"
                                    >
                                        Hubungi Kami di WhatsApp
                                    </Link>
                                </div>
                            </section>
                        </main>

                        <Footer />
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                className="fixed bottom-8 right-8 z-50 size-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20bd5a] transition-all hover:scale-110 hover:rotate-12"
                aria-label="Chat WhatsApp"
            >
                <span className="material-symbols-outlined text-4xl">chat</span>
            </Link>

            {/* styled-jsx global for marquee animation */}
            <style jsx global>{`
                /* Scroll reveal base */
                .animate-hero-scroll,
                .animate-reveal-scrub {
                    opacity: 0;
                    transform: translateY(24px);
                    transition:
                        opacity 0.6s ease-out,
                        transform 0.6s ease-out;
                    will-change: opacity, transform;
                }

                .animate-hero-scroll.is-visible,
                .animate-reveal-scrub.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* Sedikit beda untuk hero biar kerasa muncul dari bawah */
                .animate-hero-scroll {
                    transform: translateY(40px) scale(0.98);
                }

                .animate-hero-scroll.is-visible {
                    transform: translateY(0) scale(1);
                }

                /* Stagger delay (dipakai di card-card) */
                .stagger-1 {
                    transition-delay: 0.05s;
                }
                .stagger-2 {
                    transition-delay: 0.1s;
                }
                .stagger-3 {
                    transition-delay: 0.15s;
                }
                .stagger-4 {
                    transition-delay: 0.2s;
                }
                .stagger-5 {
                    transition-delay: 0.25s;
                }
                .stagger-6 {
                    transition-delay: 0.3s;
                }
                .stagger-7 {
                    transition-delay: 0.35s;
                }
                .stagger-8 {
                    transition-delay: 0.4s;
                }

                /* Animasi khusus kartu brand besar (kalau kamu pakai brand-slide) */
                @keyframes brand-slide-in {
                    0% {
                        opacity: 0;
                        transform: translateY(16px) scale(0.97);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .brand-slide {
                    animation: brand-slide-in 0.45s ease-out;
                }
            `}</style>
        </div>
    );
};
