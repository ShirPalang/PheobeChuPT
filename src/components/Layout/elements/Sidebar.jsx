import React, { useContext } from 'react'
import { LuMessageCirclePlus } from 'react-icons/lu'
import SidebarChat from './SidebarChat'
import { ShowSidebarContext } from '../../../context/ShowSidebarProvider'
import { ChatHistoryContext } from '../../../context/ChatHistoryProvider'
import { body } from "../../../assets/icons/body.png"

function Sidebar() {

  const { isShow, setIsShow } = useContext(ShowSidebarContext)
  const { history } = useContext(ChatHistoryContext)


  return (
    <div className={`w-full h-full ${!isShow && '-translate-x-full'} duration-300 ease-in-out fixed left-0 top-0 z-20
      lg:translate-0 lg:w-4/12`}
      onClick={() => setIsShow(!isShow)}
    >
      <div
        className={`min-w-7/12 max-w-65.25 h-full bg-gray-800 shadow-2xl shadow-slate-950 p-6 overflow-x-hidden no-scrollbar`}
      >
        {/* history header */}
        <div className='flex items-center gap-2'>
          <img src={body} alt="pheobe chupi"
            className='w-10 h-10' />
          <h1 className='text-xl font-semibold text-sky-500'>PheobeChuPT</h1>
        </div>

        {/* new chat section */}
        <div className='flex w-full justify-center items-center bg-sky-600 rounded-full font-semibold text-white py-1.5 gap-2 my-6'>
          <LuMessageCirclePlus />
          New chat
        </div>

        {/* chat history */}
        <div className='h-fit overflow-x-hidden'>
          {
            [...history].reverse().map(chat => (
              <SidebarChat key={chat.id} title={chat.chat[0].message} id={chat.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidebar