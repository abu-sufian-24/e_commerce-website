import { Link } from "react-router"
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub } from 'react-icons/bs'

import playstore from '../assets/images/pay/play.jpg'
import appstore from '../assets/images/pay/app.jpg'
import visa from '../assets/images/pay/pay.png'

function Footer() {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-2xl">
          <div className="row">
            <div className="col-4">
              <h3>Contact</h3>
              <div className="footer-Datails">
                <p className="mb-3 fs-6"><b>Address: </b> Dogair_bajar, Demra, Dhaka, Bangladesh</p>
                <p className="mb-3 fs-6"><b>Phone: </b> <a className=" text-decoration-none" href="tel:+8801887484441"> Call Us 01887484441</a></p>
                <p className="mb-3 fs-6"><b>Hours: </b> From 8 a.m To 6 p.m</p>
                <p className="mb-3 fs-6">Follow the developer</p>
              </div>
              <div className="socials d-flex gap-3 mb-3">
                <Link to='https://www.facebook.com/profile.php?id=100014337360692' id='footer-link' target='_blank' className='gap-3'>
                  <FaFacebookSquare className="fs-3" />
                </Link>
                <Link to='https://www.linkedin.com/in/abu-sufian-031ba8330/' id='footer-link' target='_blank' className='gap-3'>
                  <IoLogoLinkedin className="fs-3" />
                </Link>
                <Link to={'https://github.com/abu-sufian-24'} className='gap-3' id='footer-link'>
                  <BsGithub className="fs-3" />
                </Link>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className='footer-title mb-3'><b>About</b></h2>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>About Us</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>Delivery</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>Privacy Policy</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>Terms & Conditions</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>Fee Policy</Link>  </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className='footer-title mb-3'><b>Account</b></h2>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>Profile</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" to='/cart' id='footer-links'>View Cart</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" to='/contact' id='footer-links'>Help</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>Payments</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>My Wishlist</Link>  </div>
              <div className='mb-3'> <Link className=" text-decoration-none text-black-50" id='footer-links'>Coupons</Link> </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <h2 className='footer-title mb-3'><b>Install App</b></h2>
              <p className='mb-3'>Available On Google Play Services & App Store</p>
              <div className="className='mb-3 col-md-6 col-12 pay">
                <div className='mb-3'>
                  <Link to='https://play.google.com/store/games?hl=en_US&gl=US' target='_blank'>
                    <img className=" rounded-2" src={playstore} alt="" />
                  </Link>
                </div>
                <div className='mb-3'>
                  <Link to='https://www.apple.com/app-store/' target='_blank'>
                    <img className=" rounded-2" src={appstore} alt="" />
                  </Link>
                </div>
              </div>
              <p className="mb-3">
                Payment Methods
              </p>
              <div className="pay">
                <Link to='https://www.paypal.com/signin' target='_blank'>
                  <img src={visa} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0 order-2 order-md-1">
              <p className="footer-text">&copy; Developed by Ahmeds Developers 2023</p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center order-1 order-md-2">
              <Link className="text-black text-decoration-none mx-2 footer-text">Privacy Policy</Link>
              <Link className="text-black text-decoration-none mx-2 footer-text">Terms of Use</Link>
              <Link className="text-black text-decoration-none mx-2 footer-text">Contact Us</Link>
            </div>
          </div>




        </div>
      </footer>

    </>
  )
}

export default Footer