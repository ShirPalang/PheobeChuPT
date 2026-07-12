import React, { useContext } from 'react'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { LuMessageCirclePlus } from 'react-icons/lu'
import { ShowSidebarContext } from '../../../context/ShowSidebarProvider'
import { useNavigate } from 'react-router'

function Header() {

  const { isShow, setIsShow } = useContext(ShowSidebarContext)
  const navigate = useNavigate()

  return (
    <header className='flex justify-between items-end pt-6 pb-3 text-white text-xl fixed top-0 right-6 left-6 bg-slate-950 z-10 lg:w-9/12 lg:right-5 lg:left-auto'>
      <HiOutlineMenuAlt2
        onClick={() => setIsShow(!isShow)}
        className='lg:invisible'
      />
      {/* <p className='w-10/12 lg:w-40'>test</p> */}
      <LuMessageCirclePlus
        onClick={() => navigate('/')}
      />
    </header>
  )
}

export default Header