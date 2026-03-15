'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Leaderboard() {
    const router = useRouter();

    return (
        <main className="flex-1 px-6 pb-32 pt-4 overflow-y-auto hide-scrollbar">
            {/* Top Back Button Area */}
            <div className="mb-4 pt-4">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center justify-center size-10 rounded-full bg-white/50 border border-black/5 shadow-sm hover:bg-black/10 transition-colors"
                >
                    <span className="material-symbols-outlined text-city-black">arrow_back</span>
                </button>
            </div>

            {/* Ranking Tiers Summary Section */}
            <div className="mb-10 overflow-x-auto hide-scrollbar -mx-6 px-6 py-4">
                <h2 className="text-[11px] font-black text-city-purple uppercase tracking-[0.2em] px-1 mb-4">Ranking Tiers</h2>
                <div className="flex gap-4 min-w-max px-1">
                    {/* Rookie Tier */}
                    <div className="bg-white/90 p-4 rounded-3xl shadow-sm border border-black/5 flex flex-col items-center w-32">
                        <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-slate-400">new_releases</span>
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Rookie</span>
                        <span className="text-xs font-bold mt-1">5,000 pts</span>
                    </div>
                    {/* Hustler Tier */}
                    <div className="bg-city-neon/10 p-4 rounded-3xl shadow-sm border-2 border-city-neon flex flex-col items-center w-32 relative">
                        <div className="absolute -top-2 -right-1 bg-city-neon text-[8px] font-black px-1.5 py-0.5 rounded-full">CURRENT</div>
                        <div className="size-10 rounded-full bg-city-neon/20 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-city-black filled-icon">bolt</span>
                        </div>
                        <span className="text-[10px] font-black text-city-black uppercase tracking-wider">Hustler</span>
                        <span className="text-xs font-bold mt-1">10,000 pts</span>
                    </div>
                    {/* Headliner Tier */}
                    <div className="bg-white/90 p-4 rounded-3xl shadow-sm border border-black/5 flex flex-col items-center w-32">
                        <div className="size-10 rounded-full bg-accent-gold/10 flex items-center justify-center mb-2">
                            <span className="material-symbols-outlined text-accent-gold">star_rate</span>
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-wider">Headliner</span>
                        <span className="text-xs font-bold mt-1">15,000 pts</span>
                    </div>
                </div>
            </div>

            {/* Top 3 Podium */}
            <div className="mb-10">
                <h2 className="text-center text-3xl font-black tracking-tight mb-8">Community Leaders</h2>
                <div className="flex items-end justify-center gap-2 h-52">
                    {/* Rank 2 */}
                    <div className="flex flex-col items-center w-1/3">
                        <div className="relative mb-3">
                            <div className="size-20 rounded-full border-4 border-accent-silver/30 bg-accent-silver/20 overflow-hidden shadow-card-soft" style={{ backgroundImage: "url('/ranking/Charu_Chourasia.jpg')", backgroundSize: "cover" }}></div>
                            <div className="absolute -top-1 -right-1 bg-accent-silver text-white size-7 rounded-full flex items-center justify-center font-black text-xs shadow-md border-2 border-white">2</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm w-full rounded-2xl p-3 text-center shadow-card-soft border border-black/5">
                            <p className="text-xs font-bold truncate">Charu C.</p>
                            <p className="text-[10px] text-city-purple font-extrabold mt-0.5">13,840 pts</p>
                        </div>
                    </div>
                    {/* Rank 1 */}
                    <div className="flex flex-col items-center w-1/3 scale-110 -translate-y-4">
                        <div className="relative mb-3">
                            <div className="size-24 rounded-full border-4 border-accent-gold bg-accent-gold/20 overflow-hidden shadow-card-soft" style={{ backgroundImage: "url('/ranking/Rudraksh_Bairagi.jpg')", backgroundSize: "cover" }}></div>
                            <div className="absolute -top-1 -right-1 bg-accent-gold text-city-black size-9 rounded-full flex items-center justify-center font-black text-sm shadow-md border-2 border-white">1</div>
                        </div>
                        <div className="bg-white backdrop-blur-sm w-full rounded-2xl p-4 text-center shadow-card-soft border border-accent-gold/30">
                            <p className="text-sm font-black truncate">Rudraksh B.</p>
                            <p className="text-xs text-city-purple font-black mt-0.5">14,850 pts</p>
                        </div>
                    </div>
                    {/* Rank 3 */}
                    <div className="flex flex-col items-center w-1/3">
                        <div className="relative mb-3">
                            <div className="size-20 rounded-full border-4 border-accent-bronze/30 bg-accent-bronze/20 overflow-hidden shadow-card-soft" style={{ backgroundImage: "url('/ranking/Meemansa_Soni.jpg')", backgroundSize: "cover" }}></div>
                            <div className="absolute -top-1 -right-1 bg-accent-bronze text-white size-7 rounded-full flex items-center justify-center font-black text-xs shadow-md border-2 border-white">3</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm w-full rounded-2xl p-3 text-center shadow-card-soft border border-black/5">
                            <p className="text-xs font-bold truncate">Meemansa S.</p>
                            <p className="text-[10px] text-city-purple font-extrabold mt-0.5">12,450 pts</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leaderboard List */}
            <div className="space-y-4">
                <h3 className="text-[11px] font-black text-city-purple uppercase tracking-[0.2em] px-1 mb-4">City Rankings</h3>
                {/* User Row (4) */}
                <div className="bg-white/80 p-5 rounded-[2.5rem] shadow-card-soft flex items-center justify-between border border-black/5">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-extrabold w-4 text-center text-lg">4</span>
                        <div className="size-14 rounded-2xl bg-orange-100/50 overflow-hidden shadow-sm" style={{ backgroundImage: "url('/ranking/Subrat_Kumar.jpg')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">Subrat Kumar</p>
                                <span className="text-[8px] bg-city-neon text-city-black px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter">HUSTLER</span>
                            </div>
                            <p className="text-xs text-gray-500 font-medium">22 achievements</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-black text-lg text-city-purple">11,010</p>
                        <p className="text-[10px] text-gray-400 uppercase font-black">pts</p>
                    </div>
                </div>

                {/* User Row (5 - Current User Perspective) */}
                <div className="bg-white p-5 rounded-[2.5rem] shadow-card-soft flex items-center justify-between border-2 border-city-neon relative overflow-hidden">
                    <div className="flex items-center gap-4">
                        <span className="text-city-black font-extrabold w-4 text-center text-lg">5</span>
                        <div className="size-14 rounded-2xl bg-city-neon/20 flex items-center justify-center overflow-hidden shadow-sm" style={{ backgroundImage: "url('/ranking/Shaolin_Prajapati.jpg')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">Shaolin P.</p>
                                <span className="text-[9px] bg-city-purple text-white px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">YOU</span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <p className="text-xs text-gray-500 font-medium">18 achievements</p>
                                <span className="text-[8px] bg-city-neon text-city-black px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter">HUSTLER</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-black text-lg text-city-purple">10,250</p>
                        <p className="text-[10px] text-gray-400 uppercase font-black">pts</p>
                    </div>
                </div>

                {/* User Row (6) */}
                <div className="bg-white/80 p-5 rounded-[2.5rem] shadow-card-soft flex items-center justify-between border border-black/5">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-extrabold w-4 text-center text-lg">6</span>
                        <div className="size-14 rounded-2xl bg-slate-100 overflow-hidden shadow-sm" style={{ backgroundImage: "url('/ranking/Mihir_Kalway.jpg')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">Mihir K.</p>
                                <span className="text-[8px] bg-city-neon text-city-black px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter">HUSTLER</span>
                            </div>
                            <p className="text-xs text-gray-500 font-medium">15 achievements</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-black text-lg text-city-purple">10,000</p>
                        <p className="text-[10px] text-gray-400 uppercase font-black">pts</p>
                    </div>
                </div>

                {/* User Row (7) */}
                <div className="bg-white/80 p-5 rounded-[2.5rem] shadow-card-soft flex items-center justify-between border border-black/5">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-extrabold w-4 text-center text-lg">7</span>
                        <div className="size-14 rounded-2xl bg-teal-50 overflow-hidden shadow-sm" style={{ backgroundImage: "url('/ranking/Arjun_Jain.jpg')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">Arjun J.</p>
                                <span className="text-[8px] border border-gray-300 text-gray-400 px-1.5 py-0.5 rounded-md font-bold uppercase tracking-tighter">ROOKIE</span>
                            </div>
                            <p className="text-xs text-gray-500 font-medium">12 achievements</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-black text-lg text-city-purple">7,600</p>
                        <p className="text-[10px] text-gray-400 uppercase font-black">pts</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
