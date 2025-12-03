"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center rounded-lg p-2 hover:bg-secondary/30 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
        >
            {theme === "dark" ? (
                <span className="material-symbols-outlined text-main">
                    light_mode
                </span>
            ) : (
                <span className="material-symbols-outlined text-main">
                    dark_mode
                </span>
            )}
        </button>
    );
}
