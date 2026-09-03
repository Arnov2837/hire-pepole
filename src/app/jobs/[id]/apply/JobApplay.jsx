
"use client";

import { jobApplycation } from "@/lib/action/companys";
import React, { useState } from "react";

const JobApplay = ({ job, applycent }) => {
  const [loading, setLoading] = useState(false);
console.log("koire applay ar jo no user id",applycent);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    // Form data
    const formData = {
      phone: form.phone.value,
      location: form.location.value,
      resume: form.resume.value,
      experience: form.experience.value,
      coverLetter: form.coverLetter.value,
      expectedSalary: form.expectedSalary.value,

      // Applicant/User data
      
        userId: applycent?.id,
        name: applycent?.name,
        email: applycent?.email,
      

      // Job data
      
        jobId: job?._id,
        title: job?.title,
        companyName: job?.companyName,
        companyId: job?.companyId,
      

      // Application status
      status: "pending",

      // Application date
      appliedAt: new Date(),
    };

    console.log("Application Data:", formData);

    
    
       try {
               const res = await jobApplycation(formData);
         
               console.log("Create company Response:", res);
         
               if (res?.insertedId) {
                 
               alert("applay hoia gece")
               window.location.reload();
                 
               }
             } catch (error) {
               console.error("Create company error:", error);
         
               toast.error("Failed to create company");
             }const data = await res.json();


         console.log("pic paici",data);



    // try {
    //   const res = await fetch("http://localhost:5000/api/applications", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await res.json();

    //   console.log("Application Response:", data);

    //   if (res.ok) {
    //     alert("Application submitted successfully!");
    //     form.reset();
    //   } else {
    //     alert(data?.message || "Application failed");
    //   }
    // } catch (error) {
    //   console.error("Application submit error:", error);
    //   alert("Something went wrong!");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Job Information */}
        <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm">
          <p className="mb-2 text-sm font-medium text-blue-600">
            Applying for
          </p>

          <h1 className="text-2xl font-bold text-gray-800 md:text-3xl">
            {job?.title}
          </h1>

          {job?.companyName && (
            <p className="mt-2 text-gray-500">
              {job.companyName}
            </p>
          )}
        </div>

        {/* Application Form */}
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Job Application
            </h2>

            <p className="mt-2 text-gray-500">
              Please provide your information to apply for this position.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your mail"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  
                />
              </div>

            </div>

            {/* Phone + Location */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Current Location
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="City, Country"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>

            {/* Resume */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Resume / CV Link
              </label>

              <input
                type="url"
                name="resume"
                placeholder="https://example.com/my-resume.pdf"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                
              />

              <p className="mt-2 text-xs text-gray-400">
                Paste a publicly accessible link to your resume.
              </p>
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Work Experience
              </label>

              <select
                name="experience"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              >
                <option value="">Select your experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-2">1 - 2 Years</option>
                <option value="3-5">3 - 5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Cover Letter
              </label>

              <textarea
                name="coverLetter"
                rows="7"
                placeholder="Tell the recruiter why you are a good fit for this job..."
                className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                
              />
            </div>

            {/* Expected Salary */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Expected Salary
              </label>

              <input
                type="text"
                name="expectedSalary"
                placeholder="Example: 50,000 BDT"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Submit */}
            <div className="border-t border-gray-100 pt-6">

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                By submitting this application, you agree to provide accurate
                information.
              </p>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplay;

