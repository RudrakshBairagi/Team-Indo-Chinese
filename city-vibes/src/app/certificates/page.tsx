import Link from 'next/link';

export default function CertificatesPage() {
    return (
        <main className="flex-1 overflow-y-auto w-full pb-32 pt-[88px]">
            {/* Header / Title */}
            <div className="px-6 py-6 mb-2">
                <div className="flex items-center gap-4">
                    <Link
                        href="/profile"
                        className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center border border-black/5 shadow-sm active:scale-95 transition-transform"
                    >
                        <span className="material-symbols-outlined text-city-black">arrow_back</span>
                    </Link>
                    <h1 className="text-2xl font-black text-city-black tracking-tight">Certificates</h1>
                </div>
                <p className="text-gray-500 text-sm mt-3 ml-1">View and download your earned certificates</p>
            </div>

            {/* Stats Row */}
            <div className="px-6 grid grid-cols-2 gap-4 mb-8">
                <div className="bg-city-neon/20 border border-city-neon/30 p-4 rounded-[2rem] flex flex-col items-center justify-center gap-1 relative overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-city-neon/30 rounded-full blur-md"></div>
                    <p className="text-city-black text-3xl font-black relative z-10">4</p>
                    <p className="text-[10px] uppercase font-bold text-gray-600 tracking-tighter relative z-10">Earned</p>
                </div>
                <div className="bg-white/40 border border-black/5 p-4 rounded-[2rem] shadow-card-soft flex flex-col items-center justify-center gap-1">
                    <p className="text-city-purple text-3xl font-black">2</p>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter text-center">In Progress</p>
                </div>
            </div>

            {/* Certificates List */}
            <div className="px-6 space-y-4">
                
                {/* Certificate 1 */}
                <div className="bg-white rounded-[2rem] p-5 shadow-card-soft border border-black/5 relative overflow-hidden group">
                    {/* Decorative element */}
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-yellow-100/50 rounded-full blur-xl group-hover:bg-yellow-200/50 transition-colors"></div>
                    
                    <div className="relative z-10 flex gap-4">
                        <div className="w-14 h-14 shrink-0 bg-city-black rounded-2xl flex items-center justify-center shadow-md">
                            <span className="material-symbols-outlined text-city-neon text-2xl">workspace_premium</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-city-black leading-tight text-sm pr-4">Youth Leadership Summit 2023</h3>
                                <span className="text-[10px] font-bold text-city-purple bg-city-purple/10 px-2 py-1 rounded-lg shrink-0">Dec 2023</span>
                            </div>
                            <p className="text-gray-500 text-[11px] mb-3">Global Youth Network</p>
                            
                            <div className="flex gap-2">
                                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-city-black text-[11px] font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                                    View
                                </button>
                                <button className="flex-1 bg-city-black text-white text-[11px] font-bold py-2 rounded-xl active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">download</span>
                                    PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificate 2 */}
                <div className="bg-white rounded-[2rem] p-5 shadow-card-soft border border-black/5 relative overflow-hidden group">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-city-neon/10 rounded-full blur-xl group-hover:bg-city-neon/20 transition-colors"></div>
                    
                    <div className="relative z-10 flex gap-4">
                        <div className="w-14 h-14 shrink-0 bg-white border-2 border-city-black rounded-2xl flex items-center justify-center shadow-sm">
                            <span className="material-symbols-outlined text-city-black text-2xl">verified</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-city-black leading-tight text-sm pr-4">Urban Gardening Volunteer</h3>
                                <span className="text-[10px] font-bold text-city-purple bg-city-purple/10 px-2 py-1 rounded-lg shrink-0">Oct 2023</span>
                            </div>
                            <p className="text-gray-500 text-[11px] mb-3">City Parks Dept.</p>
                            
                            <div className="flex gap-2">
                                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-city-black text-[11px] font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                                    View
                                </button>
                                <button className="flex-1 bg-city-black text-white text-[11px] font-bold py-2 rounded-xl active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">download</span>
                                    PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certificate 3 */}
                <div className="bg-white rounded-[2rem] p-5 shadow-card-soft border border-black/5 relative overflow-hidden group">
                    <div className="absolute -right-6 -top-6 w-24 h-24 bg-city-purple/10 rounded-full blur-xl group-hover:bg-city-purple/20 transition-colors"></div>
                    
                    <div className="relative z-10 flex gap-4">
                        <div className="w-14 h-14 shrink-0 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                            <span className="material-symbols-outlined text-gray-600 text-2xl">event_available</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-city-black leading-tight text-sm pr-4">Tech for Good Hackathon</h3>
                                <span className="text-[10px] font-bold text-city-purple bg-city-purple/10 px-2 py-1 rounded-lg shrink-0">Aug 2023</span>
                            </div>
                            <p className="text-gray-500 text-[11px] mb-3">Code4Cause</p>
                            
                            <div className="flex gap-2">
                                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-city-black text-[11px] font-bold py-2 rounded-xl transition-colors flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">visibility</span>
                                    View
                                </button>
                                <button className="flex-1 bg-city-black text-white text-[11px] font-bold py-2 rounded-xl active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">download</span>
                                    PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Empty State / Pending */}
            <div className="px-6 mt-8 mb-4">
                <div className="border border-dashed border-gray-300 rounded-[2rem] p-6 flex flex-col items-center justify-center text-center bg-white/20">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                        <span className="material-symbols-outlined text-gray-400">pending</span>
                    </div>
                    <h4 className="font-bold text-sm text-city-black mb-1">More on the way!</h4>
                    <p className="text-[11px] text-gray-500 max-w-[200px]">Complete more events or courses to earn new certificates.</p>
                </div>
            </div>

        </main>
    );
}
