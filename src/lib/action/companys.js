'use server'

import { serverMutation } from "../core/server"

export const createCompany = async(newCompanyData)=>{
  return serverMutation('/api/company', newCompanyData);

}








// const baseurl= process.env.NEXT_PUBLIC_SERVER_URL;

// export const createCompany = async (newCompanyData) =>{
//   const res = await fetch( `${baseurl}/api/company`,{
//     method:'post',
//     headers :{
//       'Content-Type':'application/json',

//     },
//     body : JSON.stringify(newCompanyData),
//   });

//   return res.json();
  
  
// }