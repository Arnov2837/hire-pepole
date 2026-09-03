"use client";

import React, { useState } from "react";
import JobCard from "@/component/jobs/JobCart";
import SearchFilter from "@/component/jobs/SearchFilter";

const AllJobsClient = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const onFilter = ({ search, location, jobType }) => {
    console.log(onFilter);
    
  const result = posts.filter((post) => {
    const matchSearch = post.jobName
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchLocation = post.location
      ?.toLowerCase()
      .includes(location.toLowerCase());

    const matchJobType =
      jobType === "" || post.jobType === jobType;

    return matchSearch && matchLocation && matchJobType;
  });

  setFilteredPosts(result);
};

  return (
    <div>
      <SearchFilter onFilter={onFilter} />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <JobCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllJobsClient;