
import React from "react";

const JobCart = ({ post }) => {
  return (
    <div className=" m-5 max-w-md rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Company */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {post?.jobName}
        </h2>

        <p className="mt-1 text-sm font-medium text-gray-500">
          {post?.companyName}
        </p>
      </div>

      {/* Job Info */}
      <div className="space-y-2 text-sm text-gray-600">
        <p>📍 {post?.location}</p>
        <p>💰 {post?.salary}</p>
        <p>💼 {post?.jobType}</p>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
        {post?.description}
      </p>

      {/* Button */}
      <button className="mt-5 w-full rounded-lg bg-black px-4 py-2.5 font-medium text-white transition hover:bg-gray-800">
        View Details
      </button>

    </div>
  );
};

export default JobCart;

