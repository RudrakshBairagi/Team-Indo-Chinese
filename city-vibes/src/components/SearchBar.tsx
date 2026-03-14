import React from 'react';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBar({ placeholder = "Search for events, organizations...", className = "mt-6 px-6 shrink-0" }: SearchBarProps) {
  return (
    <section className={className}>
      <div className="relative shadow-input-soft rounded-2xl bg-white">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </span>
        <input
          className="w-full bg-transparent border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-city-purple transition-all placeholder-gray-400 outline-none"
          placeholder={placeholder}
          type="text"
        />
      </div>
    </section>
  );
}

