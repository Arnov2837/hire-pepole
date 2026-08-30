"use client";

import React, { useState } from "react";
import { createJob } from "@/lib/action/jobs";
import { toast } from "@heroui/react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const JobForm = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [formData, setFormData] = useState({
    jobName: "",
    companyName: "",
    location: "",
    title: "",
    description: "",
    salary: "",
    jobType: "",
    workMode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      ...formData,
      companyId: session?.user?.id,
      status: "active",
    };

    console.log("Job Data:", jobData);

    try {
      const res = await createJob(jobData);

      console.log("Create Job Response:", res);

      if (res?.insertedId) {
        toast.success("Job posted successfully");

        router.push("/dashbord/recruiter");
      }
    } catch (error) {
      console.error("Create job error:", error);

      toast.error("Failed to create job");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-7 max-w-2xl rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
    >
      {/* Header */}
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-gray-900">
          Create New Job
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Fill in the details below to publish your job.
        </p>
      </div>

      <div className="space-y-5">

        {/* Job Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Job Name
          </label>

          <input
            name="jobName"
            required
            placeholder="e.g. Frontend Developer"
            value={formData.jobName}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Company Name
          </label>

          <input
            name="companyName"
            required
            placeholder="e.g. HireLoop"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Location
          </label>

          <input
            name="location"
            required
            placeholder="e.g. Riyadh, Saudi Arabia"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Job Title */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Job Title
          </label>

          <input
            name="title"
            required
            placeholder="e.g. Senior Frontend Engineer"
            value={formData.title}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Job Description
          </label>

          <textarea
            name="description"
            required
            placeholder="Describe the job responsibilities..."
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Salary
          </label>

          <input
            name="salary"
            type="number"
            min="0"
            required
            placeholder="e.g. 5000"
            value={formData.salary}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-black"
          />
        </div>

        {/* Job Type + Work Mode */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {/* Job Type */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Job Type
            </label>

            <select
              name="jobType"
              required
              value={formData.jobType}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
            >
              <option value="">Select Job Type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* Work Mode */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Work Mode
            </label>

            <select
              name="workMode"
              required
              value={formData.workMode}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-black"
            >
              <option value="">Select Work Mode</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white hover:bg-gray-800"
      >
        Post Job
      </button>
    </form>
  );
};

export default JobForm;