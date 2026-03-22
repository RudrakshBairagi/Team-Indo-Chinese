import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

export default function SocialPage() {
    return (
        <main className="flex-1 overflow-y-auto w-full pb-32 pt-[88px]">
            {/* Stories Section */}
            <section className="mt-6" data-purpose="stories-section">
                <div className="px-6 mb-4">
                    <h2 className="text-2xl font-extrabold tracking-tight">Social Feed</h2>
                </div>
                <div className="px-6 mb-6">
                    <SearchBar placeholder="Search for inspiration..." className="" />
                </div>
                <div className="flex gap-4 px-6 overflow-x-auto hide-scrollbar pb-2">
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-dashed border-city-purple flex items-center justify-center">
                            <div className="size-14 bg-city-black/5 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-city-purple font-bold">add</span>
                            </div>
                        </div>
                        <span className="text-[11px] font-bold">Your Story</span>
                    </div>

                    {/* Other Stories */}
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-city-purple">
                            <img className="size-full rounded-full object-cover" alt="Portrait of Rudraksh" src="/ranking/Rudraksh_Bairagi.jpg"/>
                        </div>
                        <span className="text-[11px] font-bold">Rudraksh</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-city-purple">
                            <img className="size-full rounded-full object-cover" alt="Portrait of Charu" src="/ranking/Charu_Chourasia.jpg"/>
                        </div>
                        <span className="text-[11px] font-bold">Charu</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-city-purple">
                            <img className="size-full rounded-full object-cover" alt="Portrait of Srajan" src="/ranking/Srajan_Tiwari.jpg"/>
                        </div>
                        <span className="text-[11px] font-bold">Srajan</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-city-purple">
                            <img className="size-full rounded-full object-cover" alt="Portrait of Subrat" src="/ranking/Subrat_Kumar.jpg"/>
                        </div>
                        <span className="text-[11px] font-bold">Subrat</span>
                    </div>
                </div>
            </section>

            {/* Posts Feed */}
            <div className="mt-8 space-y-8 px-6">
                {/* Post Card 1 */}
                <article className="bg-white rounded-[2.5rem] overflow-hidden shadow-card-soft border border-black/5" data-purpose="social-post">
                    <div className="p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="size-10 rounded-full object-cover" alt="User avatar Charu" src="/ranking/Charu_Chourasia.jpg"/>
                            <div>
                                <h3 className="font-bold text-sm tracking-tight">Charu Chourasia</h3>
                                <p className="text-[10px] font-medium text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                        <button className="text-gray-400">
                            <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                    </div>
                    <div className="aspect-square bg-city-gray relative overflow-hidden">
                        <img className="w-full h-full object-cover" alt="Post image" src="/posts/post_1.png"/>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-6 mb-4">
                            <button className="flex items-center gap-1.5 text-city-purple">
                                <span className="material-symbols-outlined filled-icon">favorite</span>
                                <span className="text-xs font-black">1.2k</span>
                            </button>
                            <button className="flex items-center gap-1.5 text-gray-600">
                                <span className="material-symbols-outlined">mode_comment</span>
                                <span className="text-xs font-black">45</span>
                            </button>
                            <button className="flex items-center gap-1.5 text-gray-600">
                                <span className="material-symbols-outlined">share</span>
                                <span className="text-xs font-black">12</span>
                            </button>
                        </div>
                        <p className="text-sm leading-relaxed text-city-black">
                            <span className="font-bold">Charu Chourasia</span> Spent the morning cleaning up the Yamuna riverbank with the crew! 🌊🧹 Every piece of trash we remove brings life back to our river. Let&apos;s keep this energy going! #CleanYamuna #RiverRevival #GoGreen
                        </p>
                    </div>
                </article>

                {/* Post Card 2 */}
                <article className="bg-white rounded-[2.5rem] overflow-hidden shadow-card-soft border border-black/5" data-purpose="social-post">
                    <div className="p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="size-10 rounded-full object-cover" alt="User avatar Rudraksh" src="/ranking/Rudraksh_Bairagi.jpg"/>
                            <div>
                                <h3 className="font-bold text-sm tracking-tight">Rudraksh Bairagi</h3>
                                <p className="text-[10px] font-medium text-gray-400">5 hours ago</p>
                            </div>
                        </div>
                        <button className="text-gray-400">
                            <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                    </div>
                    <div className="relative overflow-hidden">
                        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                            <div className="w-full flex-shrink-0 snap-center aspect-square">
                                <img className="w-full h-full object-cover" alt="Post image part 1" src="/posts/post_2_part1.png"/>
                            </div>
                            <div className="w-full flex-shrink-0 snap-center aspect-square">
                                <img className="w-full h-full object-cover" alt="Post image part 2" src="/posts/post_2_part2.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-6 mb-4">
                            <button className="flex items-center gap-1.5 text-gray-600">
                                <span className="material-symbols-outlined">favorite</span>
                                <span className="text-xs font-black">856</span>
                            </button>
                            <button className="flex items-center gap-1.5 text-gray-600">
                                <span className="material-symbols-outlined">mode_comment</span>
                                <span className="text-xs font-black">28</span>
                            </button>
                            <button className="flex items-center gap-1.5 text-gray-600">
                                <span className="material-symbols-outlined">share</span>
                                <span className="text-xs font-black">5</span>
                            </button>
                        </div>
                        <p className="text-sm leading-relaxed text-city-black">
                            <span className="font-bold">Rudraksh Bairagi</span> Just joined team flying beast in a clean drive, hella excited. #cleanearth #beastlife
                        </p>
                    </div>
                </article>
            </div>
        </main>
    );
}
