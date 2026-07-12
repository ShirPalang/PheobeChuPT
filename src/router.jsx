import { createBrowserRouter, Outlet } from "react-router"
import RootLayout from "./components/Layout/RootLayout"
import NewChat from "./pages/NewChat"
import ChatPage from "./pages/ChatPage"

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <NewChat /> },
      { path: 'chat/:id', element: <ChatPage /> },
    ]
  }
])


export default router