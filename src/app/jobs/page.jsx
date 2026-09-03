import { allPost } from "@/lib/api/companys";
import AllJobsClient from "@/component/jobs/AllJobsClient";


const AllBrowseJob = async () => {
  const posts = await allPost();

  return (
  <AllJobsClient posts={posts} />
);
};

export default AllBrowseJob;