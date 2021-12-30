import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {/*crea un array con x elementos y llenalos vacio, y luego agregale una estrella a cada uno  */}
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={`star_${index}`}>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove to basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
