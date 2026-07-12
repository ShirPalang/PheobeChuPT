import React, { useContext, useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { useLocation, useNavigate, useParams } from 'react-router'
import pheobeChupiGenerator from '../../modules/pheoChupiGenedator'
import idGenerator from '../../modules/idGenerator'
import { ChatHistoryContext } from '../../context/ChatHistoryProvider'

function Input() {

  const [prompt, setPropmt] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  let { history, newData } = useContext(ChatHistoryContext)


  const sendPrompt = () => {

    if (prompt === '')
      return

    if (id) {
      const findChat = history.findIndex(chat => chat.id == +id)
      const newChat = [...history[findChat].chat, { type: 'user', message: prompt }, { type: 'bot', message: pheobeChupiGenerator(Math.floor(Math.random() * 20)) }]
      history[findChat].chat = newChat

      newData(history)
      setPropmt('')
      return
    }

    const newChatId = idGenerator(history[history.length - 1]?.id) || 1

    const newChatObject = { id: newChatId, chat: [{ type: 'user', message: prompt }, { type: 'bot', message: pheobeChupiGenerator(Math.floor(Math.random() * 20)) }] }

    newData([...history, newChatObject])
    navigate(`/chat/${newChatId}`)
    setPropmt('')
  }

  return (
    <div className="bg-gray-800 w-full rounded-full flex justify-between p-1">
      <input type="text" className="w-full outline-0 text-white ps-2"
        placeholder="Ask anything"
        value={prompt}
        onChange={e => setPropmt(e.target.value)}
      />
      <button className="bg-blue-500 p-2 rounded-full"
        onClick={sendPrompt}>
        <IoSend className="text-white -rotate-90" />
      </button>
    </div>
  )
}

export default Input