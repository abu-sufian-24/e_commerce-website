import { Link } from "react-router"
import banner from '../assets/images/blog/b4.jpg'
import banner1 from '../assets/images/banner/b10.jpg'

function HotProduct() {
  return (
    <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
      <div className="container-xxl">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card m-auto mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={banner} className="img-fluid h-100 rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Hot Deals</h5>
                    <h2 className="card-text mb-2">Buy One get One free.</h2>
                    <p className="card-text mb-2"><small className="text-body-secondary">The latest best collection in our closet <br />Feel Cute with our outfits</small></p>
                    <Link to='blog'>
                      <button className='mt-4'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-md-6 d-flex">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={banner1} className="img-fluid h-100 rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Season-In</h5>
                    <h2 className="card-text mb-2">All Weather Attire</h2>
                    <p className="card-text mb-2"><small className="text-body-secondary">It never matter which season it is <br />We got you covered</small></p>
                    <Link to='blog'>
                      <button className='mt-4'>Learn more</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HotProduct