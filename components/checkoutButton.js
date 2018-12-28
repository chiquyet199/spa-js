import store from "../js/store.js";

const render = () => {
  return `
  <div class="checkoutButton">
    <button class="checkout">Checkout</button>
  </div>
  `;
};

const bindEvents = () => {
  const checkoutButton = document.querySelector(".checkoutButton .checkout");
  if (!checkoutButton) return;
  checkoutButton.onclick = checkout;
};

const checkout = () => {
  const appState = store.getState();
  const { shoppingCart, successShoopingCart } = appState;
  const newShoppingCart = [];
  const newSuccessShoopingCart =
    successShoopingCart.length > 0
      ? [...successShoopingCart, shoppingCart]
      : [shoppingCart];
  const newAppState = {
    ...appState,
    shoppingCart: newShoppingCart,
    successShoopingCart: newSuccessShoopingCart
  };
  store.setState(newAppState);
};

export default { render, bindEvents };
