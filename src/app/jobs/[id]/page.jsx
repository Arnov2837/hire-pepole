import { postId } from "@/lib/api/companys";
import Link from "next/link";
import React from "react";

const JobDetailPage = async ({ params }) => {
  const { id } = await params;

  const job = await postId(id);

  console.log("Single Job:", job);

  return (
    <div className="mx-auto max-w-4xl p-4 sm:p-6">
  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

    {/* Header */}
    <div className="border-b bg-gray-50 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <p className="mb-2 text-sm font-medium text-gray-500">
            {job.companyName}
          </p>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {job.jobName}
          </h1>

          <p className="mt-2 text-gray-500">
            📍 {job.location}
          </p>
        </div>

        <span className="w-fit rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          {job.status}
        </span>
      </div>
    </div>

    {/* Job Info */}
    <div className="grid grid-cols-1 gap-4 border-b p-6 sm:grid-cols-3">

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-500">Salary</p>
        <p className="mt-1 font-semibold text-gray-900">
          ${job.salary}
        </p>
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-500">Job Type</p>
        <p className="mt-1 font-semibold text-gray-900">
          {job.jobType}
        </p>
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-sm text-gray-500">Work Mode</p>
        <p className="mt-1 font-semibold capitalize text-gray-900">
          {job.workMode}
        </p>
      </div>

    </div>

    {/* Details */}
    <div className="space-y-6 p-6 sm:p-8">

      <div>
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          Job Title
        </h2>

        <p className="leading-7 text-gray-600">
          {job.title}
        </p>
      </div>

      <div>
        <h2 className="mb-2 text-xl font-semibold text-gray-900">
          Job Description
        </h2>

        <p className="whitespace-pre-line leading-7 text-gray-600">
          {job.description}
        </p>
      </div>

    </div>

    {/* Footer */}
    <div className="border-t bg-gray-50 p-6">
      <Link
      href={`/jobs/${job._id}/apply`}
        className="w-full rounded-xl bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 sm:w-auto"
      >
        Apply Now
      </Link>
    </div>

  </div>
</div>
  );
};

export default JobDetailPage;