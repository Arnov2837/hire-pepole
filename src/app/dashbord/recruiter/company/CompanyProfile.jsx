"use client";

import React, { useState } from "react";
import { Xmark } from "@gravity-ui/icons";
import { createCompany } from "@/lib/action/companys";




const CompanyProfile = ({recruiter, recruiterCompany}) => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    phone: "",
    location: "",
    website: "",
    description: "",
    profileImage: "",
    companyId: recruiter.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Profile image
  const handleImageChange = async (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const imageData = new FormData();
  imageData.append("image", file);

  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: imageData,
      }
    );

    const data = await res.json();
    console.log("pic paici",data);
    
      
    if (data.success) {
      setFormData({
        ...formData,
        profileImage: data.data.url,
      });

      console.log("Image URL:", data.data.url);
    }
  } catch (error) {
    console.error("Image upload failed:", error);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Company Data:", formData);
    
     try {
          const res = await createCompany(formData);
    
          console.log("Create company Response:", res);
    
          if (res?.insertedId) {
            
          alert("parci")
          window.location.reload();
            
          }
        } catch (error) {
          console.error("Create company error:", error);
    
          toast.error("Failed to create company");
        }

    // পরে এখানে API call কর
  };

  return (
   <>
           {recruiterCompany?<>
<div className="mx-auto max-w-4xl">
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8">

    {/* Header */}
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">

        {/* Company Logo */}
        {recruiterCompany.profileImage ? (
          <img
            src={recruiterCompany.profileImage}
            alt={recruiterCompany.companyName}
            className="h-20 w-20 rounded-xl object-cover ring-1 ring-gray-200"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100 text-2xl font-bold text-gray-400">
            {recruiterCompany.companyName?.charAt(0)}
          </div>
        )}

        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {recruiterCompany.companyName}
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            {recruiterCompany.location}
          </p>
        </div>
      </div>
                  {/* eidet kora baki ace akhono */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
      >
        Edit Profile
      </button>
    </div>

    {/* Divider */}
    <div className="my-6 border-t border-gray-100" />

    {/* Information */}
    <h2 className="text-lg font-bold text-gray-900">
      Company Information
    </h2>

    <div className="mt-4 grid gap-3 sm:grid-cols-2">

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-xs text-gray-400">Email</p>
        <p className="mt-1 break-all text-sm font-semibold text-gray-800">
          {recruiterCompany.companyEmail}
        </p>
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-xs text-gray-400">Phone</p>
        <p className="mt-1 text-sm font-semibold text-gray-800">
          {recruiterCompany.phone || "Not provided"}
        </p>
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-xs text-gray-400">Location</p>
        <p className="mt-1 text-sm font-semibold text-gray-800">
          {recruiterCompany.location}
        </p>
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <p className="text-xs text-gray-400">Website</p>

        {recruiterCompany.website ? (
          <a
            href={recruiterCompany.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block truncate text-sm font-semibold text-blue-600 hover:underline"
          >
            {recruiterCompany.website}
          </a>
        ) : (
          <p className="mt-1 text-sm text-gray-400">
            Not provided
          </p>
        )}
      </div>
    </div>

    {/* About */}
    <div className="mt-6">
      <h2 className="text-lg font-bold text-gray-900">
        About Company
      </h2>

      <p className="mt-3 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">
        {recruiterCompany.description || "No company description available."}
      </p>
    </div>

  </div>
</div>
           
           </>:


              <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Main */}
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900">
            Create a Company
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Register your company and start posting jobs.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Create a Company
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-5 sm:px-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Register Company
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter your company information
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
              >
                <Xmark size={18} />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 px-6 py-6 sm:px-8"
            >
              {/* ================= PROFILE IMAGE ================= */}
              <div className="flex flex-col items-center">
                <label className="mb-3 block text-sm font-medium text-gray-700">
                  Company Profile Image
                </label>

                {/* Image Preview */}
                {formData.profileImage ? (
                  <img
                    src={formData.profileImage}
                    alt="Company Profile"
                    className="mb-4 h-24 w-24 rounded-full object-cover ring-4 ring-gray-100"
                  />
                ) : (
                  <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 text-xs text-gray-400 ring-4 ring-gray-50">
                    No Image
                  </div>
                )}

                {/* Image Input */}
                <label className="cursor-pointer rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                  Choose Image

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Company Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Company Email
                </label>

                <input
                  type="email"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleChange}
                  placeholder="company@example.com"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 5XXXXXXXX"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Riyadh, Saudi Arabia"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* Website */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Website
                </label>

                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Company Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell us about your company..."
                  rows={5}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 border-t pt-5">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Register Company
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
               </div>

           }
           
    </>


  );
};

export default CompanyProfile;