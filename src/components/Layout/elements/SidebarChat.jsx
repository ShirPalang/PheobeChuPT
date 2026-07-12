import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { NavLink } from 'react-router'

function SidebarChat({ title, id }) {

  return (
    <NavLink to={`/chat/${id}`} className={({ isActive }) => `text-white text-sm py-3 px-3 my-3 rounded-xl flex justify-between items-center ${isActive && 'bg-sky-900'}`} >
      <p className='truncate'>
        {title}
      </p>
      {/* <BiDotsHorizontalRounded /> */}
    </ NavLink >
  )
}

export default SidebarChat