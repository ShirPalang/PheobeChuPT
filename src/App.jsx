import { RouterProvider } from "react-router"
import router from "./router"
import { ShowSidebarProvider } from "./context/ShowSidebarProvider"
import { ChatHistoryProvider } from "./context/ChatHistoryProvider"

function App() {


  return (
    <>
      <ShowSidebarProvider>
        <ChatHistoryProvider>
          <RouterProvider router={router} />
        </ChatHistoryProvider>
      </ShowSidebarProvider>
    </>
  )
}

export default App
