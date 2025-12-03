"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
    { label: "Beranda", href: "#top", icon: "home" },
    { label: "Untuk Siapa", href: "#untuk-siapa", icon: "groups" },
    { label: "Keunggulan", href: "#keunggulan", icon: "workspace_premium" },
    { label: "Katalog", href: "#produk", icon: "menu_book" },
    { label: "Program Sekolah", href: "#program-kelas", icon: "school" },
    { label: "FAQ", href: "#faq", icon: "help" },
];

const FLOATING_ITEMS = [
    { label: "Beranda", href: "#top", icon: "home" },
    { label: "Katalog", href: "#produk", icon: "menu_book" },
    { label: "Program", href: "#program-kelas", icon: "school" },
    { label: "FAQ", href: "#faq", icon: "help" },
];

export const Navbar = () => {
    const [showFloating, setShowFloating] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const onScroll = () => {
            // Munculkan floating nav setelah scroll agak jauh dari hero
            setShowFloating(window.scrollY > 260);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Navbar utama (sticky di atas) */}
            <header className="sticky top-0 z-30 w-full border-b border-border-soft bg-page/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-10 md:px-20 lg:px-40">
                    {/* Logo kiri */}
                    <Link href="#top" className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary shadow-sm">
                            <span className="material-symbols-outlined text-2xl">
                                menu_book
                            </span>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-base sm:text-lg font-display font-bold text-primary-dark dark:text-white">
                                Kevin Book Store
                            </span>
                            <span className="text-[11px] sm:text-xs text-muted font-body">
                                Distributor LKS &amp; Buku Ujian
                            </span>
                        </div>
                    </Link>

                    {/* Menu kanan desktop */}
                    <nav className="hidden items-center gap-2 md:flex">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group relative inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium font-body text-muted transition-colors"
                            >
                                {/* Pill background lembut (anti teks numpuk) */}
                                <span
                                    className="pointer-events-none absolute inset-0 rounded-full bg-primary/8
                             opacity-0 scale-95 blur-[0.2px]
                             transition-all duration-200
                             group-hover:opacity-100 group-hover:scale-100"
                                />

                                <span className="relative z-10 inline-flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-[17px] text-primary/80 group-hover:text-primary transition-colors">
                                        {item.icon}
                                    </span>
                                    <span>{item.label}</span>
                                </span>
                            </Link>
                        ))}

                        {/* CTA di navbar */}
                        <Link
                            href="#kontak"
                            className="ml-2 relative inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary hover:text-white hover:shadow-md transition-all"
                        >
                            <span className="material-symbols-outlined text-sm">
                                call
                            </span>
                            <span>Hubungi</span>
                        </Link>
                    </nav>

                    {/* Mobile: tombol WA saja */}
                    <Link
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow-md md:hidden"
                        aria-label="Chat WhatsApp"
                    >
                        <span className="material-symbols-outlined text-2xl">chat</span>
                    </Link>
                </div>
            </header>

            {/* Floating oval batik – hanya muncul saat scroll turun */}
            <div
                className={`
          fixed left-1/2 top-4 z-40 -translate-x-1/2
          transition-all duration-300
          ${showFloating
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-90 -translate-y-3 pointer-events-none"}
        `}
            >
                <div
                    className="flex items-center gap-3 rounded-full border border-white/60 bg-primary/95 px-4 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur-md"
                    style={{
                        backgroundImage: "url('/batik-nav.png')", // ganti dengan batik-nav.svg/png milikmu
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Logo kecil kiri di floating nav */}
                    <div className="hidden sm:flex items-center gap-2 pr-3 mr-2 border-r border-white/40">
                        <span className="material-symbols-outlined text-xl text-white">
                            menu_book
                        </span>
                        <span className="text-xs font-display font-semibold text-white">
                            KBS
                        </span>
                    </div>

                    {/* Menu penting */}
                    <nav className="flex items-center gap-2">
                        {FLOATING_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/15 transition-colors"
                            >
                                <span className="material-symbols-outlined text-[16px] leading-none">
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Tombol call/WA kecil */}
                    <Link
                        href="#kontak"
                        className="ml-1 inline-flex items-center justify-center rounded-full bg-emerald-400/90 px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-emerald-300 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[16px] mr-1">
                            call
                        </span>
                        <span>Call</span>
                    </Link>
                </div>
            </div>
        </>
    );
};
