import JobCard from '@/component/jobs/JobCart';
import { allPost } from '@/lib/api/companys';
import React from 'react';

const AllBrowseJob =async () => {
const posts = await allPost();
console.log("allpost paici",posts);


  return (
    <div className=" grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
  {posts.map((post) => (
    <JobCard key={post._id} post={post} />
  ))}
</div>
  );
};

export default AllBrowseJob;