import React, { useContext } from "react";
import MainContext from "../../context/MainContext";

const Cart = () => {
  const {
    cart,
    cartTotal,
    cartDiscount,
    removeCartItem,
    changeCartItemQuantity
  } = useContext(MainContext);

  if (cart.items.length === 0) {
    return <h1 className="is-size-1">Votre panier est vide</h1>;
  }

  return (
    <>
      <h1 className="title is-size-4 has-text-centered">Panier</h1>
      <hr></hr>
      <table className="table is-bordered is-fullwidth is-centered">
        <thead>
          <tr>
            <th></th>
            <th>Livre</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Total</th>
          </tr>
        </thead>
        <tfoot>
          <tr className="has-text-weight-bold">
            <td></td>
            <td colSpan="3">TOTAL</td>
            <td>
              <b>{cartTotal - cartDiscount} €</b>
            </td>
          </tr>
        </tfoot>
        <tbody>
          {cart.items.map(item => {
            return (
              <tr key={item.product.isbn}>
                <td>
                  <button onClick={() => removeCartItem(item)}>X</button>
                </td>
                <td>{item.product.title}</td>
                <td>
                  {item.quantity}{" "}
                  <button onClick={() => changeCartItemQuantity(item, 1)}>
                    +
                  </button>
                  <button onClick={() => changeCartItemQuantity(item, -1)}>
                    -
                  </button>
                </td>
                <td>{item.product.price} €</td>
                <td>{item.quantity * item.product.price} €</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td colSpan="3">SOUS-TOTAL</td>
            <td> {cartTotal} €</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">Remise</td>
            <td>{cartDiscount} €</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Cart;
