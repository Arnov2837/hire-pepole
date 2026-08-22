"use client";

import React, { useState } from "react";
import {
  Magnifier,
  GeoPin,
  Briefcase,
} from "@gravity-ui/icons";
import globalBg from "@/app/asset/images/globe.png";
import ctaBg from "@/app/asset/images/cta-bg.png";

const Header = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const trendingJobs = [
    "Product Designer",
    "AI Engineering",
    "Dev-ops Engineer",
  ];

  const handleSearch = () => {
    console.log({
      jobTitle,
      location,
    });
  };

  const stats = [
    {
      icon: "https://www.figma.com/api/mcp/asset/9bc9cc58-406c-4c9c-8e8f-d716169764f2.svg",
      value: "50K",
      label: "Active Jobs",
    },
    {
      icon: "https://www.figma.com/api/mcp/asset/7fc0c00d-1ec2-40fb-bdef-ce595dcffe42.svg",
      value: "12K",
      label: "Companies",
    },
    {
      icon: "https://www.figma.com/api/mcp/asset/f9fff5c4-22ba-4189-8bd0-27de20582c4d.svg",
      value: "2M",
      label: "Job Seekers",
    },
    {
      icon: "https://www.figma.com/api/mcp/asset/6e8fd115-9a5e-4baa-80ca-a7dfd83b1f0b.svg",
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <>
      {/* ================================
          HERO / HEADER
      ================================= */}
      <header className="relative w-full overflow-hidden bg-[#010102] px-4 pb-12 pt-2 sm:px-6 sm:pb-16 lg:px-8">

        {/* =================================
            CTA BACKGROUND
        ================================= */}
        <img
          src={ctaBg.png}
          alt=""
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-70"
        />

        {/* Dark Overlay */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#010102]/70" />

        {/* =================================
            GLOBAL IMAGE - TOP
        ================================= */}
        <img
          src={globalBg.src}
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 z-[2] h-auto w-[420px] -translate-x-1/2 opacity-70 sm:w-[560px] md:w-[700px] lg:w-[850px]"
        />

        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-[120px] z-[2] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#5C53FE]/[0.06] blur-[120px]" />

        {/* ================================
            CONTENT
        ================================= */}
        <div className="py-12 p-6 z-10">

          {/* ================================
              JOB COUNT
          ================================= */}
          <div className="relative z-10 flex justify-center">

            <div className="flex items-center gap-3 rounded-full border border-white/[0.12] bg-gradient-to-b from-[#171719] to-[#050506] px-5 py-2.5 shadow-[inset_0_0_6px_2px_rgba(0,0,0,0.25)]">

              <div className="flex h-6 w-6 items-center justify-center text-[#F59E0B]">
                <Briefcase size={22} />
              </div>

              <span className="font-mono text-[17px] font-bold tracking-wide text-white sm:text-[20px]">
                50,000+
              </span>

              <span className="font-mono text-[13px] uppercase tracking-[0.5px] text-white/45 sm:text-[16px]">
                New Jobs This Month
              </span>

            </div>

          </div>

          {/* ================================
              HERO TITLE
          ================================= */}
          <div className="relative z-10 mx-auto mt-10 max-w-[1000px] text-center sm:mt-12">

            <h1 className="font-['Manrope'] text-[42px] font-bold leading-[1.08] tracking-[-1.8px] text-white sm:text-[56px] sm:tracking-[-2px] md:text-[64px] lg:text-[58px]">
              Find Your Dream Job Today
            </h1>

            <p className="mx-auto mt-5 max-w-[780px] font-['Manrope'] text-[16px] font-normal leading-[1.6] text-white/60 sm:text-[18px] md:text-[20px]">
              HireLoop connects top talent with world-class companies.
              Browse thousands of curated opportunities and land your next
              role — faster.
            </p>

          </div>

          {/* ================================
              SEARCH AREA
          ================================= */}
          <div className="relative z-10 mx-auto mt-12 w-full max-w-[1100px]">

            <div className="flex w-full flex-col rounded-2xl border border-white/[0.18] bg-[#101010]/90 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-md sm:flex-row sm:items-center">

              {/* Job Search */}
              <div className="flex min-h-[56px] flex-1 items-center gap-3 px-4 sm:px-5">

                <Magnifier
                  size={23}
                  className="shrink-0 text-white"
                />

                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Job title, skill or company"
                  className="w-full bg-transparent font-['Manrope'] text-[15px] text-white outline-none placeholder:text-white/55 sm:text-[16px]"
                />

              </div>

              {/* Divider */}
              <div className="mx-4 hidden h-7 w-px bg-white/20 sm:block" />

              {/* Location */}
              <div className="flex min-h-[56px] flex-1 items-center gap-3 px-4 sm:px-5">

                <GeoPin
                  size={23}
                  className="shrink-0 text-white"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location or Remote"
                  className="w-full bg-transparent font-['Manrope'] text-[15px] text-white outline-none placeholder:text-white/55 sm:text-[16px]"
                />

              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                aria-label="Search jobs"
                className="flex h-[56px] w-full items-center justify-center rounded-xl bg-[#5C53FE] text-white transition-all duration-300 hover:bg-[#6C63FF] hover:shadow-lg hover:shadow-[#5C53FE]/30 active:scale-[0.98] sm:w-[56px]"
              >
                <Magnifier size={25} />
              </button>

            </div>

            {/* ================================
                TRENDING JOBS
            ================================= */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">

              <span className="mr-1 font-['Manrope'] text-[14px] text-white/55 sm:text-[16px]">
                Trending Position
              </span>

              {trendingJobs.map((job) => (
                <button
                  key={job}
                  onClick={() => setJobTitle(job)}
                  className="rounded-full border border-white/[0.1] bg-[#1A1A1B]/90 px-3 py-1.5 font-['Manrope'] text-[13px] text-white/85 transition-all duration-300 hover:border-[#5C53FE]/40 hover:bg-[#5C53FE]/10 hover:text-white sm:text-[14px]"
                >
                  {job}
                </button>
              ))}

            </div>

          </div>

        </div>

         
      {/* ================================
          STATS SECTION
      ================================= */}

        <div className="relative z-10 p-20 mx-auto w-full max-w-[1200px]">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-[600px] text-center sm:mb-12">

            <p className="font-['Manrope'] text-[28px] font-medium leading-[1.3] tracking-[-1px] text-white/70 sm:text-[34px] md:text-[40px]">
              Assisting over{" "}
              <span className="text-white">
                15,000 job seekers
              </span>{" "}
              find their dream positions.
            </p>

          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group flex min-h-[180px] flex-col justify-between rounded-2xl border border-white/[0.10] bg-gradient-to-b from-[#010102] from-[12%] to-[#313131] to-[177%] p-6 transition-all duration-300 hover:-translate-y-[2px] hover:border-white/[0.18]"
              >

                {/* Icon */}
                <div className="h-6 w-6 overflow-hidden">

                  <img
                    src={stat.icon}
                    alt=""
                    className="block h-full w-full object-contain"
                  />

                </div>

                {/* Content */}
                <div className="mt-10">

                  <h3 className="font-['Plus_Jakarta_Sans'] text-[46px] font-semibold leading-[1.15] tracking-[-1.5px] text-white sm:text-[50px] md:text-[56px]">
                    {stat.value}
                  </h3>

                  <p className="mt-3 font-['Inter_Tight'] text-[16px] leading-[1.65] text-white sm:text-[18px]">
                    {stat.label}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </header>

      
    </>
  );
};

export default Header;