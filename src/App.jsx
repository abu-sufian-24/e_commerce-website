import Layout from "./component/Layout"
import './app.css'
import { BrowserRouter, Route } from "react-router"
import { Routes } from "react-router"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path='blog' element={<Blog />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='Wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='Cart' element={<Cart />} />
            {/* <Route path='CeekOut' element={<CeekOut />} /> */}


          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
