import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router';
import Hero from '../component/Hero';
import FeaturedProduct from '../component/FeaturedProduct';
import NewArrivals from '../component/NewArrivals';
import HotProduct from '../component/HotProduct';
import Customur from '../component/Customur';
import InputBox from '../component/InputBox';

function Home() {
  return (
    <>
      <section className="banner">
        <div className="container-2xl mx-auto px-3 px-md-5">

          <div className="back-details p-3 p-md-5 d-flex flex-column  text-center ">
            <h1 className=" ">Super Value Deals</h1>
            <h2 className="fs-4 fs-md-3">On all products</h2>
            <p className="mb-3 fs-6">Save more today with Apneck</p>
            <div className=' d-inline-block'>
              <Link to="/shop" className="btn btn-primary " id="button-link">
                Shop Now
              </Link>
            </div>
          </div>

        </div>
      </section>



      <Hero />

      <section className="featured-products p-4">
        <div className="container-2xl mx-auto ">
          <div className="row">
            <div className="col-12 text-center product">
              <h1>Featured Products</h1>
              <p>All Weather New Modern Designs</p>
            </div>
          </div>
          <FeaturedProduct />
        </div>
      </section>


      <section className="repair-services p-5">
        <div className="container-2xl mx-auto">
          <div className="row ">
            <div className="repair-details text-center align-items-center">
              <h5 className='mb-3 text-white'>Repair Services</h5>
              <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
              <button>
                <Link to={'/blog'} className=' text-white text-decoration-none'>Explore Now</Link>
              </button>

            </div>
          </div>
        </div>
      </section>


      <section className="featured-products p-4">
        <div className="container-2xl mx-auto ">
          <div className="row">
            <div className="col-12 text-center product">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
          </div>
          <NewArrivals />
        </div>
      </section>

      <HotProduct />
      <Customur />
      <InputBox />
    </>


  )
}

export default Home