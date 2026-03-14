import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

export default function RedeemPage() {
    return (
        <main className="flex-1 overflow-y-auto w-full pb-32 pt-[88px]">
            {/* Points Balance Section */}
            <section className="px-6 py-8">
                <div className="bg-gradient-to-br from-city-purple to-[#8B5CF6] rounded-3xl p-6 shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 line-art-overlay opacity-30"></div>
                    <div className="relative z-10">
                        <p className="text-white/80 text-xs font-black uppercase tracking-widest mb-1">Your Balance</p>
                        <div className="flex items-baseline gap-2">
                            <h2 className="text-white text-5xl font-black tracking-tighter">500</h2>
                            <span className="text-city-neon text-sm font-bold uppercase">Points</span>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button className="bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase px-4 py-2 rounded-xl border border-white/20">History</button>
                            <button className="bg-city-neon text-black text-[10px] font-black uppercase px-4 py-2 rounded-xl">Earn More</button>
                        </div>
                    </div>
                    <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/10 rotate-12">stars</span>
                </div>
            </section>

            {/* Search Section */}
            <section className="px-6 mb-6">
                <SearchBar placeholder="Search for rewards..." />
            </section>

            {/* Reward Tiles Section */}
            <section className="px-6 pb-24">
                <div className="grid grid-cols-2 gap-4">
                    {/* Coffee Card */}
                    <div className="redeem-card relative bg-white rounded-[2rem] p-5 shadow-card-soft border border-black/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-city-neon/10 rounded-full"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-city-neon rounded-xl flex items-center justify-center mb-3 shadow-sm">
                                <span className="material-symbols-outlined text-city-black text-xl">coffee</span>
                            </div>
                            <h3 className="font-black text-city-black text-lg leading-tight uppercase">Free<br />Coffee</h3>
                            <p className="text-[10px] font-medium text-gray-500 mt-1">Starbucks only</p>
                        </div>
                        <button className="w-full bg-city-purple text-white text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">150 COINS</button>
                    </div>

                    {/* Movie Card */}
                    <div className="redeem-card relative bg-city-black rounded-[2rem] p-5 shadow-card-soft border border-white/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 line-art-overlay opacity-20"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-city-purple rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-white text-xl">confirmation_number</span>
                            </div>
                            <h3 className="font-black text-white text-lg leading-tight uppercase">Movie<br />Ticket</h3>
                            <p className="text-[10px] font-medium text-gray-400 mt-1">AMC &amp; Regal</p>
                        </div>
                        <button className="w-full bg-city-neon text-city-black text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">400 COINS</button>
                    </div>

                    {/* Fashion Card */}
                    <div className="redeem-card relative bg-white rounded-[2rem] p-5 shadow-card-soft border border-black/5 flex flex-col justify-between overflow-hidden pattern-grid">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-pink-500 text-xl">apparel</span>
                            </div>
                            <div className="flex justify-between items-start">
                                <h3 className="font-black text-city-black text-lg leading-tight uppercase">Fashion<br />Discount</h3>
                                <span className="text-[8px] font-bold text-city-purple bg-city-purple/10 px-1.5 py-0.5 rounded-full">PROMO</span>
                            </div>
                            <p className="text-[10px] font-medium text-gray-500 mt-1">20% off at H&amp;M</p>
                        </div>
                        <button className="w-full bg-city-purple text-white text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">250 COINS</button>
                    </div>

                    {/* Music Card */}
                    <div className="redeem-card relative bg-gradient-to-br from-city-black to-slate-800 rounded-[2rem] p-5 shadow-card-soft border border-white/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute top-2 right-2 flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-city-neon/40"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-city-neon/20"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-indigo-500/20 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-white text-xl">headphones</span>
                            </div>
                            <h3 className="font-black text-white text-lg leading-tight uppercase">Spotify<br />Premium</h3>
                            <p className="text-[10px] font-medium text-gray-400 mt-1">1 Month Subs</p>
                        </div>
                        <button className="w-full bg-city-neon text-city-black text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">300 COINS</button>
                    </div>

                    {/* Fitness Card */}
                    <div className="redeem-card relative bg-white rounded-[2rem] p-5 shadow-card-soft border border-black/5 flex flex-col justify-between overflow-hidden pattern-dots">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-blue-600 text-xl">fitness_center</span>
                            </div>
                            <h3 className="font-black text-city-black text-lg leading-tight uppercase">Gym<br />Pass</h3>
                            <p className="text-[10px] font-medium text-gray-500 mt-1">Anytime Fitness</p>
                        </div>
                        <button className="w-full bg-city-purple text-white text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">500 COINS</button>
                    </div>

                    {/* Tech Card */}
                    <div className="redeem-card relative bg-city-black rounded-[2rem] p-5 shadow-card-soft border border-white/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 line-art-overlay opacity-10"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-city-neon rounded-xl flex items-center justify-center mb-3 shadow-sm">
                                <span className="material-symbols-outlined text-city-black text-xl">smartphone</span>
                            </div>
                            <h3 className="font-black text-white text-lg leading-tight uppercase">Phone<br />Accessory</h3>
                            <p className="text-[10px] font-medium text-gray-400 mt-1">Apple Store</p>
                        </div>
                        <button className="w-full bg-city-neon text-city-black text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">100 COINS</button>
                    </div>

                    {/* Food Card */}
                    <div className="redeem-card relative bg-[#FFF7F0] rounded-[2rem] p-5 shadow-card-soft border border-orange-100 flex flex-col justify-between overflow-hidden">
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-orange-500/5 rounded-full"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-orange-500/20">
                                <span className="material-symbols-outlined text-white text-xl">fastfood</span>
                            </div>
                            <h3 className="font-black text-city-black text-lg leading-tight uppercase">Burger<br />Meal</h3>
                            <p className="text-[10px] font-medium text-gray-500 mt-1">In-N-Out</p>
                        </div>
                        <button className="w-full bg-city-purple text-white text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">200 COINS</button>
                    </div>

                    {/* Travel Card */}
                    <div className="redeem-card relative bg-white rounded-[2rem] p-5 shadow-card-soft border border-black/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute top-5 right-5">
                            <span className="material-symbols-outlined text-city-purple/20 text-4xl rotate-45">flight</span>
                        </div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-city-purple text-xl">flight</span>
                            </div>
                            <h3 className="font-black text-city-black text-lg leading-tight uppercase">Flight<br />Voucher</h3>
                            <p className="text-[10px] font-medium text-gray-500 mt-1">Delta Airlines</p>
                        </div>
                        <button className="w-full bg-city-purple text-white text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">1000 COINS</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
