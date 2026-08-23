"use client";

import React from "react";
import Link from "next/link";
import Statecart from "@/component/dashbord/Statecart";



const RecruiterPage = () => {






  return (
  <>
  

   <header className="flex h-[82px] items-center justify-between border-b border-white/10 px-5 sm:px-8 lg:px-10">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
                Recruiter Dashboard
              </h1>

              <p className="mt-1 text-sm text-[#8f9294]">
                Manage your jobs and applicants
              </p>
            </div>
             
             <Link href="/dashbord/recruiter/jobs/new" className="rounded-xl bg-[#5C53FE] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4f46e5]">
             creat a new Job
             </Link>
            
          </header>
          <hr></hr>



          <Statecart></Statecart>
  </>

  )
    
};
export default RecruiterPage;