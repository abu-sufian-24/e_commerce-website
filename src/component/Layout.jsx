import { Outlet } from "react-router"
import Fotter from "./Fotter"
import Header from "./Header"



function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  )
}

export default Layout