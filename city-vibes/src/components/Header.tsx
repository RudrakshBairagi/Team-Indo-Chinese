'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    // Hide header on event detail and leaderboard pages
    const isEventDetailPage = pathname.startsWith('/events/');
    const isLeaderboardPage = pathname === '/leaderboard';
    const hideHeader = isEventDetailPage || isLeaderboardPage;

    // Reset visibility when navigating to a new page
    useEffect(() => {
        setIsVisible(true);
        lastScrollY.current = 0;
    }, [pathname]);

    useEffect(() => {
        if (hideHeader) return;

        const handleScroll = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.tagName !== 'MAIN') return;

            const currentScrollY = target.scrollTop;
            
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            lastScrollY.current = currentScrollY;
        };

        document.addEventListener('scroll', handleScroll, { capture: true, passive: true });

        return () => {
            document.removeEventListener('scroll', handleScroll, { capture: true } as EventListenerOptions);
        };
    }, [hideHeader]);

    if (hideHeader) return null;

    return (
        <header className={`pt-6 px-6 pb-2 flex justify-between items-start bg-background-light/80 backdrop-blur-md absolute top-0 left-0 right-0 z-20 transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <div className="flex flex-col cursor-pointer shrink-0">
                <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-lg sm:text-lg tracking-tight text-[#161616] whitespace-nowrap">Rajiv Chowk, Delhi</span>
                    <svg className="h-[18px] w-[18px] mt-0.5 text-[#161616]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B85DF8] mt-0.5 ml-0.5">
                    HELLO, HUSTLER!
                </div>
            </div>
            <div className="flex gap-3 items-start mt-0">
                <button aria-label="Notifications" className="p-0 mt-1">
                    <span className="material-symbols-outlined text-[28px] filled-icon text-[#161616]">notifications</span>
                </button>
                <Link href="/profile" className="flex flex-col items-center gap-1">
                    <img aria-label="Profile" className="size-8 rounded-full object-cover border-2 border-city-purple/30" alt="Shaolin's profile" src="/ranking/Shaolin_Prajapati.jpg" />
                    <span className="bg-[#F6ECFF] text-[#B85DF8] text-[9px] font-bold px-2 py-0.5 rounded-full border border-[#E9D5FF] tracking-wide whitespace-nowrap">
                        10,250 pts
                    </span>
                </Link>
            </div>
        </header>
    );
}
