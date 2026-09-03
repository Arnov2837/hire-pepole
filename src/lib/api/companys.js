import { serverFetch } from "../core/server"
import { getUserSession } from "../core/session";


export const getRecruiterCompany =async (companyId)=>{
  return serverFetch(`/api/my/company?recruiterId=${companyId}`);

}

export const allPost = async () =>{
  return serverFetch(`/api/job`);
}

export const postId = async(jobId)=>{
  return serverFetch(`/api/job/${jobId}`);
}


export const getLogInCompany = async()=>{
    const user = await getUserSession();
    return getRecruiterCompany(user?.id);
}



// const baseurl= process.env.NEXT_PUBLIC_SERVER_URL;

// export const getRecruiterCompany=async (recruiterId) =>{

//   const res = await fetch(`${baseurl}/api/my/company?recruiterId=${recruiterId}`);
//   return res.json();

// }