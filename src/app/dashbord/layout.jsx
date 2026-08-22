import DashBordSideBar from '@/component/dashbord/DashBordSideBar';
import React from 'react';

const Layout = ({children}) => {
  return (
    <div className="flex min-h-screen">
      <DashBordSideBar></DashBordSideBar>
      
      <div className='flex-1'>{children}</div>
      
    </div>
  );
};

export default Layout;