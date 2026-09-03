import { serverFetch } from "../core/server"



export const applycation =async (userId)=>{
  return serverFetch(`/api/applycation?userId=${userId}`);
}