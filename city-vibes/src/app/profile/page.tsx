import Link from 'next/link';

export default function ProfilePage() {
    return (
        <main className="flex-1 overflow-y-auto w-full pb-32 pt-[88px]">
            {/* Profile Hero Section */}
            <div className="px-6 py-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                        <div
                            className="w-32 h-32 rounded-full border-4 border-white shadow-card-soft overflow-hidden bg-gray-200"
                            style={{
                                backgroundImage: `url('/ranking/Shaolin_Prajapati.jpg')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />
                        <div className="absolute bottom-1 right-1 bg-city-purple text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                            <span className="material-symbols-outlined text-sm">edit</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-city-black">Shaolin Prajapati</h2>
                        <p className="text-city-purple text-sm font-medium">shaolin.prajapati@email.com</p>
                    </div>
                    <button className="w-full max-w-xs bg-city-black text-white font-bold py-3.5 px-6 rounded-2xl shadow-card-soft transition-all active:scale-95">
                        Edit Profile
                    </button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="px-6 grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/40 border border-black/5 p-4 rounded-[2rem] shadow-card-soft flex flex-col items-center justify-center gap-1">
                    <p className="text-city-purple text-2xl font-black">10,250</p>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Points</p>
                </div>
                <div className="bg-white/40 border border-black/5 p-4 rounded-[2rem] shadow-card-soft flex flex-col items-center justify-center gap-1">
                    <p className="text-city-purple text-2xl font-black">18</p>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter text-center">Events</p>
                </div>
                <div className="bg-white/40 border border-black/5 p-4 rounded-[2rem] shadow-card-soft flex flex-col items-center justify-center gap-1">
                    <p className="text-city-purple text-2xl font-black">5</p>
                    <p className="text-[10px] uppercase font-bold text-gray-500 tracking-tighter">Orgs</p>
                </div>
            </div>

            {/* Options List */}
            <div className="px-6 space-y-4">
                <Link
                    className="flex items-center justify-between p-4 bg-white/40 rounded-[2rem] shadow-card-soft border border-black/5 hover:bg-white/60 transition-colors"
                    href="#"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-city-neon/20 flex items-center justify-center border border-black/5">
                            <span className="material-symbols-outlined text-city-black filled-icon">person</span>
                        </div>
                        <span className="font-bold text-city-black">Personal Information</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>

                <Link
                    className="flex items-center justify-between p-4 bg-white/40 rounded-[2rem] shadow-card-soft border border-black/5 hover:bg-white/60 transition-colors"
                    href="#"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-city-purple/20 flex items-center justify-center border border-black/5">
                            <span className="material-symbols-outlined text-city-purple filled-icon">calendar_month</span>
                        </div>
                        <span className="font-bold text-city-black">My Events</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>

                <Link
                    className="flex items-center justify-between p-4 bg-white/40 rounded-[2rem] shadow-card-soft border border-black/5 hover:bg-white/60 transition-colors"
                    href="#"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gray-200 flex items-center justify-center border border-black/5">
                            <span className="material-symbols-outlined text-city-black filled-icon">corporate_fare</span>
                        </div>
                        <span className="font-bold text-city-black">Saved Organizations</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>

                <Link
                    className="flex items-center justify-between p-4 bg-white/40 rounded-[2rem] shadow-card-soft border border-black/5 hover:bg-white/60 transition-colors"
                    href="#"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-city-neon/20 flex items-center justify-center border border-black/5">
                            <span className="material-symbols-outlined text-city-black">notifications_active</span>
                        </div>
                        <span className="font-bold text-city-black">Notifications</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>

                <Link
                    className="flex items-center justify-between p-4 bg-white/40 rounded-[2rem] shadow-card-soft border border-black/5 hover:bg-white/60 transition-colors"
                    href="#"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-city-black/10 flex items-center justify-center border border-black/5">
                            <span className="material-symbols-outlined text-city-black">settings</span>
                        </div>
                        <span className="font-bold text-city-black">Preferences</span>
                    </div>
                    <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                </Link>

                <Link
                    className="flex items-center justify-between p-4 bg-red-50/50 rounded-[2rem] shadow-card-soft border border-red-100 hover:bg-red-50 transition-colors mt-6"
                    href="#"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center border border-red-200">
                            <span className="material-symbols-outlined text-red-600">logout</span>
                        </div>
                        <span className="font-bold text-red-600">Logout</span>
                    </div>
                </Link>
            </div>
        </main>
    );
}
