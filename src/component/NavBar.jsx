"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bars, Xmark,PersonFill } from "@gravity-ui/icons";
import logo from "@/app/asset/images/logo.png";
import { useSession, signOut } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const router = useRouter();

  const {data:session,isPending} = useSession();
  // console.log(session,isPending);
  
  const user = session?.user;
  // console.log("ki hoi daki",user);
  //  const handelSignOut =async () =>{
  //   await authClient.signOut();
 

  // }
  
  const handelSignOut = async () => {
  try {
    await signOut();
  } catch (error) {
    console.error("Sign out error:", error);
    redirect("/")
  }
};

  return (
    <header className="w-full px-3 sm:px-5 lg:px-6 pt-3">
      <nav className="relative flex w-full items-center justify-between rounded-2xl bg-[#222222] px-4 py-3 sm:px-5 lg:px-[26px]">

        {/* Logo */}
        <div className="relative h-[44px] w-[154px]">
  <Image
    src={logo}
    alt="Hireloop"
    fill
    className="object-contain object-left"
  />
</div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center rounded-2xl bg-[#222222] pl-8 pr-2 py-2">

          {/* Links */}
          <div className="flex items-center gap-10 text-center font-['Geist'] text-[16px] font-normal tracking-[-0.2px] text-white">
            <Link
              href="/jobs"
              className="transition-colors hover:text-[#5C53FE]"
            >
              Browse Jobs
            </Link>

            <Link
              href="#company"
              className="transition-colors hover:text-[#5C53FE]"
            >
              Company
            </Link>

            <Link
              href="#pricing"
              className="transition-colors hover:text-[#5C53FE]"
            >
              Pricing
            </Link>
          </div>

          {/* Divider */}
          <div className="mx-5 h-6 w-px bg-white/20" />

          {/* Buttons */}
          {user ? <>
  {/* Profile */}
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4f6] text-[#111827]">
      <PersonFill></PersonFill>
    </div>

    <div className="hidden sm:block">
      <p className="text-sm font-bold text-[#d7dce6]">
        {user.name}
      </p>
     
    </div>

     {/* Sign Out */}
  <Button variant="danger" onClick={handelSignOut}>
        Sign Out
      </Button>

  </div>

  
</>:
            <div className="flex items-center gap-4">

            {/* Sign In */}
            <Link
              href="/auth/signin"
              className="rounded-xl px-6 py-4 text-[18px] font-semibold leading-[1.45] text-[#5C53FE] transition hover:bg-white/5"
            >
              Sign In
            </Link>

            {/* Get Started */}
            <Link
              href="/auth/signup"
              className="flex h-[52px] w-[143px] items-center justify-center rounded-xl border border-black/10 bg-[#5C53FE] px-6 py-4 text-[18px] font-medium leading-[1.45] text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition hover:bg-[#4f46e5]"
            >
              Get Started
            </Link>

          </div>}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? (
            <Xmark className="h-6 w-6" />
          ) : (
            <Bars className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 rounded-2xl bg-[#222222] p-4 shadow-2xl lg:hidden">

            {/* Links */}
            <div className="flex flex-col gap-1">

              <Link
                href="#jobs"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-[16px] text-white transition hover:bg-white/5 hover:text-[#5C53FE]"
              >
                Browse Jobs
              </Link>

              <Link
                href="#company"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-[16px] text-white transition hover:bg-white/5 hover:text-[#5C53FE]"
              >
                Company
              </Link>

              <Link
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-[16px] text-white transition hover:bg-white/5 hover:text-[#5C53FE]"
              >
                Pricing
              </Link>

            </div>

            {/* Mobile Divider */}
            <div className="my-3 h-px bg-white/10" />

            {/* Mobile Buttons */}
            {user ?<>
            <div className="flex w-full items-center gap-2 sm:gap-3">
  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f3f4f6] text-[#111827] sm:h-10 sm:w-10">
    <PersonFill />
  </div>

  <div className=" min-w-0 sm:block">
    <p className="truncate text-xs font-bold text-[#d7dce6] sm:text-sm">
      {user.name}
    </p>
  </div>

  {/* Sign Out */}
  <Button
    variant="danger"
    onClick={handelSignOut}
    className="ml-auto shrink-0 px-3 py-2 text-xs sm:px-4 sm:text-sm"
  >
    Sign Out
  </Button>
</div>

            </>:
              <div className="flex flex-col gap-2">

              <Link
                href="/auth/signin"
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-center text-[16px] font-semibold text-[#5C53FE] transition hover:bg-white/5"
              >
                Sign In
              </Link>

              <Link
                href="/auth/signup"
                onClick={() => setIsOpen(false)}
                className="flex h-[50px] items-center justify-center rounded-xl bg-[#5C53FE] text-[16px] font-medium text-white shadow-[inset_0_3px_10px_rgba(255,255,255,0.2)] transition hover:bg-[#4f46e5]"
              >
                Get Started
              </Link>

            </div>}
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;