import React, { useContext, useEffect, useRef } from 'react'
import Input from '../components/common/Input'
import Message from '../components/common/Message'
import Result from '../components/common/Result'
import { ChatHistoryContext } from '../context/ChatHistoryProvider'
import { useParams } from 'react-router'

function ChatPage() {

  const { history } = useContext(ChatHistoryContext)
  const param = useParams()

  const findChat = history.find(chat => chat.id === +param.id)

  const bottomRef = useRef(null)

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    })
  }, [findChat])

  return (
    <div className='relative h-fit overflow-hidden lg:float-right lg:w-9/12'>
      <div className="h-12"></div>
      {<>
        {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> */}
        {
          findChat.chat.map((message) => (
            <>
              {
                message?.type === 'user' ? <Message message={message.message} /> : <Result message={message.message} />
              }
            </>
          ))
        }
      </>
      }
      <div ref={bottomRef}></div>

      {/* send chat section */}
      <div className='fixed bottom-0 left-5 right-5 bg-slate-950 lg:right-0 lg:left-auto lg:w-9/12'>
        <Input />
        <p className='text-white text-[10px] opacity-50 text-center m-2'>Phoebe Chupi never makes mistakes. Ever!</p>
      </div>

      <div className='h-20'></div>
    </div>
  )
}

export default ChatPage