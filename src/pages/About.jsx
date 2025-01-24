import { useEffect, useState } from 'react';

import blog1 from '../assets/images/blog/blog-1.jpg';
import blog2 from '../assets/images/blog/blog-2.jpg';
import blog3 from '../assets/images/blog/blog-3.jpg';
import blog4 from '../assets/images/blog/blog-4.jpg';
import a6 from '../assets/images/about/a6.jpg';
import video from '../assets/images/about/1.mp4';
import orders from '../assets/images/icons/icon1.png';
import orders1 from '../assets/images/icons/icon2.png';
import orders2 from '../assets/images/icons/icon3.png';
import orders3 from '../assets/images/icons/icon4.png';
import orders4 from '../assets/images/icons/icon5.png';
import mobileImage from '../assets/images/mobileimage.jpg';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="about-container">
      <section className="about-wrapper">
        <div className="container">
          <div className="shop-details text-center">
            <h1>#Know Us</h1>
            <p>Get to know us more</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="row">
          <div className="col-md-6">
            <img src={a6} alt="About Us" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1><b>Who are we?</b></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tempore unde aperiam, consectetur harum a eum error,
              libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore unde aperiam, consectetur harum a eum error, libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
            </p>
          </div>
        </div>
      </section>

      <section className="about-app">
        <h2 className="text-center">
          Download our App
        </h2>
        <div className="image-container">
          {isMobile ? (
            <img src={mobileImage} alt="Mobile App" className="w-100" />
          ) : (
            <video loop muted autoPlay src={video} className="w-100"></video>
          )}
        </div>
      </section>

      <section className="customer-feedback">
        <div className="container">
          <div className="text-center mb-4">
            <h1>What our customers say...</h1>
            <p>Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <img src={blog1} alt="Customer" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Marvel Clein</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <small>Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <img src={blog2} alt="Customer" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Melisa Ivy</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <small>Last Updated now</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <img src={blog3} alt="Customer" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Tristian Ann</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <small>Last Updated now</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card">
                <img src={blog4} alt="Customer" className="card-img" />
                <div className="card-body">
                  <h5 className="card-title">Phillip Omosh</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <small>Last Updated now</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="about-benefits">
        <div className="marquee">
          <div className="benefit">
            <img src={orders} alt="Fast Orders" />
            <p>Fast Orders</p>
          </div>
          <div className="benefit">
            <img src={orders1} alt="Quick Shipping" />
            <p>Quick Shipping</p>
          </div>
          <div className="benefit">
            <img src={orders2} alt="High Saves" />
            <p>High Saves</p>
          </div>
          <div className="benefit">
            <img src={orders3} alt="24/7 Support" />
            <p>24/7 Support</p>
          </div>
          <div className="benefit">
            <img src={orders4} alt="Online Orders" />
            <p>Online Orders</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
