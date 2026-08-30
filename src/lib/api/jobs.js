const baseurl= process.env.NEXT_PUBLIC_SERVER_URL;

export const getCompanyJob =async (companyId, status ='active') =>{

  const res = await fetch(`${baseurl}/api/job?companyId=${companyId}`);
  return res.json();

}