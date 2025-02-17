import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useLocation } from "react-router";
import logo from "../assets/images/logo.jpg"
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { AuthContext } from "../context";
import Avatar from 'react-avatar';
import { toast } from "react-toastify";

function Header() {
  const { getTotalCartProducts } = useContext(ShopContext);
  const { user, logOut } = useContext(AuthContext)
  const location = useLocation()

  const handleLogOut = () => {
    logOut().then((result) => {
      console.log(result)
      toast.success("LogOut success")


    })
      .catch((error) => {
        toast.error(error.message)
      });
  }
  return (
    <>
      {/* fast header */}
      <header className="header_top_strip p-1 shadow-sm">
        <div className="container-xxl">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <p className="mb-0 small">The trending outfits at 100% off</p>
            </div>

            {/* Right Content */}
            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
              <a href="tel:+8801887484441" className="me-3 text-dark small">
                Call Us: 01887484441
              </a>
              <Link to="#" className="text-dark me-3">
                <FiPhoneCall className="fs-4" />
              </Link>
              <Link to="#" className="text-dark">
                <AiOutlineMail className="fs-4" />
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* seconde header */}
      <header className="text-uppercase sticky-top px-3 pt-1 header">
        <div className="container-2xl mx-auto">
          <div className="row align-items-center">
            {/* Logo and Search Bar */}
            <div className="col-12 d-flex justify-content-between align-items-center d-md-none gap-3">
              <div className="">
                <Link to="/">
                  <img src={logo} alt="logo" className="img-fluid logo" style={{ maxWidth: "100px" }} />
                </Link>
              </div>
              <div className="input-group  w-100 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find products ..."
                  aria-label="Find products ..."
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-box" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            {/* Icons */}
            <div className="col-12 d-flex justify-content-center align-items-center mt-2 d-md-none">
              <Link to="/wishlist" className="mx-2">
                <HiOutlineInboxArrowDown className="fs-3" />
              </Link>
              <Link to="/Login" className="mx-2">
                <IoMdContact className="fs-3" />
              </Link>
              <Link to="/Cart" className="mx-2 position-relative">
                <FaCartPlus className="fs-3 cart-icon" />
                {getTotalCartProducts() > 0 && (
                  <span className="count-cart bounce">
                    {` ${getTotalCartProducts()}`}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="col-12 text-center mt-3 mb-3 d-md-none">
              <button
                className="btn btn-outline-primary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileMenu"
                aria-expanded="false"
                aria-controls="mobileMenu"
              >
                Menu
              </button>
            </div>
          </div>

          {/* Collapsible Menu for Small Devices */}
          <div className="collapse" id="mobileMenu">
            <div className="bg-light p-3 text-center">
              {["/", "/Shop", "/Blog", "/About", "/Contact"].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className={`d-block py-2 ${location.pathname === path ? "text-primary" : "text-dark"}`}
                >
                  {path.replace("/", "") || "Home"}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Header */}
          <div className="row align-items-center d-none d-md-flex">
            <div className="col-md-2">
              <Link to="/">
                <img src={logo} alt="logo" className="img-fluid logo" />
              </Link>
            </div>
            <div className="col-md-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find products ..."
                  aria-label="Find products ..."
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Search
                </button>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center justify-content-between">
              {["/", "/Shop", "/Blog", "/About", "/Contact"].map((path) => (
                <Link
                  key={path}
                  className={`link-style ${location.pathname === path ? "active" : "inactive"}`}
                  to={path}
                >
                  {path.replace("/", "") || "Home"}
                </Link>
              ))}
            </div>
            <div className="col-md-3 d-flex justify-content-end align-items-center">
              <Link to="/shop" className="mx-2">
                <HiOutlineInboxArrowDown className="fs-3" />
              </Link>

              <Link to="/cart" className="mx-3 position-relative">
                <FaCartPlus className="fs-3 cart-icon" />
                {getTotalCartProducts() > 0 && (
                  <span className="count-cart bounce">
                    {` ${getTotalCartProducts()}`}
                  </span>
                )}
              </Link>

              {
                user ? (<>
                  <span><Avatar size="40" name={user?.email} /></span>
                  <button
                    onClick={handleLogOut}
                    className="logout-btn"
                  >
                    <svg
                      className="logout-bnt-logo "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
                      />
                    </svg>
                  </button>
                </>)
                  : <Link to="/Login" className="mx-3">
                    <IoMdContact className="fs-3" />
                  </Link>
              }
            </div>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header