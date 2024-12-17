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
      <section className="banner ">
        <div className="container-2xl mx-auto px-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className='back-details p-5'>
                      <p className='mb-3 text p-tag shadow-lg'>Trade in offer</p>
                      <h1>Super Value Deals</h1>
                      <h2>On all products</h2>
                      <p className='mb-3'>Save more today with Apneck</p>
                      <Link to='/shop' className='btn btn-primary' id='button-link'>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />

      <section className="featured-products p-4">
        <div className="container-2xl px-5">
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
        <div className="container-2xl px-5">
          <div className="row ">
            <div className="repair-details text-center align-items-center">
              <h5 className='mb-3 text-white'>Repair Services</h5>
              <h2 className='mb-3 text-white'>On 70% Off on All Products And Accessories</h2>
              <button>
                <Link to={'/shop'} className=' text-white text-decoration-none'>Explore Now</Link>
              </button>

            </div>
          </div>
        </div>
      </section>


      <section className="featured-products p-4">
        <div className="container-2xl px-5">
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