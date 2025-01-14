import ProductDetails from "../component/ProductDetails"


function Details() {
  return (
    <section className="product-details p-5">
      <div className="conntainer-xxl">
        <div className="row">
          <ProductDetails />
        </div>
      </div>
    </section>
  )
}

export default Details