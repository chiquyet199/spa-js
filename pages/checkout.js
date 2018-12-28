import store from "../js/store.js";
import navBar from "../components/navbar.js";
import cartItemList from "../components/cartItemList.js";
import checkoutButton from "../components/checkoutButton.js";

const render = rootEl => {
  const { shoppingCart } = store.getState();
  const totalPrize = shoppingCart.reduce((total, item) => {
    total = total + item.prize * item.quantity;
    return total;
  }, 0);
  const emptyCartMessage = `<h2>You've buy nothing, go shopping more ^^</h2>`;
  const template = `
    <div class="page checkout">
      ${navBar.render()}
      <div class="content">
        ${
          shoppingCart.length > 0
            ? cartItemList.render(shoppingCart)
            : emptyCartMessage
        }
        ${shoppingCart.length > 0 ? `<h3>Total: ${totalPrize}USD</h3>` : ""}
        ${shoppingCart.length > 0 ? checkoutButton.render() : ""}
      </div>
    </div>
  `;
  rootEl.innerHTML = template;
  navBar.bindEvents();
  cartItemList.bindEvents();
  checkoutButton.bindEvents();
};

export default { render };
