import React from 'react'
import { Outlet } from 'react-router'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { LuMessageCirclePlus } from 'react-icons/lu';
import Header from './elements/Header';
import Sidebar from './elements/Sidebar';

function RootLayout() {
  return (
    <div className='w-screen h-screen bg-slate-950 p-6 overflow-x-hidden no-scrollbar'>

      {/* header section */}
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default RootLayout