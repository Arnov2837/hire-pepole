"use client";

import React from "react";
import DashBordSideBar from "@/component/dashbord/DashBordSideBar";
import {
  Briefcase,
  PersonFill,
  Check,
} from "@gravity-ui/icons";
import { useSession } from "@/lib/auth-client";

const RecruiterPage = () => {

const {data:session, isPending} = useSession();
      if(isPending){
        return<div>loding...</div>
      }

    const user = session?.user;
    console.log(user);





  return (
    <div className="min-h-screen bg-[#0d0c0c] text-white">
      <div className="flex min-h-screen">

        {/* ================= Main Content ================= */}
        <main className="min-w-0 flex-1">

          {/* Top Header */}
          <header className="flex h-[82px] items-center justify-between border-b border-white/10 px-5 sm:px-8 lg:px-10">
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Recruiter Dashboard
              </h1>

              <p className="mt-1 text-sm text-[#8f9294]">
                Manage your jobs and applicants
              </p>
            </div>

            <button className="rounded-xl bg-[#5C53FE] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4f46e5]">
              Post a Job
            </button>
          </header>

          {/* Dashboard Content */}
          <section className="px-5 py-7 sm:px-8 lg:px-10">

            {/* Welcome */}
            <div className="mb-7">
              <h2 className="text-2xl font-semibold text-white">
                Welcome back! {user.name}
              </h2>

              <p className="mt-1 text-sm text-[#8f9294]">
                {user.email}<br></br>
                Here's what's happening with your recruitment activity.
              </p>
            </div>

            {/* ================= Stats Row ================= */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 xl:grid-cols-4">

              {/* Total Job Posts */}
              <div className="flex min-h-[194px] flex-col rounded-xl border border-[#444748] bg-[#1b1b1c] p-[25px] transition hover:border-[#5C53FE]/50">

                <div className="flex h-11 w-10 items-center justify-center rounded-lg bg-[#343436]">
                  <Briefcase className="h-5 w-5 text-[#d7d9da]" />
                </div>

                <div className="mt-auto">
                  <p className="text-sm tracking-[0.14px] text-[#c4c7c8]">
                    Total Job Posts
                  </p>

                  <p className="mt-1 text-2xl font-medium leading-8 text-white">
                    48
                  </p>
                </div>
              </div>

              {/* Total Applicants */}
              <div className="flex min-h-[194px] flex-col rounded-xl border border-[#444748] bg-[#1b1b1c] p-[25px] transition hover:border-[#5C53FE]/50">

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#343436]">
                  <PersonFill className="h-5 w-5 text-[#d7d9da]" />
                </div>

                <div className="mt-auto">
                  <p className="text-sm tracking-[0.14px] text-[#c4c7c8]">
                    Total Applicants
                  </p>

                  <p className="mt-1 text-2xl font-medium leading-8 text-white">
                    1,284
                  </p>
                </div>
              </div>

              {/* Active Jobs */}
              <div className="flex min-h-[194px] flex-col rounded-xl border border-[#444748] bg-[#1b1b1c] p-[25px] transition hover:border-[#5C53FE]/50">

                <div className="flex h-11 w-10 items-center justify-center rounded-lg bg-[#343436]">
                  <Briefcase className="h-5 w-5 text-[#d7d9da]" />
                </div>

                <div className="mt-auto">
                  <p className="text-sm tracking-[0.14px] text-[#c4c7c8]">
                    Active Jobs
                  </p>

                  <p className="mt-1 text-2xl font-medium leading-8 text-white">
                    18
                  </p>
                </div>
              </div>

              {/* Jobs Closed */}
              <div className="flex min-h-[194px] flex-col rounded-xl border border-[#444748] bg-[#1b1b1c] p-[25px] transition hover:border-[#5C53FE]/50">

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#343436]">
                  <Check className="h-5 w-5 text-[#d7d9da]" />
                </div>

                <div className="mt-auto">
                  <p className="text-sm tracking-[0.14px] text-[#c4c7c8]">
                    Jobs Closed
                  </p>

                  <p className="mt-1 text-2xl font-medium leading-8 text-white">
                    32
                  </p>
                </div>
              </div>

            </div>

           
          </section>
        </main>
      </div>
    </div>
  );
};

export default RecruiterPage;