import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="mt-20 border-t border-border-soft bg-gradient-to-b from-bg-elevated/40 via-page to-page">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 md:px-20 lg:px-40 pt-12 pb-8">

                {/* Strip dekor buku kecil */}
                <div className="mb-8 flex items-end gap-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            className={`h-4 rounded-t-[4px] ${i % 3 === 0
                                ? "w-3 bg-primary"
                                : i % 3 === 1
                                    ? "w-2.5 bg-sky-400/80"
                                    : "w-2 bg-primary-soft"
                                }`}
                        />
                    ))}
                    <span className="ml-3 text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
                        K B S · B O O K S H E L F
                    </span>
                </div>

                {/* CTA kartu biru */}
                <div className="mb-12 rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-6 py-8 md:px-10 md:py-10 text-white shadow-xl relative overflow-hidden">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute bottom-0 left-4 h-16 w-16 -rotate-6 rounded-[6px] border border-white/25 bg-white/10" />
                    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-xl">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/90 mb-2">
                                K B S · S C H O O L  P A R T N E R
                            </p>
                            <h2 className="text-2xl md:text-3xl font-display font-bold leading-snug mb-2">
                                Siap bantu pengadaan buku di sekolah Anda.
                            </h2>
                            <p className="text-sm md:text-base text-sky-100/90 font-body">
                                Diskusikan kebutuhan LKS dan buku ujian untuk SD, SMP, dan SMA.
                                Kami bantu dari rekap hingga pengiriman.
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-2 md:items-end">
                            <Link
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg hover:bg-emerald-300 hover:-translate-y-0.5 transition-all"
                            >
                                <span className="material-symbols-outlined text-base mr-1.5">
                                    chat
                                </span>
                                Chat WhatsApp
                            </Link>
                            <p className="text-[11px] text-sky-100/80">
                                Fast response pada jam kerja. Bisa kirim daftar kebutuhan via Excel.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Grid utama footer */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-10">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex size-9 items-center justify-center rounded-lg bg-primary-soft text-primary shadow-sm">
                                <span className="material-symbols-outlined text-2xl">
                                    menu_book
                                </span>
                            </div>
                            <div className="flex flex-col leading-tight">
                                <span className="text-lg font-display font-bold text-primary">
                                    KBS – Kevin Book Store
                                </span>
                                <span className="text-xs text-muted font-body">
                                    Distributor LKS &amp; Buku Ujian Sekolah
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-muted font-body max-w-md leading-relaxed">
                            Distributor buku pendidikan &amp; LKS terpercaya.
                            Mengantar ilmu, membuka wawasan, mencerdaskan generasi –
                            bersama sekolah, guru, dan orang tua.
                        </p>
                    </div>

                    {/* Navigasi */}
                    <div>
                        <h4 className="mb-4 text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary-dark dark:text-primary">
                            Navigasi
                        </h4>
                        <ul className="space-y-3 text-sm font-body text-muted">
                            <li>
                                <Link href="#produk" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-[16px] text-primary/70">
                                        menu_book
                                    </span>
                                    <span>Katalog</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#program-kelas" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-[16px] text-primary/70">
                                        school
                                    </span>
                                    <span>Program Sekolah</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#faq" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                                    <span className="material-symbols-outlined text-[16px] text-primary/70">
                                        help
                                    </span>
                                    <span>FAQ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Kontak */}
                    <div>
                        <h4 className="mb-4 text-sm font-display font-semibold uppercase tracking-[0.2em] text-primary-dark dark:text-primary">
                            Hubungi
                        </h4>
                        <ul className="space-y-3 text-sm font-body text-muted">
                            <li>
                                <Link
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span className="material-symbols-outlined text-[16px] text-emerald-500">
                                        chat
                                    </span>
                                    <span>WhatsApp</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="mailto:halo@kevinbookstore.com"
                                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span className="material-symbols-outlined text-[16px] text-sky-500">
                                        mail
                                    </span>
                                    <span>Email</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://instagram.com/kevinbookstore"
                                    target="_blank"
                                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span className="material-symbols-outlined text-[16px] text-pink-500">
                                        photo_camera
                                    </span>
                                    <span>Instagram</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://shopee.co.id/kevinbooks"
                                    target="_blank"
                                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span className="material-symbols-outlined text-[16px] text-[#ee4d2d]">
                                        shopping_bag
                                    </span>
                                    <span>Shopee</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.tiktok.com/@kevinbooks1"
                                    target="_blank"
                                    className="hover:text-primary transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span className="material-symbols-outlined text-[16px] text-black dark:text-white">
                                        music_note
                                    </span>
                                    <span>TikTok</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-border-soft pt-5 flex flex-col gap-3 text-[11px] text-muted font-body md:flex-row md:items-center md:justify-between">
                    <p>© 2024 Kevin Book Store. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="inline-flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-primary/80">
                                shield
                            </span>
                            <span>Kualitas terjaga &amp; siap audit</span>
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-primary/80">
                                local_shipping
                            </span>
                            <span>Pengiriman rapi &amp; tepat waktu</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
