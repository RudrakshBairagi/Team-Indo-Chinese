import Link from 'next/link';

export default function Events() {
    return (
        <main className="flex-1 overflow-y-auto w-full pb-32 pt-[88px]">
            {/* Filter Chips */}
            <div className="flex gap-2 px-6 py-4 overflow-x-auto hide-scrollbar">
                <button className="flex shrink-0 items-center justify-center rounded-full bg-city-purple text-white px-4 py-1.5 text-sm font-bold">
                    Today
                </button>
                <button className="flex shrink-0 items-center justify-center rounded-full bg-white/40 border border-black/5 px-4 py-1.5 text-sm font-medium">
                    This Weekend
                </button>
                <button className="flex shrink-0 items-center justify-center gap-x-1 rounded-full bg-white/40 border border-black/5 px-4 py-1.5 text-sm font-medium">
                    Music
                    <span className="material-symbols-outlined text-xs">keyboard_arrow_down</span>
                </button>
                <button className="flex shrink-0 items-center justify-center rounded-full bg-white/40 border border-black/5 px-4 py-1.5 text-sm font-medium">
                    Art
                </button>
            </div>
            {/* Scrollable Event List */}
            <div className="px-6 space-y-8 mt-2">
                {/* Event Card 1 */}
                <div className="bg-city-black rounded-[2.5rem] flex flex-col overflow-hidden shadow-soft border border-white/5">
                    <div className="h-56 relative bg-white overflow-hidden">
                        <div className="absolute top-4 right-4 w-8 h-8 bg-city-black flex items-center justify-center rotate-12 border-2 border-white/20">
                            <svg className="w-4 h-4 text-city-neon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0l3.09 8.26h8.91l-7.21 5.24 2.76 8.5-7.55-5.48-7.55 5.48 2.76-8.5-7.21-5.24h8.91z"></path>
                            </svg>
                        </div>
                        <div className="absolute bottom-4 left-6">
                            <span className="bg-city-black text-city-neon text-[10px] font-black px-2 py-1 rounded-sm uppercase italic border border-city-neon/30">Digital Art</span>
                        </div>
                    </div>
                    <div className="p-6 bg-city-black flex justify-between items-center">
                        <div className="flex-1">
                            <h3 className="text-white font-bold text-lg leading-tight">Neon Pulse: Digital Arts</h3>
                            <p className="text-gray-400 text-xs mt-1 mb-4">Saturday, Oct 24 • 10 AM</p>
                            <div className="text-gray-400 text-xs">Location: FallCity, Phoenix</div>
                            <button className="bg-city-neon text-city-black text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider mt-4">Register Now</button>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-center min-w-[56px] min-h-[56px] border border-white/5 ml-4">
                            <svg className="h-6 w-6 text-city-neon fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Event Card 2 */}
                <div className="bg-city-black rounded-[2.5rem] flex flex-col overflow-hidden shadow-soft border border-white/5">
                    <div className="h-56 relative bg-white overflow-hidden">
                        <div className="absolute top-4 right-4 w-8 h-8 bg-city-black flex items-center justify-center rotate-12 border-2 border-white/20">
                            <svg className="w-4 h-4 text-city-neon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0l3.09 8.26h8.91l-7.21 5.24 2.76 8.5-7.55-5.48-7.55 5.48 2.76-8.5-7.21-5.24h8.91z"></path>
                            </svg>
                        </div>
                        <div className="absolute bottom-4 left-6">
                            <span className="bg-city-black text-city-neon text-[10px] font-black px-2 py-1 rounded-sm uppercase italic border border-city-neon/30">Summer Rave</span>
                        </div>
                    </div>
                    <div className="p-6 bg-city-black flex justify-between items-center">
                        <div className="flex-1">
                            <h3 className="text-white font-bold text-lg leading-tight">Echoes Underground</h3>
                            <p className="text-gray-400 text-xs mt-1 mb-4">Saturday, Oct 26 • 8 PM</p>
                            <button className="bg-city-neon text-city-black text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider">Register Now</button>
                        </div>
                        <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-center min-w-[56px] min-h-[56px] border border-white/5 ml-4">
                            <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* Event Card 3 */}
                <div className="bg-white border border-gray-100 rounded-[2.5rem] flex flex-col overflow-hidden shadow-soft">
                    <div className="h-56 relative bg-white overflow-hidden">
                        <div className="absolute top-6 left-6 bg-white border border-gray-100 p-2 rounded-xl shadow-sm">
                            <span className="text-city-black text-[10px] font-bold uppercase tracking-widest">Arts &amp; Culture</span>
                        </div>
                    </div>
                    <div className="p-6 bg-white flex justify-between items-center">
                        <div className="flex-1">
                            <h3 className="text-city-black font-bold text-lg leading-tight">Modern Forms</h3>
                            <p className="text-gray-500 text-xs mt-1 mb-4">Oct 28 • 11:30 AM</p>
                            <button className="bg-city-purple text-white text-xs font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider">Register Now</button>
                        </div>
                        <div className="bg-city-gray rounded-2xl p-4 flex items-center justify-center min-w-[56px] min-h-[56px] border border-gray-100 ml-4">
                            <svg className="h-6 w-6 text-city-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
