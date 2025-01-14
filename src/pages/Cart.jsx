import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../component/ShopContext";
import { useNavigate } from "react-router";
import { Products, Products1 } from "../component/Products";
import CartItem from "../component/CartItem";

function Cart() {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="cart-section p-5">
        <div className="container-xxl">
          {totalAmount > 0 ? (
            <div className="cart-container">
              <div className="header text-center mb-4">
                <h2 className="text-white">Your Cart</h2>
              </div>
              <div className="cart-table">
                <div className="cart-table-header">
                  <h5 className="product-header">Product</h5>
                  <h5 className="details-header">Details</h5>
                </div>

                <div className="cart-items">
                  {[...Products, ...Products1].map((product) => {
                    if (cartItems[product.id] !== 0) {
                      return <CartItem key={product.id} data={product} />;
                    }
                    return null;
                  })}
                </div>

                <div className="clear-cart text-end mb-4">
                  <button onClick={clearCart} className="clear-cart-btn">
                    Clear Cart
                  </button>
                </div>

                <hr />

                <div className="checkout-section row mt-4">
                  <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
                    <button
                      onClick={() => navigate("/shop")}
                      className="continue-btn"
                    >
                      {isMobile ? "Continue" : "Continue Shopping"}
                    </button>
                  </div>

                  <div className="col-12 col-md-6 total-section">
                    <div className="total-content text-end">
                      <h2 className="mb-3">
                        <b>Total</b>
                      </h2>
                      <p className="total-price">
                        <b>${totalAmount}</b>
                      </p>
                      <button
                        onClick={() => navigate("/chekOut")}
                        className="checkout-btn"
                      >
                        {isMobile ? "Check Out" : "Proceed to Checkout"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-cart text-center p-5">
              <h2>Your Cart Is Empty!</h2>
              <button
                onClick={() => navigate("/shop")}
                className="continue-btn mt-3"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
