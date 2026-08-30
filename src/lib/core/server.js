'use server'


const baseurl= process.env.NEXT_PUBLIC_SERVER_URL;



export const serverFetch = async(path)=>{
  const res = await fetch(`${baseurl}${path}`);
  return res.json();

}







export const serverMutation = async (path, data) =>{
  const res = await fetch( `${baseurl}${path}`,{
    method:'post',
    headers :{
      'Content-Type':'application/json',

    },
    body : JSON.stringify(data),
  });

  return res.json();
  
  
}