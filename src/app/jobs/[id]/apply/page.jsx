import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import React from "react";
import JobApplay from "./JobApplay";
import { postId } from "@/lib/api/companys";
import { applycation } from "@/lib/api/applycation";

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
  


  const job = await postId(id);
  console.log("koire job", job,user);
  

  return (

   <>
    <h2> you have applayed:{getapplycation.length} out of 3</h2>
    <JobApplay applycent={user} job={job}></JobApplay>
   </>


  );
};

export default ApplyPage;