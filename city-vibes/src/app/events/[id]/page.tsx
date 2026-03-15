'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EventDetailsPage() {
    const router = useRouter();
    const [activeImage, setActiveImage] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const totalImages = 3;

    useEffect(() => {
        const container = carouselRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.clientWidth;
            const index = Math.round(scrollLeft / cardWidth);
            setActiveImage(Math.min(index, totalImages - 1));
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Note: The global Header and BottomNav handle the top/bottom navigation.
    // So we don't need to rebuild the sticky header and bottom nav bar here.
    return (
        <main className="flex-1 overflow-y-auto w-full pb-40 pt-4">
            {/* Top Back Button Row - Since global header is there, we just add a back button at the top of the content */}
            <div className="px-6 pt-4 pb-2">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center justify-center size-10 rounded-full bg-white/50 border border-black/5 shadow-sm hover:bg-black/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-city-black">arrow_back</span>
                </button>
            </div>

            {/* Hero Section: Horizontally Scrollable Gallery */}
            <div className="px-6 mt-2">
                <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-card-soft group">
                    {/* Carousel Container */}
                    <div ref={carouselRef} className="flex h-full w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth">
                        {/* Image 1 */}
                        <div className="w-full h-full shrink-0 snap-center relative">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
                            <img alt="Event image 1" className="w-full h-full object-cover relative z-10" loading="eager" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoqiPDrJnH_63C4zQEnTArHxWf4JdlCWHG-4O5tE6GBFqT8dGWXB9unN7mPCIQ3KyJ-VdMAZwz9s7fW4v6IIFumd8i4vXJ5_l3gZOhhCm3aD19ckeuN2l-oum797haloo3bOPciRSSnGgMr-Z6cywbTu0Gy32saoUoF4aUmuIVn-zlPocYFH_HyrNuNWvnmUzUaCtT1YiDx-ZPdauxb2EjIMz5hZyMGr4CrDQxMKGG6c_LI_-cljP9xFEFfIUxa_jBNq09ziswYoA" />
                        </div>
                        {/* Image 2 */}
                        <div className="w-full h-full shrink-0 snap-center relative">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
                            <img alt="Event image 2" className="w-full h-full object-cover relative z-10" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt8eGW_9541JUXpLUw3ffED75NGZI5AswVO4iR9BZgVN4WCpNM0HE6IzT918_zXu85YryJ5XoGrsRlcLdtDnbUM4xTy6OuXRdMlrDlGKoKJtiS7NMI_IWFuSaqgpFWaxwoK__W4HVK7uCIzBUR1nNY15T0V16uyMhYDXYRgGAj3Wvyegrs_6skCubqdOdZVD0guLZ670GOlsgvNItQbZ7diMRjxAgMiUoe8BIQppIIuLWY0RXuu7h1JJ2oJifiHfMhLVJ74yT5vwo" />
                        </div>
                        {/* Image 3 */}
                        <div className="w-full h-full shrink-0 snap-center relative">
                            <div className="absolute inset-0 bg-gray-200 animate-pulse -z-10"></div>
                            <img alt="Event image 3" className="w-full h-full object-cover relative z-10" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZfVNaZIBiErZ7PXbbCcs5X51F10A3LHHE3sYSM5316lUOhP9LrFUyEsXJl8P7tEGjZlbkZPedwgd7-RuhOP1cfd54hk63zFeh8I9UFt0oixi1lazulvdS_7-GLiPky0aYn4w3Xr7-KSBeV0ghNv3bRM7YZt9AAsL9zBCv1YSWbACSLuTHx8roGjb8XS2rnApp4pfAReLmTWQDMOTZscg37nfo6U9X4f_aEiScepT34itF_HnBYZ2RnkWRLEcPg6a6voumOdWhq1o" />
                        </div>
                    </div>
                    {/* Overlay Gradients & UI */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>
                    <div className="absolute top-6 right-6 pointer-events-none z-30">
                        <div className="bg-city-purple/20 backdrop-blur-md text-city-purple px-4 py-2 rounded-full text-[11px] font-bold border border-city-purple/20">
                            +100 points
                        </div>
                    </div>
                    {/* Visual Indicators: Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                        {Array.from({ length: totalImages }).map((_, i) => (
                            <div
                                key={i}
                                className={`size-1.5 rounded-full transition-all duration-300 ${
                                    activeImage === i ? 'bg-white opacity-100' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                    {/* Visual Indicators: Arrows (Subtle) */}
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-30">
                        <div className={`size-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 transition-opacity ${activeImage === 0 ? 'opacity-0' : 'opacity-100'}`}>
                            <span className="material-symbols-outlined text-sm">chevron_left</span>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none z-30">
                        <div className={`size-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 transition-opacity ${activeImage === totalImages - 1 ? 'opacity-0' : 'opacity-100'}`}>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="px-6 py-8 space-y-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-city-black">Hyrox Delhi <br /> 2025</h1>
                </div>

                {/* Metadata Cards */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-[2rem] border shadow-card-soft border-purple-500/20 bg-purple-600/5">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-black/5 text-city-purple">
                            <span className="material-symbols-outlined">calendar_today</span>
                        </div>
                        <div>
                            <p className="font-bold text-city-black">Saturday, July 25th</p>
                            <p className="text-[11px] font-medium text-gray-500 mt-0.5">10 PM - 4 AM</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-[2rem] border shadow-card-soft border-purple-500/20 bg-purple-600/5">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 border border-black/5 text-city-purple">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-city-black">JLN, Stadium</p>
                            <p className="text-[11px] font-medium text-gray-500 mt-0.5">Pragati Vihar, New Delhi</p>
                        </div>
                        <div className="size-12 rounded-xl bg-slate-200 overflow-hidden border border-black/5 shrink-0">
                            <img alt="Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ2FJMGzq0PlHrpWO1ow7GIRFpe82npTzCbt4evP53bMYCUEbjfPzxqhHSEqykFn_VIM10umNcXc2-S70h-i12CBJpxgnGkPpoVbOYD6EDuNX4CP1kDKUXucnrpWUQ9F7nwM2wFYjBhdAPars8nqbieMu2shmI51S1mn8yjlCX8-qt1HRXAXFh3QG8SEFJAkF1p4ZJpdZxgtcsxd50aF-91dAUe0wzGDa4cy57pgL_F3XA0bL2i0TOwgdn67E2PzfzVDdM-Jw1dD0" />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-3">
                    <h3 className="text-2xl font-bold">About this event</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Get ready for the biggest night of the summer! Join us at Pier 70 for an immersive audiovisual experience. Featuring top-tier DJs, neon light installations, and an electric atmosphere that defines the San Francisco rave scene. Don't miss out on the energy.
                    </p>
                </div>

                {/* Organization */}
                <div className="flex items-center gap-4 p-4 rounded-[2rem] border shadow-card-soft border-purple-500/20 bg-purple-600/5">
                    <div className="size-14 rounded-2xl bg-city-black flex items-center justify-center text-city-neon font-black italic text-xl overflow-hidden shrink-0">
                        <img alt="Vibe Checkers" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhOj45UMJkVyp5h-bOzOP78uRDkFP2tHWosgWK3jt8gXwU55ffIxAJ0c5q9GXllTPpqpdgYO5XbTry0oONmX8yjK1Jho4jJrIj-WK5n9_oRWyvYDClxpgmXSdqbY--0H5buNQaXReY0ww5zthBD3natT98khwuSnOMc5YP34JCl0b9KmvE1FmHNe_9xQ9IzsKCZCJADA2MUn9ollkWeezbTGHHLV-zx2k6uXvpeGkapPLQuge4RzUQltdUe17gWHZ055o92vywFH4" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[10px] font-bold uppercase text-city-purple tracking-widest">Organized by</p>
                        <p className="font-bold text-city-black">Vibe Checkers</p>
                    </div>
                    <button className="bg-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-black/5 shadow-sm active:-translate-y-0.5 transition-transform hover:bg-gray-50">Follow</button>
                </div>
            </div>

            {/* Fixed Bottom Actions */}
            <div className="fixed bottom-28 left-0 right-0 px-6 z-40 max-w-md mx-auto">
                <div className="flex gap-4">
                    <button className="flex-1 bg-city-neon text-city-black font-black text-[10px] py-5 rounded-[2rem] shadow-lg uppercase tracking-widest active:scale-95 transition-all">
                        Register Now
                    </button>
                    <button className="size-16 flex items-center justify-center rounded-[2rem] bg-white shadow-card-soft border border-black/5 text-city-purple active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-2xl filled-icon">favorite</span>
                    </button>
                </div>
            </div>
        </main>
    );
}
