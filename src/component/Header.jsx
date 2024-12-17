import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useLocation } from "react-router";
import logo from "../assets/images/logo.jpg"
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";

function Header() {

  const lacation = useLocation()
  return (
    <>
      <header className="header_top_strip p-1 shadow-sm">
        <div className="container-xxl ">
          <div className="row align-items-center">
            <div className="col-6">
              <p className="">The trending outfits at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div className="" style={{ paddingLeft: "300px" }}>
                <a href="tel:+8801887484441">Call Us 01887484441</a>
              </div>
              <div>
                <Link>
                  <FiPhoneCall className=" fs-3 mx-4" /></Link>
                <Link><AiOutlineMail className=" fs-3 mx-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className=" text-uppercase sticky-top px-5 pt-1 header ">
        <div className="container-2xl mx-auto">
          <div className=" row align-items-center">
            <div className=" col-2 ">
              <Link to='/'>
                <img src={logo} alt="logo" className=" img-fluid  logo" />
              </Link>
            </div>
            <div className="col-md-3">
              <div className="input-group d-none d-md-flex">
                <input type="text" className="form-control" placeholder="Find products ..." aria-label="Find products ..." aria-describedby="basic-addon2" />
                <button className="input-group-text" id="basic-addon2">search</button>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between ps-5">
              <Link className={lacation.pathname === "/" ? "link-style active" : "link-style inactive"} to={"/"}>Home</Link>
              <Link className={lacation.pathname === "/Shop" ? "link-style active" : "link-style inactive"} to={"/Shop"}>Shop</Link>
              <Link className={lacation.pathname === "/Blog" ? "link-style active" : "link-style inactive"} to={"/Blog"}>BLOG</Link>
              <Link className={lacation.pathname === "/About" ? "link-style active" : "link-style inactive"} to={"/About"}>ABOUT</Link>
              <Link className={lacation.pathname === "/Contact" ? "link-style active" : "link-style inactive"} to={"/Contact"}>CONTACT</Link>
            </div>

            <div className="col-3 d-flex align-items-center" style={{ paddingLeft: "200px" }}>
              <Link className={lacation.pathname === "/Wishlist" ? "link-style active" : "link-style inactive"} to={"/Wishlist"} >
                <HiOutlineInboxArrowDown className=" fs-3 mx-2" />
              </Link>
              <Link to={"/Login"} className={lacation.pathname === "/Login" ? "link-style active" : "link-style inactive"}>
                <IoMdContact className=" fs-3 mx-2" />
              </Link>
              <Link to={"/Cart"} className={lacation.pathname === "/Cart" ? "link-style active" : "link-style inactive"}>
                <FaCartPlus className=" fs-3 mx-2" />
              </Link>
            </div>
          </div>
        </div>
      </header >
    </>

  )
}

export default Header