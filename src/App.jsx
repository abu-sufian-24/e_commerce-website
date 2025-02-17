
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Layout from "./component/Layout"
import { BrowserRouter, Route } from "react-router"
import { Routes } from "react-router"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CheckOut from "./pages/CheckOut"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import ShopContext from "./component/ShopContext"
import Details from "./pages/Details"
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
// import Private from './pages/auth/Private';




function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path="shop" element={<Shop />} />
              <Route path='blog' element={<Blog />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='wishlist' element={<Wishlist />} />
              <Route path='cart' element={<Cart />} />
              <Route path='details' element={<Details />} />
              <Route path='cheekOut' element={<CheckOut />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>

    </>
  )
}

export default App
