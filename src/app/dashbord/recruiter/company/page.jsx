import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getUserSession } from '@/lib/core/session';
import { getRecruiterCompany } from '@/lib/api/companys';

const CompanyPage =async () => {

  const user = await getUserSession();
  const company = await getRecruiterCompany(user.id);
  console.log("parcire",user,);
  console.log(company);
  
  


  return (
    <div>
      <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
    </div>
  );
};

export default CompanyPage;