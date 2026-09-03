
"use client";

import React, { useState } from "react";

const SearchFilter = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    onFilter({
      search,
      location,
      jobType,
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-4"
    >
      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Search Job
        </label>

        <input
          type="text"
          placeholder="Frontend Developer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Location */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Location
        </label>

        <input
          type="text"
          placeholder="Dhaka, Bangladesh..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        />
      </div>

      {/* Job Type */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Job Type
        </label>

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
        >
          <option value="">All Job Types</option>
          <option value="Full Time">Full Time</option>
          <option value="Remote">Remote</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>

      {/* Button */}
      <div className="flex items-end">
        <button
          type="submit"
          className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 active:scale-[0.98]"
        >
          Search Jobs
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;

