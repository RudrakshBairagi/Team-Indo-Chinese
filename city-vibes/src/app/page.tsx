'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from '@/components/SearchBar';

export default function Home() {
    const [activeStory, setActiveStory] = useState(0);
    const storyContainerRef = useRef<HTMLDivElement>(null);
    const totalStories = 2;

    useEffect(() => {
        const container = storyContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.firstElementChild?.clientWidth ?? 0;
            const gap = 16; // gap-4 = 16px
            const index = Math.round(scrollLeft / (cardWidth + gap));
            setActiveStory(Math.min(index, totalStories - 1));
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <main className="flex-1 overflow-y-auto w-full pb-32 pt-[88px] relative z-0">
            {/* Search Bar */}
            <SearchBar />
            {/* BEGIN: Stories Section */}
            <section className="mt-8" data-purpose="stories-section">
                <div className="px-6 flex justify-between items-end mb-0">
                    <h2 className="text-2xl font-extrabold tracking-tight">What you missed!</h2>
                    <div className="flex gap-1.5 items-center">
                        {Array.from({ length: totalStories }).map((_, i) => (
                            <div
                                key={i}
                                className={`rounded-full transition-all duration-300 ${
                                    activeStory === i
                                        ? 'w-6 h-1 bg-city-black'
                                        : 'w-1.5 h-1.5 bg-black/10'
                                }`}
                            />
                        ))}
                    </div>
                </div>
                {/* Horizontal Scrollable Hero Area */}
                <div ref={storyContainerRef} className="hero-container flex gap-4 overflow-x-auto px-6 pt-12 pb-14 -mt-10 hide-scrollbar snap-x snap-mandatory">
                    {/* Hero Story 1: Clean Yamuna Campaign */}
                    <div
                        className="hero-story-card bg-city-black rounded-[2.5rem] flex flex-col relative overflow-hidden shrink-0 shadow-card-soft border border-white/5 snap-start">
                        <div
                            className="h-1/3 bg-city-black p-6 flex flex-col justify-center items-center text-center relative z-20">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">NGOs
                                &amp; Impact</span>
                            <h3 className="text-white text-2xl font-bold art-title">Clean Yamuna<br />Campaign</h3>
                        </div>
                        <div className="flex-1 bg-white relative overflow-hidden">
                            <Image 
                                src="https://www.eawater.com/wp-content/uploads/2022/09/topic-11.jpg" 
                                alt="Clean Yamuna Campaign" 
                                fill
                                sizes="(max-width: 768px) 100vw, 384px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-0 right-0 text-center px-4 relative z-10">
                                <p className="text-[11px] font-medium text-white uppercase tracking-wider">Mission
                                    Save Yamuna</p>
                            </div>
                        </div>
                    </div>
                    {/* Hero Story 2: Seedhe Maut Concert */}
                    <div
                        className="hero-story-card bg-city-gray rounded-[2.5rem] flex flex-col relative overflow-hidden shrink-0 shadow-card-soft border border-gray-100 snap-start">
                        <div className="h-1/3 bg-white p-6 flex flex-col justify-center items-center text-center relative z-20">
                            <span className="text-[10px] font-bold text-city-purple uppercase tracking-[0.2em] mb-3">Trending Now</span>
                            <h3 className="text-city-black text-2xl font-bold art-title">Seedhe Maut<br />Concert
                            </h3>
                        </div>
                        <div className="flex-1 bg-city-neon relative overflow-hidden">
                            <Image 
                                src="https://www.ticketfairy.com/uploaded/public/6191295b28b7f3.49742033.jpg" 
                                alt="Seedhe Maut Concert" 
                                fill
                                sizes="(max-width: 768px) 100vw, 384px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-6 left-0 right-0 text-center px-4 relative z-10">
                                <p className="text-[11px] font-bold text-white uppercase tracking-wider">Gems of India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END: Stories Section */}
            {/* BEGIN: Category Navigation */}
            <section className="mt-0" data-purpose="category-section">
                <div className="px-6 mb-0">
                    <h2 className="text-2xl font-bold">Volunteer For</h2>
                </div>
                <div className="overflow-x-auto hide-scrollbar flex gap-4 px-6 pt-10 pb-14 -mt-8" data-purpose="category-scroll">
                    {/* Tile 1: Events and Festivals */}
                    <button
                        className="category-tile relative group bg-city-black rounded-[2rem] overflow-hidden shrink-0 transition-transform active:scale-95 shadow-card-soft border border-white/5">
                        <div className="absolute inset-0 line-art-overlay opacity-30"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-city-black via-transparent to-transparent"></div>
                        <div className="absolute top-4 left-4 w-12 h-12 bg-city-neon rounded-full border border-white/20"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <span className="text-white text-sm font-black uppercase leading-tight block">Events
                                &amp;<br />Festivals</span>
                        </div>
                    </button>
                    {/* Tile 2: Film and Media */}
                    <button
                        className="category-tile relative group bg-city-purple rounded-[2rem] overflow-hidden shrink-0 transition-transform active:scale-95 shadow-card-soft border border-white/5">
                        <div className="absolute inset-0 line-art-overlay opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-city-purple/80 via-transparent to-transparent">
                        </div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-white/10 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <span className="text-white text-sm font-black uppercase leading-tight block">Film
                                &amp;<br />Media</span>
                        </div>
                    </button>
                    {/* Tile 3: Arts and Culture */}
                    <button
                        className="category-tile relative group bg-white rounded-[2rem] overflow-hidden shrink-0 transition-transform active:scale-95 shadow-card-soft border border-black/5">
                        <div className="absolute inset-0 line-art-overlay opacity-20"></div>
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-city-neon/20 rounded-full border border-black/5">
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <span className="text-city-black text-sm font-black uppercase leading-tight block">Arts
                                &amp;<br />Culture</span>
                        </div>
                    </button>
                    {/* Tile 4: NGOs and Impact */}
                    <button
                        className="category-tile relative group bg-city-neon rounded-[2rem] overflow-hidden shrink-0 transition-transform active:scale-95 shadow-card-soft border border-black/5">
                        <div className="absolute inset-0 line-art-overlay opacity-20 mix-blend-multiply"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/40 rounded-lg rotate-12"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <span className="text-city-black text-sm font-black uppercase leading-tight block">NGOs
                                &amp;<br />Impact</span>
                        </div>
                    </button>
                    {/* Tile 5: Sports */}
                    <button
                        className="category-tile relative group bg-gray-200 rounded-[2rem] overflow-hidden shrink-0 transition-transform active:scale-95 shadow-card-soft border border-black/5">
                        <div className="absolute inset-0 line-art-overlay opacity-40"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-city-black/10 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-left">
                            <span className="text-city-black text-sm font-black uppercase leading-tight block">Sports
                                &amp;<br />Action</span>
                        </div>
                    </button>
                </div>
            </section>
            {/* END: Category Navigation */}
            {/* BEGIN: Ranking Section */}
            <section className="mt-2" data-purpose="ranking-section">
                <div className="px-6 mb-0 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Ranking</h2>
                    <Link className="text-city-purple text-xs font-bold uppercase tracking-wider" href="/leaderboard">View Leaderboard</Link>
                </div>
                <div className="overflow-x-auto hide-scrollbar flex gap-4 px-6 pt-10 pb-14 -mt-8 items-end snap-x snap-mandatory" data-purpose="ranking-scroll">
                    {/* Rank 1 Card */}
                    <div className="rank-card bg-white rounded-[2rem] p-4 shrink-0 shadow-card-soft border border-black/5 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-city-neon/10 rounded-full"></div>
                        <div className="relative mb-3">
                            <div className="w-16 h-16 rounded-2xl bg-city-black overflow-hidden border-2 border-city-neon">
                                <img alt="Rudraksh Bairagi" className="w-full h-full object-cover" src="/ranking/Rudraksh_Bairagi.jpg" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-city-neon text-city-black font-black text-[10px] w-5 h-5 flex items-center justify-center rounded-lg shadow-sm">1</div>
                        </div>
                        <h4 className="text-city-black font-bold text-sm truncate w-full">Rudraksh B.</h4>
                        <p className="text-city-purple font-black text-[11px] mt-1">12,450 PTS</p>
                    </div>
                    {/* Rank 2 Card */}
                    <div className="rank-card bg-white rounded-[2rem] p-4 shrink-0 shadow-card-soft border border-black/5 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="relative mb-3">
                            <div className="w-16 h-16 rounded-2xl bg-gray-200 overflow-hidden border-2 border-white">
                                <img alt="Charu Chourasia" className="w-full h-full object-cover" src="/ranking/Charu_Chourasia.jpg" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-gray-200 text-city-black font-black text-[10px] w-5 h-5 flex items-center justify-center rounded-lg shadow-sm">2</div>
                        </div>
                        <h4 className="text-city-black font-bold text-sm truncate w-full">Charu C.</h4>
                        <p className="text-city-purple font-black text-[11px] mt-1">10,820 PTS</p>
                    </div>
                    {/* Rank 3 Card */}
                    <div className="rank-card bg-white rounded-[2rem] p-4 shrink-0 shadow-card-soft border border-black/5 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="relative mb-3">
                            <div className="w-16 h-16 rounded-2xl bg-gray-200 overflow-hidden border-2 border-white">
                                <img alt="Srajan Tiwari" className="w-full h-full object-cover" src="/ranking/Srajan_Tiwari.jpg" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-orange-100 text-city-black font-black text-[10px] w-5 h-5 flex items-center justify-center rounded-lg shadow-sm">3</div>
                        </div>
                        <h4 className="text-city-black font-bold text-sm truncate w-full">Srajan T.</h4>
                        <p className="text-city-purple font-black text-[11px] mt-1">9,400 PTS</p>
                    </div>
                </div>
            </section>
            {/* END: Ranking Section */}
            {/* BEGIN: Redeem Coins Section */}
            <section className="mt-2" data-purpose="redeem-section">
                <div className="px-6 mb-0 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Redeem Coins</h2>
                    <Link className="text-city-purple text-xs font-bold uppercase tracking-wider" href="/redeem">See Rewards</Link>
                </div>
                <div className="overflow-x-auto hide-scrollbar flex gap-4 px-6 pt-10 pb-14 -mt-8" data-purpose="redeem-scroll">
                    {/* Redeem 1: Coffee Discount */}
                    <div
                        className="redeem-card relative bg-white rounded-[2rem] p-5 shrink-0 shadow-card-soft border border-black/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-city-neon/10 rounded-full"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-city-black rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-city-neon text-xl">coffee</span>
                            </div>
                            <h3 className="font-black text-city-black text-lg leading-tight uppercase">50% OFF<br />Blue Bottle
                            </h3>
                            <p className="text-[10px] font-medium text-gray-500 mt-1">Single use coupon</p>
                        </div>
                        <button
                            className="w-full bg-city-purple text-white text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">250
                            COINS</button>
                    </div>
                    {/* Redeem 2: Concert Ticket */}
                    <div
                        className="redeem-card relative bg-city-black rounded-[2rem] p-5 shrink-0 shadow-card-soft border border-white/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 line-art-overlay opacity-20"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-city-purple rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-white text-xl">confirmation_number</span>
                            </div>
                            <h3 className="font-black text-white text-lg leading-tight uppercase">Jazz Night<br />Free Entry
                            </h3>
                            <p className="text-[10px] font-medium text-gray-400 mt-1">Limited availability</p>
                        </div>
                        <button
                            className="w-full bg-city-neon text-city-black text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">500
                            COINS</button>
                    </div>
                    {/* Redeem 3: Merch Kit */}
                    <div
                        className="redeem-card relative bg-white rounded-[2rem] p-5 shrink-0 shadow-card-soft border border-black/5 flex flex-col justify-between overflow-hidden">
                        <div className="absolute -bottom-8 -left-4 w-24 h-24 bg-city-purple/5 rounded-full"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-city-neon rounded-xl flex items-center justify-center mb-3">
                                <span className="material-symbols-outlined text-city-black text-xl">apparel</span>
                            </div>
                            <h3 className="font-black text-city-black text-lg leading-tight uppercase">City Vibes<br />Art Tote
                            </h3>
                            <p className="text-[10px] font-medium text-gray-500 mt-1">Exclusively for hustlers</p>
                        </div>
                        <button
                            className="w-full bg-city-purple text-white text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest mt-4">400
                            COINS</button>
                    </div>
                </div>
            </section>
            {/* END: Redeem Coins Section */}
            {/* BEGIN: Upcoming Events */}
            <section className="mt-2" data-purpose="events-section">
                <div className="flex justify-between items-center mb-0 px-6">
                    <h2 className="text-2xl font-bold">Upcoming Events</h2>
                    <Link className="text-city-purple text-sm font-bold" href="/events">View all</Link>
                </div>
                {/* Horizontal Scrollable Container */}
                <div className="flex gap-4 overflow-x-auto px-6 pt-10 pb-14 -mt-8 hide-scrollbar snap-x snap-mandatory">
                    {/* Event Card 1: Goonj Senior Citizen Volunteering */}
                    <div className="event-tile bg-white rounded-[2.5rem] flex flex-col relative overflow-hidden shrink-0 shadow-card-soft border border-black/5 snap-start"
                        data-purpose="event-card">
                        {/* Top Half: Image */}
                        <div className="flex-1 bg-white relative overflow-hidden">
                            <img src="/events/Goonj.webp" alt="Goonj Senior Citizen Volunteering" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-6 bg-city-black text-city-neon font-black text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest z-30">
                                VOLUNTEERING
                            </div>
                            {/* Points Badge */}
                            <div className="absolute top-6 right-6 bg-city-purple/10 text-city-purple font-bold text-[11px] px-4 py-2 rounded-full border border-city-purple/5 z-30">
                                +100 points
                            </div>
                        </div>
                        {/* Bottom Half: Dark */}
                        <div className="bg-city-black p-5 sm:p-6 flex flex-col justify-between relative z-20 shrink-0">
                            <div>
                                <h3 className="text-white text-xl font-bold">Goonj Senior Citizen Volunteering</h3>
                                <p className="text-gray-400 text-[11px] font-medium mt-1">Sunday, March 15th • 10 AM</p>
                                <p className="text-gray-400 text-[11px] font-medium mt-0.5">Location: Rajiv Chowk, Delhi</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    className="bg-city-neon text-city-black text-[10px] font-black px-6 py-2.5 rounded-full hover:scale-95 transition-transform uppercase tracking-widest">REGISTER NOW</button>
                                <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-city-neon filled-icon text-xl">favorite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Event Card 2: Hyrox Delhi Volunteering */}
                    <div className="event-tile bg-white rounded-[2.5rem] flex flex-col relative overflow-hidden shrink-0 shadow-card-soft border border-black/5 snap-start"
                        data-purpose="event-card">
                        {/* Top Half: Image */}
                        <div className="flex-1 bg-white relative overflow-hidden">
                            <img src="/events/Hyrox_Delhi.jpeg" alt="Hyrox Delhi Volunteering" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-6 bg-city-black text-city-neon font-black text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest z-30">
                                FITNESS
                            </div>
                            {/* Points Badge */}
                            <div className="absolute top-6 right-6 bg-city-purple/10 text-city-purple font-bold text-[11px] px-4 py-2 rounded-full border border-city-purple/5 z-30">
                                +100 points
                            </div>
                        </div>
                        {/* Bottom Half: Dark */}
                        <div className="bg-city-black p-5 sm:p-6 flex flex-col justify-between relative z-20 shrink-0">
                            <div>
                                <h3 className="text-white text-xl font-bold">Hyrox Delhi Volunteering</h3>
                                <p className="text-gray-400 text-[11px] font-medium mt-1">Saturday, March 22nd • 8 AM</p>
                                <p className="text-gray-400 text-[11px] font-medium mt-0.5">Location: India Gate Lawns, Delhi</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    className="bg-city-neon text-city-black text-[10px] font-black px-6 py-2.5 rounded-full hover:scale-95 transition-transform uppercase tracking-widest">REGISTER NOW</button>
                                <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-city-neon filled-icon text-xl">favorite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Event Card 3: Earth_3R Trash Drive Volunteering */}
                    <div className="event-tile bg-white rounded-[2.5rem] flex flex-col relative overflow-hidden shrink-0 shadow-card-soft border border-black/5 snap-start"
                        data-purpose="event-card">
                        {/* Top Half: Image */}
                        <div className="flex-1 bg-white relative overflow-hidden">
                            <img src="/events/Earth_5R.webp" alt="Earth_3R Trash Drive Volunteering" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute bottom-4 left-6 bg-city-black text-city-neon font-black text-[10px] px-3 py-1.5 rounded-full uppercase tracking-widest z-30">
                                ENVIRONMENT
                            </div>
                            {/* Points Badge */}
                            <div className="absolute top-6 right-6 bg-city-purple/10 text-city-purple font-bold text-[11px] px-4 py-2 rounded-full border border-city-purple/5 z-30">
                                +100 points
                            </div>
                        </div>
                        {/* Bottom Half: Dark */}
                        <div className="bg-city-black p-5 sm:p-6 flex flex-col justify-between relative z-20 shrink-0">
                            <div>
                                <h3 className="text-white text-xl font-bold">Earth_3R Trash Drive Volunteering</h3>
                                <p className="text-gray-400 text-[11px] font-medium mt-1">Saturday, March 29th • 9 AM</p>
                                <p className="text-gray-400 text-[11px] font-medium mt-0.5">Location: Lodhi Garden, Delhi</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    className="bg-city-neon text-city-black text-[10px] font-black px-6 py-2.5 rounded-full hover:scale-95 transition-transform uppercase tracking-widest">REGISTER NOW</button>
                                <div className="w-11 h-11 bg-white/10 rounded-2xl flex items-center justify-center">
                                    <span className="material-symbols-outlined text-city-neon filled-icon text-xl">favorite</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END: Upcoming Events */}
            {/* BEGIN: Top Organizations */}
            <section className="mt-4 px-6 pb-8" data-purpose="organizations-section">
                <h2 className="text-2xl font-bold mb-6">Volunteer With -</h2>
                <div className="grid grid-cols-1 gap-4">
                    {/* Organization Item 1 */}
                    <div
                        className="flex items-center gap-4 p-3 bg-white/40 rounded-[2rem] border border-black/5 shadow-card-soft">
                        <div
                            className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 overflow-hidden border border-black/5">
                            <div className="w-8 h-8 border-4 border-city-neon rounded-full"></div>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Collective SF</h4>
                            <p className="text-gray-500 text-[11px] mt-0.5">Underground music and art community focused
                                on new wave.</p>
                        </div>
                    </div>
                    {/* Organization Item 2 */}
                    <div
                        className="flex items-center gap-4 p-3 bg-white/40 rounded-[2rem] border border-black/5 shadow-card-soft">
                        <div
                            className="w-16 h-16 bg-city-black rounded-2xl flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                            <span className="text-city-neon font-black italic text-xl">V</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">Vibe Checkers</h4>
                            <p className="text-gray-500 text-[11px] mt-0.5">Curating the best street food and social
                                events in the Bay.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* END: Top Organizations */}
        </main>
    );
}
