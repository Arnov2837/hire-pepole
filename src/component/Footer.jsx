"use client";

import React from "react";
import Image from "next/image";
import logo from "@/app/asset/images/logo.png";

import {
  LogoFacebook,
  LogoGithub,
  LogoLinkedin,
} from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-[#050507] px-5 py-10 shadow-2xl shadow-black/20 sm:px-8 lg:px-[60px]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#5C53FE]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]" />

      {/* Main Footer */}
      <div className="relative flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">

        {/* Logo + Description */}
        <div className="w-full max-w-[288px]">

          <div className="relative h-[44px] w-[154px]">
  <Image
    src={logo}
    alt="Hireloop"
    fill
    className="object-contain object-left"
  />
</div>

          <p className="mt-6 font-['Manrope'] text-[16px] font-normal leading-[1.9] text-white/45">
            The AI-native career platform. Built for people who take their
            work seriously.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 lg:max-w-[632px] lg:gap-[72px]">

          {/* Product */}
          <div>
            <h3 className="bg-gradient-to-r from-[#8B85FF] to-[#5C53FE] bg-clip-text font-['Inter_Tight'] text-[18px] font-semibold leading-[1.4] text-transparent">
              Product
            </h3>

            <div className="mt-6 flex flex-col gap-2.5 font-['Manrope'] text-[16px] leading-[1.9] text-[#D0D5DD]">

              <a
                href="#jobs"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Job discovery
              </a>

              <a
                href="#worker-ai"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Worker AI
              </a>

              <a
                href="#companies"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Companies
              </a>

              <a
                href="#salary"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Salary data
              </a>

            </div>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="bg-gradient-to-r from-[#8B85FF] to-[#5C53FE] bg-clip-text font-['Inter_Tight'] text-[18px] font-semibold leading-[1.4] text-transparent">
              Navigations
            </h3>

            <div className="mt-6 flex flex-col gap-2.5 font-['Manrope'] text-[16px] leading-[1.9] text-[#D0D5DD]">

              <a
                href="#help"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Help center
              </a>

              <a
                href="#career"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Career library
              </a>

              <a
                href="#contact"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="bg-gradient-to-r from-[#8B85FF] to-[#5C53FE] bg-clip-text font-['Inter_Tight'] text-[18px] font-semibold leading-[1.4] text-transparent">
              Resources
            </h3>

            <div className="mt-6 flex flex-col gap-2.5 font-['Manrope'] text-[16px] leading-[1.9] text-[#D0D5DD]">

              <a
                href="#brand"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Brand Guideline
              </a>

              <a
                href="#newsroom"
                className="w-fit opacity-65 transition-all duration-300 hover:translate-x-1 hover:text-white hover:opacity-100"
              >
                Newsroom
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="relative mt-16 border-t border-white/[0.07] pt-8">

        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

          
         {/* Social Icons */}
      <div className="flex items-center gap-2.5">

  {/* Facebook */}
  <a
    href="#facebook"
    aria-label="Facebook"
    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#5C53FE]/40 hover:bg-[#5C53FE]/10 hover:text-white hover:shadow-lg hover:shadow-[#5C53FE]/10"
  >
    <LogoFacebook
      size={20}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>

  {/* GitHub */}
  <a
    href="#github"
    aria-label="GitHub"
    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-[#5C53FE]/30 bg-gradient-to-br from-[#5C53FE] to-[#7C3AED] text-white shadow-lg shadow-[#5C53FE]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#5C53FE]/30"
  >
    <LogoGithub
      size={20}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>

  {/* LinkedIn */}
  <a
    href="#linkedin"
    aria-label="LinkedIn"
    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#5C53FE]/40 hover:bg-[#5C53FE]/10 hover:text-white hover:shadow-lg hover:shadow-[#5C53FE]/10"
  >
    <LogoLinkedin
      size={20}
      className="transition-transform duration-300 group-hover:scale-110"
    />
  </a>

</div>

          {/* Copyright */}
          <div className="flex flex-col gap-3 font-['Manrope'] text-[14px] leading-[1.9] text-[#ACABB2] sm:flex-row sm:items-center sm:gap-6 sm:text-[16px]">

            <p className="opacity-60">
              Copyright 2026 — HirePeople
            </p>

            <p className="opacity-80">
              Terms & Policy - Privacy Guideline
            </p>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;