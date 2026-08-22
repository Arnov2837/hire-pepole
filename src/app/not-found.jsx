"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-[#050507] px-5 py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5C53FE]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-20 top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-indigo-500/10 blur-[90px]" />

      {/* Content */}
      <section className="relative z-10 w-full max-w-[700px] text-center">

        {/* Small Badge */}
        <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#6C63FF]" />

          <span className="font-['Manrope'] text-sm font-medium text-white/60">
            PAGE NOT FOUND
          </span>
        </div>

        {/* 404 */}
        <h1 className="select-none font-['Inter_Tight'] text-[110px] font-bold leading-none tracking-[-0.07em] text-white sm:text-[150px] md:text-[190px]">

          <span className="bg-gradient-to-r from-[#8B85FF] via-[#5C53FE] to-[#7C3AED] bg-clip-text text-transparent">
            4
          </span>

          <span className="text-white/[0.08]">
            0
          </span>

          <span className="bg-gradient-to-r from-[#7C3AED] to-[#5C53FE] bg-clip-text text-transparent">
            4
          </span>

        </h1>

        {/* Heading */}
        <h2 className="mt-5 font-['Inter_Tight'] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Looks like you took a wrong turn.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-[500px] font-['Manrope'] text-base leading-8 text-white/45 sm:text-lg">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry, let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* Home */}
          <Link
            href="/"
            className="group flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5C53FE] to-[#7C3AED] px-7 font-['Manrope'] text-sm font-semibold text-white shadow-lg shadow-[#5C53FE]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5C53FE]/30"
          >
            Back to Home

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="h-12 rounded-xl border border-white/[0.08] bg-white/[0.035] px-7 font-['Manrope'] text-sm font-semibold text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07] hover:text-white"
          >
            Go Back
          </button>

        </div>

        {/* Bottom Hint */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-white/25">
          <div className="h-px w-12 bg-white/[0.08]" />

          <span>Hireloop</span>

          <div className="h-px w-12 bg-white/[0.08]" />
        </div>

      </section>
    </main>
  );
};

export default NotFound;