/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'


import { Products } from './Products';
import { Link } from 'react-router';


const FeaturedProduct = () => {
  return <>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 p-3">
      {Products.slice(1, 5).map((product) => (
        <div className="col mb-5" key={product.id}>
          <div className="card product-card h-100 m-auto">
            <img
              src={product.image}
              className="card-img-top img-fluid product-image"
              alt={product.name}
            />
            <div className="card-body text-center">
              <p className="card-brand mb-2">{product.brand}</p>
              <h5 className="product-name mb-3">{product.name}</h5>
              <p className="product-status text-danger fs-5">{product.status}</p>
              <p className="product-price">
                <strike>${product.rate}</strike>
              </p>
              <Link to="/shop" className="btn btn-primary view-product-btn">
                View Product
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>

  </>;
}

export default FeaturedProduct