import { serverFetch } from "../core/server"


export const getRecruiterCompany =async (companyId)=>{
  return serverFetch(`/api/my/company?recruiterId=${companyId}`);

}

// const baseurl= process.env.NEXT_PUBLIC_SERVER_URL;

// export const getRecruiterCompany=async (recruiterId) =>{

//   const res = await fetch(`${baseurl}/api/my/company?recruiterId=${recruiterId}`);
//   return res.json();

// }