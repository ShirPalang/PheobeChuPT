import { createContext, useState } from "react";

const ChatHistoryContext = createContext()

function ChatHistoryProvider({ children }) {

  const localHistory = localStorage.getItem('pheobeGPT') || []
  let parsedHistory = []

  if (localHistory.length > 0) {
    parsedHistory = JSON.parse(localHistory)
  }

  const [history, setHistory] = useState(parsedHistory)

  const newData = (data) => {
    localStorage.setItem('pheobeGPT', JSON.stringify(data))
    setHistory(JSON.parse(localStorage.getItem('pheobeGPT')))
  }


  return <ChatHistoryContext.Provider value={{ history, newData }}>
    {children}
  </ChatHistoryContext.Provider>

}

export {ChatHistoryContext , ChatHistoryProvider}