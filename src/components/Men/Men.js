import { useEffect, useState } from "react";
import "./Men.css";

import { TiShoppingCart } from "react-icons/ti";

const Men = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/women_collection.json?key=e7e57f80")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="Men">
      <div className="cardGroups d-flex justify-content-center">
        {product.map((item) => (
          <div className="card">
            <div className="cardImage">
              <img src={item.url} alt="" id="productImage" />
            </div>
            <div className="details">
              <div className="titleName">
                <h5 class="card-title">{item.name}</h5>
              </div>
              <p>Price: {item.price}</p>
              <p>⭐⭐⭐({item.rating})</p>
            </div>
            <button>
              Add to Cart <TiShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Men;
