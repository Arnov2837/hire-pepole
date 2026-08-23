"use client"

import { useSession } from "@/lib/auth-client";

import {
  Cloud,
  PersonFill,
  Check,
} from "@gravity-ui/icons";

const Statecart = () => {

const {data:session, isPending} = useSession();
      if(isPending){
        return<div>loding...</div>
      }

    const user = session?.user;
    console.log(user);






  return (
    <div>
       {/* Dashboard Content */}
          <section className="px-5 py-7 sm:px-8 lg:px-10">

            {/* Welcome */}
            <div className="mb-7">
              <h2 className="text-2xl font-semibold text-black">
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
                   <Cloud  className="h-5 w-5 text-[#d7d9da]" /> 
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
                 < Cloud className="h-5 w-5 text-[#d7d9da]" /> 
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
    </div>
  );
};

export default Statecart;