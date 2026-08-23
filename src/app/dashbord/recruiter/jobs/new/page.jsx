"use client";

import Error from "next/error";
import React, { useState } from "react";

const JobForm = () => {
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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const jobData = Object.fromEntries(formData.entries());

    console.log("Job Data:", jobData);
    
  };






  return (
  
   <form
  onSubmit={handleSubmit}
  className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-10 py-7 my-7 shadow-sm sm:p-7"
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
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Job Name
      </label>

      <input
        name="jobName"
        required
        placeholder="e.g. Frontend Developer"
        value={formData.jobName}
        onChange={handleChange}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
          ${
            Error.jobName
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
          }`}
      />

      {Error.jobName && (
        <p className="mt-1.5 text-xs text-red-500">
          {errors.jobName}
        </p>
      )}
    </div>

    {/* Company Name */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Company Name
      </label>

      <input
        name="companyName"
        placeholder="e.g. HireLoop"
        value={formData.companyName}
        onChange={handleChange}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
          ${
            Error.companyName
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
          }`}
      />

      {Error.companyName && (
        <p className="mt-1.5 text-xs text-red-500">
          {Error.companyName}
        </p>
      )}
    </div>

    {/* Location */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Location
      </label>

      <input
        name="location"
        placeholder="e.g. Riyadh, Saudi Arabia"
        value={formData.location}
        onChange={handleChange}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
          ${
            Error.location
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
          }`}
      />

      {Error.location && (
        <p className="mt-1.5 text-xs text-red-500">
          {Error.location}
        </p>
      )}
    </div>

    {/* Job Title */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Job Title
      </label>

      <input
        name="title"
        placeholder="e.g. Senior Frontend Engineer"
        value={formData.title}
        onChange={handleChange}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
          ${
            Error.title
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
          }`}
      />

      {Error.title && (
        <p className="mt-1.5 text-xs text-red-500">
          {Error.title}
        </p>
      )}
    </div>

    {/* Description */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Job Description
      </label>

      <textarea
        name="description"
        placeholder="Describe the job responsibilities, requirements, and role..."
        value={formData.description}
        onChange={handleChange}
        rows={6}
        className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition
          ${
            Error.description
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
          }`}
      />

      <div className="mt-1.5 flex justify-between">
        {Error.description ? (
          <p className="text-xs text-red-500">
            {Error.description}
          </p>
        ) : (
          <span />
        )}

        <span className="text-xs text-gray-400">
          {formData.description.length} characters
        </span>
      </div>
    </div>

    {/* Salary */}
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Salary
      </label>

      <input
        name="salary"
        type="number"
        min="0"
        placeholder="e.g. 5000"
        value={formData.salary}
        onChange={handleChange}
        className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition
          ${
            Error.salary
              ? "border-red-500 focus:ring-2 focus:ring-red-100"
              : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
          }`}
      />

      {Error.salary && (
        <p className="mt-1.5 text-xs text-red-500">
          {Error.salary}
        </p>
      )}
    </div>

    {/* Selects */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

      {/* Job Type */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Job Type
        </label>

        <select
          name="jobType"
          value={formData.jobType}
          onChange={handleChange}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition
            ${
              Error.jobType
                ? "border-red-500 focus:ring-2 focus:ring-red-100"
                : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
            }`}
        >
          <option value="">Select Job Type</option>
          <option value="full-time">Full Time</option>
          <option value="part-time">Part Time</option>
          <option value="internship">Internship</option>
        </select>

        {Error.jobType && (
          <p className="mt-1.5 text-xs text-red-500">
            {errors.jobType}
          </p>
        )}
      </div>

      {/* Work Mode */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Work Mode
        </label>

        <select
          name="workMode"
          value={formData.workMode}
          onChange={handleChange}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition
            ${
              Error.workMode
                ? "border-red-500 focus:ring-2 focus:ring-red-100"
                : "border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-100"
            }`}
        >
          <option value="">Select Work Mode</option>
          <option value="remote">Remote</option>
          <option value="onsite">Onsite</option>
          <option value="hybrid">Hybrid</option>
        </select>

        {Error.workMode && (
          <p className="mt-1.5 text-xs text-red-500">
            {Error.workMode}
          </p>
        )}
      </div>
    </div>
  </div>

  {/* Submit */}
  <button
    type="submit"
    className="mt-7 w-full rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
  >
    Post Job
  </button>
</form>
  );
};

export default JobForm;