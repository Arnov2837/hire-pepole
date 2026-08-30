"use client";

import React, { useEffect, useState } from "react";
import {
  getCompanyJob,
  updateJob,
  deleteJob,
} from "@/lib/api/jobs";

import { useSession } from "@/lib/auth-client";

const RecruiterJobPost = () => {
  const { data: session } = useSession();

  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const companyId = session?.user?.id;

  // =========================
  // LOAD JOBS
  // =========================

  useEffect(() => {
    if (!companyId) return;

    const loadJobs = async () => {
      try {
        const data = await getCompanyJob(companyId);

        console.log("Company Jobs:", data);

        setJobs(data);
      } catch (error) {
        console.error("Job Load Error:", error);
      }
    };

    loadJobs();
  }, [companyId]);

  // =========================
  // DELETE
  // =========================

  // const handleDelete = async (id) => {
  //   const confirmDelete = confirm(
  //     "Are you sure you want to delete this job?"
  //   );

  //   if (!confirmDelete) return;

  //   try {
  //     await deleteJob(id);

  //     setJobs((prevJobs) =>
  //       prevJobs.filter((job) => job._id !== id)
  //     );
  //   } catch (error) {
  //     console.error("Delete Error:", error);
  //   }
  // };

  // =========================
  // EDIT
  // =========================

  // const handleEdit = (job) => {
  //   setEditingJob({ ...job });
  // };

  // =========================
  // UPDATE
  // =========================

  // const handleUpdate = async () => {
  //   try {
  //     const { _id, ...jobData } = editingJob;

  //     await updateJob(_id, jobData);

  //     setJobs((prevJobs) =>
  //       prevJobs.map((job) =>
  //         job._id === _id ? editingJob : job
  //       )
  //     );

  //     setEditingJob(null);
  //   } catch (error) {
  //     console.error("Update Error:", error);
  //   }
  // };

  return (
    <div className="p-4 sm:p-6">

      {/* =========================
          HEADER
      ========================= */}

      <div className="mb-5">
        <h1 className="text-xl font-bold sm:text-2xl">
          All Job Posts
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage all your posted jobs
        </p>
      </div>


      {/* =========================
          DESKTOP TABLE
      ========================= */}

      <div className="hidden overflow-hidden rounded-xl border md:block">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead className="bg-gray-100">

              <tr>

                <th className="whitespace-nowrap px-4 py-3">
                  Job Name
                </th>

                <th className="whitespace-nowrap px-4 py-3">
                  Company
                </th>

                <th className="whitespace-nowrap px-4 py-3">
                  Salary
                </th>

                <th className="whitespace-nowrap px-4 py-3">
                  Work Mode
                </th>

                <th className="whitespace-nowrap px-4 py-3">
                  Status
                </th>

                <th className="whitespace-nowrap px-4 py-3">
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {jobs.map((job) => (

                <tr
                  key={job._id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="px-4 py-4 font-medium">
                    {job.jobName}
                  </td>

                  <td className="px-4 py-4">
                    {job.companyName}
                  </td>

                  <td className="px-4 py-4">
                    {job.salary}
                  </td>

                  <td className="px-4 py-4 capitalize">
                    {job.workMode}
                  </td>

                  <td className="px-4 py-4">

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      Active
                    </span>

                  </td>


                  {/* ACTION */}

                  <td className="px-4 py-4">

                    <div className="flex gap-2">

                      <button
                        onClick={() => handleEdit(job)}
                        className="rounded-lg bg-blue-600 px-3 py-2 text-sm text-white transition hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(job._id)}
                        className="rounded-lg bg-red-600 px-3 py-2 text-sm text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      {/* =========================
          MOBILE CARD
      ========================= */}

      <div className="space-y-4 md:hidden">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="rounded-xl border bg-white p-4 shadow-sm"
          >

            {/* Job Name */}

            <div className="mb-3">

              <p className="text-xs text-gray-500">
                Job Name
              </p>

              <h2 className="font-semibold text-gray-900">
                {job.jobName}
              </h2>

            </div>


            {/* Company */}

            <div className="mb-3">

              <p className="text-xs text-gray-500">
                Company
              </p>

              <p className="text-sm font-medium">
                {job.companyName}
              </p>

            </div>


            {/* Details */}

            <div className="grid grid-cols-2 gap-4">

              <div>

                <p className="text-xs text-gray-500">
                  Salary
                </p>

                <p className="text-sm font-medium">
                  {job.salary}
                </p>

              </div>


              <div>

                <p className="text-xs text-gray-500">
                  Work Mode
                </p>

                <p className="text-sm font-medium capitalize">
                  {job.workMode}
                </p>

              </div>

            </div>


            {/* Status */}

            <div className="mt-4">

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Active
              </span>

            </div>


            {/* Actions */}

            <div className="mt-4 flex gap-2 border-t pt-4">

              <button
                onClick={() => handleEdit(job)}
                className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(job._id)}
                className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          NO JOB
      ========================= */}

      {jobs.length === 0 && (

        <div className="rounded-xl border p-6 text-center text-gray-500">
          No job posts found.
        </div>

      )}


      {/* =========================
          EDIT MODAL
      ========================= */}

      {editingJob && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-5 shadow-xl sm:p-6">

            <h2 className="mb-5 text-xl font-bold">
              Edit Job
            </h2>


            {/* JOB NAME */}

            <input
              value={editingJob.jobName}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  jobName: e.target.value,
                })
              }
              className="mb-3 w-full rounded-lg border p-3 text-sm outline-none focus:border-black"
              placeholder="Job Name"
            />


            {/* COMPANY */}

            <input
              value={editingJob.companyName}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  companyName: e.target.value,
                })
              }
              className="mb-3 w-full rounded-lg border p-3 text-sm outline-none focus:border-black"
              placeholder="Company Name"
            />


            {/* LOCATION */}

            <input
              value={editingJob.location}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  location: e.target.value,
                })
              }
              className="mb-3 w-full rounded-lg border p-3 text-sm outline-none focus:border-black"
              placeholder="Location"
            />


            {/* SALARY */}

            <input
              value={editingJob.salary}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  salary: e.target.value,
                })
              }
              className="mb-3 w-full rounded-lg border p-3 text-sm outline-none focus:border-black"
              placeholder="Salary"
            />


            {/* TITLE */}

            <input
              value={editingJob.title}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  title: e.target.value,
                })
              }
              className="mb-3 w-full rounded-lg border p-3 text-sm outline-none focus:border-black"
              placeholder="Title"
            />


            {/* DESCRIPTION */}

            <textarea
              value={editingJob.description}
              onChange={(e) =>
                setEditingJob({
                  ...editingJob,
                  description: e.target.value,
                })
              }
              className="mb-3 w-full resize-none rounded-lg border p-3 text-sm outline-none focus:border-black"
              rows={4}
              placeholder="Description"
            />


            {/* BUTTONS */}

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">

              <button
                onClick={() => setEditingJob(null)}
                className="w-full rounded-lg border px-4 py-2.5 text-sm sm:w-auto"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="w-full rounded-lg bg-black px-4 py-2.5 text-sm text-white hover:bg-gray-800 sm:w-auto"
              >
                Update
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default RecruiterJobPost;