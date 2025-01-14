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
import ShopContext from "./component/ShopContext"
import Details from "./pages/Details"
import CeekOut from "./pages/CeekOut"
import Register from "./pages/Register"

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

function App() {
  return (
    <>
      <ShopContext>
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
              <Route path='details' element={<Details />} />
              <Route path='chekOut' element={<CeekOut />} />
              <Route path='register' element={<Register />} />
              {/* <Route path='CeekOut' element={<CeekOut />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>

    </>
  )
}

export default App
