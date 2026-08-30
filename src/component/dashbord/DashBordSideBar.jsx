"use client"
import React from 'react';
import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';

  const navItems = [
    {icon: House, label: "Company profile", href:"/dashbord/recruiter/company"},
    {icon: Magnifier, label: "My Companny", href:"/dashbord/recruiter"},
    {icon: Bell, label: "Manage Job", href:"/dashbord/recruiter/jobs"},
    {icon: Envelope, label: "Application", href:"/"},
    {icon: Gear, label: "Settings", href:"/"},
  ];

  const navlink= <nav className=" flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                   href={item.href}
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                  >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                  </Link>
                ))}
              </nav>
 

const DashBordSideBar = () => {

 
    





  return (
    
    <>
    <aside className='hidden w-64 shrink-0 border-r border-default p-4 lg:block'>
      {navlink}
    </aside>
    
      <Drawer>
      <Button className="lg:hidden" variant="secondary">
        <Bars />
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading>Navigation</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              {navlink}
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    
    </>

     
    
  );
};

export default DashBordSideBar;