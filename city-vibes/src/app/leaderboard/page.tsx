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
                            <div className="size-20 rounded-full border-4 border-accent-silver/30 bg-accent-silver/20 overflow-hidden shadow-card-soft" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAxYVmXUTlN9BtKuUj7Tb76rPJVmj9pffqjYfO9egUwJvVL9ZliiRJozRlU6D82YXV-gUo9qRruuQD1bobjbwubE_L5gwF6w4kstX4qWO7H8TFfLaGsaoeC6xbIl8Y6l2Gmf4Dh-OPfXQHMBA6lUlo3u2GiG2KwKN6J0toaTlrc2iH3eYSi41IuQ0EXu2riHCcsm12l9W5eH5VhPlwmrTcFv7hJVbMgy1Ln1CZujLLJp0Wceh-javebKFuJ_azxUZv0rprnkb0DXrk')", backgroundSize: "cover" }}></div>
                            <div className="absolute -top-1 -right-1 bg-accent-silver text-white size-7 rounded-full flex items-center justify-center font-black text-xs shadow-md border-2 border-white">2</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm w-full rounded-2xl p-3 text-center shadow-card-soft border border-black/5">
                            <p className="text-xs font-bold truncate">Sarah J.</p>
                            <p className="text-[10px] text-city-purple font-extrabold mt-0.5">13,840 pts</p>
                        </div>
                    </div>
                    {/* Rank 1 */}
                    <div className="flex flex-col items-center w-1/3 scale-110 -translate-y-4">
                        <div className="relative mb-3">
                            <div className="size-24 rounded-full border-4 border-accent-gold bg-accent-gold/20 overflow-hidden shadow-card-soft" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKDe5QGbgXEATha9Co6z_E5-7fVJOovJt7NmcGl0C5cvk24d1BP3DNM_hPfVRyGnYFQ-GZdO4C_5RCjkbhXp1Gddyo3t0Efks91_4PcnmEbt8J5G1KBITHtnultGVgaEQjN8krZis1SfXspQeS6rDTXZirPDk33ypDxFMU3yU4Y72A01uABs0eTfkMCoGOWjpEC2y8VEQkrYwPuQD6yf3mguxTBE6OQhqzhxbt9gu0JbMSsH_ki89Oc6t4mx6IE1V_A7iR48LEssk')", backgroundSize: "cover" }}></div>
                            <div className="absolute -top-1 -right-1 bg-accent-gold text-city-black size-9 rounded-full flex items-center justify-center font-black text-sm shadow-md border-2 border-white">1</div>
                        </div>
                        <div className="bg-white backdrop-blur-sm w-full rounded-2xl p-4 text-center shadow-card-soft border border-accent-gold/30">
                            <p className="text-sm font-black truncate">Mike Ross</p>
                            <p className="text-xs text-city-purple font-black mt-0.5">14,850 pts</p>
                        </div>
                    </div>
                    {/* Rank 3 */}
                    <div className="flex flex-col items-center w-1/3">
                        <div className="relative mb-3">
                            <div className="size-20 rounded-full border-4 border-accent-bronze/30 bg-accent-bronze/20 overflow-hidden shadow-card-soft" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlBfxiRJhRRVdGKb03REKxMkSrZiYi4mcD3_g4OKKykldiPcOGeXXsFSgrgbuSPTh6PU1xv0LSxu9xhhnIwfg8wwl0Ehrgwyi3SakzydN42_1VKYxTbNi_aZF0thmLoBejsLyXcudIAQzqhJeumNxy5KAR6dlPUrOPIYEq3frIIbDTB_VuqusZW__sBnHuKP3FLmjOzuz9EyllzN94PZ9pKJg9mgACYnPdhroigKnn0CyiV4j9_Tm-hKB5slxW2ooV_CpED-jjFpA')", backgroundSize: "cover" }}></div>
                            <div className="absolute -top-1 -right-1 bg-accent-bronze text-white size-7 rounded-full flex items-center justify-center font-black text-xs shadow-md border-2 border-white">3</div>
                        </div>
                        <div className="bg-white/80 backdrop-blur-sm w-full rounded-2xl p-3 text-center shadow-card-soft border border-black/5">
                            <p className="text-xs font-bold truncate">Alex Chen</p>
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
                        <div className="size-14 rounded-2xl bg-orange-100/50 overflow-hidden shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBT3viU2hp_LOlHU_X9LjUmL1RTKleqFYG0GFCAdRgfpjF_Vymt1XZDV4zqiUsJYH6ppVpptoxoza25SMs9fSuDrJDYLGkkNRr0Vlv9ctwtRkCjDXruBppeZjVi5YYCAR_NBNTxWZ_5D64EZ8XkOkgla01U62wAjKyXWFcBiUKETbbKB8YJRtR0d51Yon6dXKHt_Tjx2pIlyDSEbvGQEpSjiIJ96QHh0961nTxjnv3kKmnh_BCqPMEVbEr7AO96z1cWaomC8ZhUric')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">Elena Gilbert</p>
                                <span className="text-[8px] border border-gray-300 text-gray-400 px-1.5 py-0.5 rounded-md font-bold uppercase tracking-tighter">ROOKIE</span>
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
                        <div className="size-14 rounded-2xl bg-city-neon/20 flex items-center justify-center overflow-hidden shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAE4PzitZv6ZMF3VKGS1ER6FbHaFWkfTlcCMvQnfFjWb08z3QBBcOFHu2cmv-8lK61BRbzpMBqgBFpyXaoLU2JHFelfZzl1iL5RrFJODXCwm94e-uIeD6Lpwok2vCkH63l5AdnF_Sax_xkfWGadFMBQWGvc4zGxsGVw3SKnN0ETaq3EPtWfaiVwOPkh2rRVOHT-ZkNb5KLnE9IPoOuM8a8qilM2W0TYaSS0Xsh_qYfpRlUBwWB3-WWwlx4DuITwkUzE72WykF1xTe8')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">David Miller</p>
                                <span className="text-[9px] bg-city-purple text-white px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">YOU</span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5">
                                <p className="text-xs text-gray-500 font-medium">18 achievements</p>
                                <span className="text-[8px] bg-city-neon text-city-black px-1.5 py-0.5 rounded-md font-black uppercase tracking-tighter">HUSTLER</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-black text-lg text-city-purple">10,000</p>
                        <p className="text-[10px] text-gray-400 uppercase font-black">pts</p>
                    </div>
                </div>

                {/* User Row (6) */}
                <div className="bg-white/80 p-5 rounded-[2.5rem] shadow-card-soft flex items-center justify-between border border-black/5">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-extrabold w-4 text-center text-lg">6</span>
                        <div className="size-14 rounded-2xl bg-slate-100 overflow-hidden shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJePamKIaF6QhMEq07cZqXxs3YonG2oLWDI3Eg_efPpO6v7K3hPJYawQYO4jBjy6mDDA8oX9R0dk6p3YLb1HcrK48b_fptiiW9XzeI3VU96GwoslPNo_e9WE9Biiel5ZFArPXQkjESY3YdVqpNONxnePR535lAy53p8vH8GXFXX2xzZwKm3ccIT39O2vjrh9pfH-j2DD2-UX8c3Qd-3oZlM6AjzYYATbwiumTXv8SihLKy-h60CxacTmz1ELbswLV-DfR3a_xOiZM')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">Sophie Turner</p>
                                <span className="text-[8px] border border-gray-300 text-gray-400 px-1.5 py-0.5 rounded-md font-bold uppercase tracking-tighter">ROOKIE</span>
                            </div>
                            <p className="text-xs text-gray-500 font-medium">15 achievements</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="font-black text-lg text-city-purple">10,250</p>
                        <p className="text-[10px] text-gray-400 uppercase font-black">pts</p>
                    </div>
                </div>

                {/* User Row (7) */}
                <div className="bg-white/80 p-5 rounded-[2.5rem] shadow-card-soft flex items-center justify-between border border-black/5">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-extrabold w-4 text-center text-lg">7</span>
                        <div className="size-14 rounded-2xl bg-teal-50 overflow-hidden shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCqGKNkW75-grSsQpLtYBCtoEF-6wt90QJcEnZgvSAh-ytVMtg9hhsQpaX8N0ArW50PR3pbrr6Y5T7RL84zVQkfX9wtZ7XL3mApGEgHp7kTmmnZ_xitTkvcVNGjJkWEofEy8fAaI1Xi7mexJOjwVwvv6Lct0ok3xVlg1Jlb0MYPCnW6KwdHT5RlnxhywmgR9MXQ8lsYdFOXEVS19qHIFDgJXh6nCn5V0ccie4CcP6-iXNQjkE62R1wRk4PJEwh70yHPL1zpckl8YQ')", backgroundSize: "cover" }}></div>
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-black text-base">Jordan Smith</p>
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
