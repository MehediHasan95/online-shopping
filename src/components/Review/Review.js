import React, { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";
import menData from "../../fakeData/menData.json";

import Order from "../Order/Order";

const Review = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    const saveOrder = getStoredCart();
    const productKeys = Object.keys(saveOrder);

    const cartProduct = productKeys.map((key) => {
      const selectProduct = menData.find((e) => e.key === key);
      selectProduct.quantity = saveOrder[key];
      return selectProduct;
    });
    // console.log(cartProduct);
    setOrder(cartProduct);
  }, []);

  return (
    <div>
      {order.map((e) => (
        <Order key={e.key} product={e}></Order>
      ))}
    </div>
  );
};

export default Review;
