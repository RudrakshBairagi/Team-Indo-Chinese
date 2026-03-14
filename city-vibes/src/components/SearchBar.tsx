import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = "Search for events, organizations...", className = "mt-6 px-6 shrink-0" }: SearchBarProps) {
  return (
    <section className={className}>
      <div className="relative shadow-subtle rounded-2xl">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-[#7E8392] pointer-events-none">
          <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'wght' 500" }}>search</span>
        </span>
        <input
          className="w-full bg-white/50 backdrop-blur-sm border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-city-purple transition-all placeholder-gray-600 outline-none"
          placeholder={placeholder}
          type="text"
        />
      </div>
    </section>
  );
}
