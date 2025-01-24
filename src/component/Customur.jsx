import { Link } from "react-router"
import blog1 from '../assets/images/blog/blog-1.jpg'
import blog2 from '../assets/images/blog/blog-2.jpg'
import blog3 from '../assets/images/blog/blog-3.jpg'
import blog4 from '../assets/images/blog/blog-4.jpg'


function Customur() {
  return (
    <section className="blogs p-5">
      <div className="container-2xl mx-auto">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="mb-3">What our customers say...</h1>
            <p className="mb-4">Our customers never miss a bit on providing feedback</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog1} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog2} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog3} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={blog4} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                <Link to='about'>
                  <button className="mt-4">Learn more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customur