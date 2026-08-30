import React from 'react';
import JobForm from './JobFrom';
import { getLogInCompany } from '@/lib/api/companys';

const CreateJob = async() => {

   const company= await getLogInCompany();

  return (
    <div>
      <JobForm company={company}></JobForm>
    </div>
  );
};

export default CreateJob;