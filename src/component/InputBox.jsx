

/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router';


const InputBox = () => {
  return <>
    <section className="news-letter p-5">
      <div className="container-2xl p-5 mx-auto">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <h2 className='mb-3'>Sign Up for a newsletter</h2>
              <h5>Get email updates on all our <Link to={"/shop"}>special offers</Link></h5>
            </div>
          </div>
          <div className="col-md-8 details d-flex flex-column justify-content-center">
            <div className="input-group mb-3">
              <input type="text" id='news-input' className="form-control" placeholder="@example.com" aria-label="@example.com" aria-describedby="basic-addon2" />
              <button className="input-group-text" id="basic-addon2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export default InputBox