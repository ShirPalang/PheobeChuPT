import { createContext, useState } from "react";

const ShowSidebarContext = createContext()

function ShowSidebarProvider({ children }) {

  const [isShow, setIsShow] = useState(false)

  return <ShowSidebarContext.Provider value={{ isShow, setIsShow }}>
    {children}
  </ShowSidebarContext.Provider>
}

export { ShowSidebarContext, ShowSidebarProvider }