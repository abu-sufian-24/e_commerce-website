import { useContext } from 'react';
import ReactStars from 'react-rating-stars-component';

import { ShopContext } from './ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

function Prod(props) {
  // eslint-disable-next-line react/prop-types
  const { id, name, price, image, brand } = props.data;
  const { addToCart, cartItems, viewProductDetails } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

    ;
  const handleAddToCart = (e) => {
    if (!user) {
      navigate("/login")
      return;
    }
    addToCart(id);
    e.target.classList.toggle('red')

  }

  return (
    <div className="col mb-5">
      <div className="card h-100 m-auto">
        <img src={image} className="card-img-top img-fluid" alt={name} />
        <div className="card-body">
          <p className="card-text mb-2">{brand}</p>
          <h5>{name}</h5>
          <ReactStars
            count={5}
            edit={false}
            value={4}
            size={24}
            activeColor="#EA9D5A"
          />
          <div className="mb-3 text-center">
            <p className="price mb-2">
              <span className="red">${price}</span>&nbsp;
              <strike>${price * 2}</strike>
            </p>
            <Link
              className="text-decoration-none"
              to="/details"
              onClick={() => viewProductDetails(id)}
            >
              <button className="fs-4 view-details-btn">View Details</button>
            </Link>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={(e) => handleAddToCart(e)}
              className="myButton"
            >
              Add To Cart
              {cartItemAmount > 0 && ` (${cartItemAmount})`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prod;
