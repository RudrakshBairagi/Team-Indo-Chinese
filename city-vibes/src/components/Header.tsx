'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    // Reset visibility when navigating to a new page
    useEffect(() => {
        setIsVisible(true);
        lastScrollY.current = 0;
    }, [pathname]);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            // Only respond to scroll events from a <main> element
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

        // Use capture phase to catch scroll events from any descendant (including main)
        document.addEventListener('scroll', handleScroll, { capture: true, passive: true });

        return () => {
            document.removeEventListener('scroll', handleScroll, { capture: true } as EventListenerOptions);
        };
    }, []);

    return (
        <header className={`pt-12 px-6 pb-2 flex justify-between items-start bg-background-light/80 backdrop-blur-md absolute top-0 left-0 right-0 z-20 transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <div className="flex flex-col cursor-pointer">
                <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-[22px] tracking-tight text-[#161616]">San Francisco, CA</span>
                    <svg className="h-[22px] w-[22px] mt-1 text-[#161616]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#B85DF8] mt-0.5 ml-0.5">
                    HELLO, HUSTLER!
                </div>
            </div>
            <div className="flex gap-5 items-start mt-1">
                <button aria-label="Notifications" className="p-0 mt-0.5">
                    <span className="material-symbols-outlined text-[32px] filled-icon text-[#161616]">notifications</span>
                </button>
                <Link href="/profile" className="flex flex-col items-center gap-1">
                    <span aria-label="Profile" className="p-0">
                        <span className="material-symbols-outlined text-[32px] text-[#161616]" style={{ fontVariationSettings: "'wght' 300" }}>person</span>
                    </span>
                    <span className="bg-[#F6ECFF] text-[#B85DF8] text-[11px] font-bold px-3 py-0.5 rounded-full border border-[#E9D5FF] tracking-wide">
                        500 pts
                    </span>
                </Link>
            </div>
        </header>
    );
}
