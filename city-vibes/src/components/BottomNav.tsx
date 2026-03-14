"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-3xl px-8 py-3 flex justify-between items-center z-50 shadow-nav-soft">
            <Link href="/" className="flex items-center justify-center p-2 text-gray-500 hover:text-city-black transition-colors">
                {pathname === "/" ? (
                    <div className="bg-city-neon p-3 rounded-2xl text-black flex items-center justify-center shadow-sm -m-2">
                        <span className="material-symbols-outlined text-2xl filled-icon">home</span>
                    </div>
                ) : (
                    <span className="material-symbols-outlined text-2xl">home</span>
                )}
            </Link>

            <Link href="/events" className="flex items-center justify-center p-2 text-gray-500 hover:text-city-black transition-colors">
                {pathname === "/events" ? (
                    <div className="bg-city-neon p-3 rounded-2xl text-black flex items-center justify-center shadow-subtle -m-2">
                        <span className="material-symbols-outlined text-2xl filled-icon">calendar_today</span>
                    </div>
                ) : (
                    <span className="material-symbols-outlined text-2xl">calendar_today</span>
                )}
            </Link>

            <Link href="/social" className="flex items-center justify-center p-2 text-gray-500 hover:text-city-black transition-colors">
                {pathname === "/social" ? (
                    <div className="bg-city-neon p-3 rounded-2xl text-black flex items-center justify-center shadow-subtle -m-2">
                        <span className="material-symbols-outlined text-2xl filled-icon">map</span>
                    </div>
                ) : (
                    <span className="material-symbols-outlined text-2xl">map</span>
                )}
            </Link>

            <Link href="/profile" className="flex items-center justify-center p-2 text-gray-500 hover:text-city-black transition-colors">
                {pathname === "/profile" ? (
                    <div className="bg-city-neon p-3 rounded-2xl text-black flex items-center justify-center shadow-sm -m-2">
                        <span className="material-symbols-outlined text-2xl filled-icon">person</span>
                    </div>
                ) : (
                    <span className="material-symbols-outlined text-2xl">person</span>
                )}
            </Link>
        </nav>
    );
}
