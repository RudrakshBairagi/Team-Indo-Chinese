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
                            <img className="size-full rounded-full object-cover" alt="Portrait of Alex" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3wiaGK-yJSc728NY1_0ksaLUzQLpqUV916P5ubxIp1TxChOMjq4RGSP7QyWNraLRys3rWWq25G74cQGCQMjmytnMobEOChadxR2teQTJgIP-3dOClYcFKZGwZhuPE79HJX0otugWrJSfua4rhlBuHVwseHTxQyIyPnloa1XjkbQWUXL20GWQHU1J9royw4K8Otn2f-_CAXjIEsWlT4gqoEO0boTPK_xbKdaswlRjl3bfuBNYF73ce5_T_EXdQKUL3nnqI4uMiROY"/>
                        </div>
                        <span className="text-[11px] font-bold">Alex</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-city-purple">
                            <img className="size-full rounded-full object-cover" alt="Portrait of Jordan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Nk5RBvu5YyK035qt-42VHT6Ln5j85otsLEueZFwCD3rSRLVDhL8wW3c2XqKB4TAf7dPgbn3dT21dpSURNnNDKPb_LNdiVCJcgGvKhZ5Gwfdim-G6MrSvwS1mGDJ-kUv3nOcEF4ibNHGVQgpz-4U-de3yLJa_c1DP0hd3JnacM7BaZ8VoJqQ65OEn-j3jlttwTHlw0HQO3UNUr-2WwqPPtjYceDx6AMhrqAKw9qeJN54ngYLCjcr-NK8FgeuGZPJzTrjM6_ZdCEI"/>
                        </div>
                        <span className="text-[11px] font-bold">Jordan</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-city-purple">
                            <img className="size-full rounded-full object-cover" alt="Portrait of Taylor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX8PdDhPr_E99wC-r_pEDugaP_MuS8vOtOTqcjGlHF71jS5ygvL8HCAxhita2eUM65AEXCTDrFGdxiucMRc2RCXkihAE7skuFoY9726PSXuzv6k1bWEVeGugV9hYqbuj6V4PjaeqaynFPa_HoxiWZzEGo5u5J_XbrqHT6WB2uXvxJVJ7WAEB8FItEsVyrZGYD1nVOJ9176PN9XQXdhPc93d4vLhxxg9ynglWxCrGAKWYzEyrY1gX3YJzjL-aXPyFMNM6_UkYl3llk"/>
                        </div>
                        <span className="text-[11px] font-bold">Taylor</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 min-w-[72px]">
                        <div className="size-16 rounded-full p-0.5 border-2 border-city-purple">
                            <img className="size-full rounded-full object-cover" alt="Portrait of Morgan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmhYtEgM_JeVRMA0umnECvpSQSyJ_KQ0GbQ-m6NHXziM_NYF9t_5cRBcU4Y4XG0GG9X6ZdPP2HveKbaYyQ83zNV6BUdJIbInxvEpQ8bTLVzw6g7dKNw7OZeuPcAaeub7gz7aZ0wITSr8IA3igw8arv8lSVGa40fC5D3Lm7O3IqVzeMGPkag6EZv-4pGnwUNL8uTyjUDl6a78gK5-2fpCUtEO4FS1E4j0fuK5U06e35kwHK_TRbFKgBhiddy-I6pXQrc5aO_gtrI20"/>
                        </div>
                        <span className="text-[11px] font-bold">Morgan</span>
                    </div>
                </div>
            </section>

            {/* Posts Feed */}
            <div className="mt-8 space-y-8 px-6">
                {/* Post Card 1 */}
                <article className="bg-white rounded-[2.5rem] overflow-hidden shadow-card-soft border border-black/5" data-purpose="social-post">
                    <div className="p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="size-10 rounded-full object-cover" alt="User avatar Marcus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4qAqCf5-AKTb56WgjlRvozOVhvsa37ZTBP7vp50WRqD-qA8XyNs1TXTxkj_GbDf1pjqOPSrgB-DPsvRcYcIJg3lpR-ymMtqXOUiYYvaF-yw1NLx8T_2dPZSjMvv7A5dP4T2McD0wYii4IvcZan0VBIw_r5NpKM1icIyRrWtPuXiI87b5cwFIjJAGB41NN4_LUdLdRTpaiZgEwrdxK8kOPmfJ40Jmk2xJSImL2XaaHqTE7w4ZOiyJBsVcSJaXGHWWoZ2B7LJojPaA"/>
                            <div>
                                <h3 className="font-bold text-sm tracking-tight">Marcus Vane</h3>
                                <p className="text-[10px] font-medium text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                        <button className="text-gray-400">
                            <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                    </div>
                    <div className="aspect-square bg-city-gray relative overflow-hidden">
                        <img className="w-full h-full object-cover" alt="Vibrant abstract street art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAETl6HvNYEO4rExmuUsC6XcAttUL5K7gUox3kNK5ly1THiFhuncNRJalotSnNHcmt9-8YAvtVxjibM3cDeG34x6wXbTgSSf_LO_Ak8O3_VsL_nV1k4LtoWLGZEdpZFaulbE8PHGFvAx5_g0MrhV7SkRk6-xeQXkilphlwJkle2pZhpWHQP4uluT-5R1zwd5MKRme7TiTzynk80fb-zBTkmIsH8AelCR8iWBm6rK4e9SpXZpfV90WHUDblCVjhCihGUr-BL9G-7DeQ"/>
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
                            <span className="font-bold">Marcus Vane</span> Exploring the bold colors of the city today! This mural just speaks to the soul of SF. #art #vibrant #hustle
                        </p>
                    </div>
                </article>

                {/* Post Card 2 */}
                <article className="bg-white rounded-[2.5rem] overflow-hidden shadow-card-soft border border-black/5" data-purpose="social-post">
                    <div className="p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img className="size-10 rounded-full object-cover" alt="User avatar Sarah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI-u3qGfoz1Lc_mgT-54J7gFGp60PsBXEHMFfHnBsdVeafGdrxYbcgIHRVYhSBdhtXKX3lC1shAd9c_qn0PK6dmvr3ZDKu7Vg6xnWfukVB3DE6AEw-2VPU_lI5001mswJoGjGTw0gnUd7nE1EQ0_TFq9HKKt9lrO8QHH8cN98bGmB2yiKBjAM4K4VjO0hDCuH9aGjxuMx6pOAYQ2D85JJ9-SVPXttIQ5rnguJ-5M9YEN9lUuh6zIk72y4oaoIStBCVW_fQKpkdNKM"/>
                            <div>
                                <h3 className="font-bold text-sm tracking-tight">Sarah Jenkins</h3>
                                <p className="text-[10px] font-medium text-gray-400">5 hours ago</p>
                            </div>
                        </div>
                        <button className="text-gray-400">
                            <span className="material-symbols-outlined">more_horiz</span>
                        </button>
                    </div>
                    <div className="aspect-[4/5] bg-city-gray relative overflow-hidden">
                        <img className="w-full h-full object-cover" alt="Neon light installation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv34KzYg7LYvS2SK3RWJ2lh_X1h2IWuGHcqcLZUz23ySw05-clRzZensY0Diw820jrUs5PVTQII3s_fz3eGPNowNAgvW19GFI7Lka5tbrtzInFy8r_HRC2nIscHFHWs3tWiKsi3NsAXtpzQ8eaApdTkwqlJML58HHkCxB5Z2W8txwIlOqfH4EN4RgJP8rSvMJtUD-T3LVlGzT4pYKSF7d-XkNCLcYYlyYmJC9_NP8J0YsGKZehnL8XHx-yyoKwkg2vHUzVS7P_iUI"/>
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
                            <span className="font-bold">Sarah Jenkins</span> Late night inspiration sessions hit different. The city never truly sleeps when you have a vision to build. 🌃✨
                        </p>
                    </div>
                </article>
            </div>
        </main>
    );
}
