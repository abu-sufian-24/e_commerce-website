import Prod from "./Prod"
import { Products, Products1 } from "./Products"


function ShopItem() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {[...Products, ...Products1].map((product) => (
          <Prod key={product.id} data={product} />
        ))}

      </div>
    </>
  )
}

export default ShopItem