import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";
import JobApplay from "./JobApplay";
import { postId } from "@/lib/api/companys";
import { applycation } from "@/lib/api/applycation";
import Link from "next/link";

const ApplyPage = async ({ params }) => {
  const { id } = await params;

  const user = await getUserSession();
  // console.log("user paitaci akhane", user);
  

  if (!user) {
    redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
  }

  console.log(user);

  if (user.role !== "on") {
    return (
       <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-2xl rounded-2xl border border-red-200 bg-white p-10 text-center shadow-lg">

        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <span className="text-4xl">⚠️</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Job Seeker Only
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-lg leading-7 text-gray-500">
          Only job seekers can apply for jobs. Please login with a
          job seeker account to continue.
        </p>

        <div className="mt-8 rounded-xl bg-red-50 px-6 py-4">
          <p className="text-base font-medium text-red-600">
            You are not eligible to apply for this job.
          </p>
        </div>

      </div>
    </div>
    );
  }

  const getapplycation = await applycation(user.id);
  console.log("akhane kichu hoitace", getapplycation);
  
 const plane ={
      plan:'free',
      forapplaymax:'3'
 };

  const job = await postId(id);
  console.log("koire job", job,user);
  

  return (

   <>
   <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-5 shadow-sm">
  <div className="flex items-center justify-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-xl">
      ⚠️
    </div>

    <h2 className="text-lg font-semibold text-red-700">
      Application Usage
    </h2>
  </div>

  <p className="mt-3 text-center text-sm text-red-600">
    You have applied{" "}
    <span className="font-bold text-red-700">
      {getapplycation.length}
    </span>{" "}
    out of{" "}
    <span className="font-bold text-red-700">
      {plane.forapplaymax}
    </span>{" "}
    free applications.
  </p>

  {getapplycation.length >= plane.forapplaymax && (
    <div className="mt-4 rounded-xl border border-red-300 bg-red-100 px-4 py-3 text-center">
      <p className="font-bold text-red-700">
        🚫 Your free applications are finished!
      </p>
      <p className="mt-1 text-sm text-red-600">
        Please upgrade your plan to apply for more jobs.
      </p>
      <Link href="/plane" className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md" > 🚀 Upgrade Your Plan </Link>
    </div>
    
  )}
</div>
    
    
      { getapplycation.length<plane.forapplaymax &&(
        <JobApplay applycent={user} job={job}></JobApplay>)}
   </>


  );
};

export default ApplyPage;