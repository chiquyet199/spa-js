import store from "../js/store.js";

const render = () => `
  <nav>
    <ul>
      <li class="nav-home">Home</li>
      <li class="nav-products">Products</li>
      <li class="nav-contact">contact</li>
    </ul>
    <span class="shopping-cart">Cart (${
      store.getState().shoppingCart.length
    })</span>
  </nav>
`;

const bindEvents = () => {
  const navhomeEl = document.querySelector(".nav-home");
  if (navhomeEl) {
    navhomeEl.onclick = () => {
      navigate("home");
    };
  }
  const navproductsEl = document.querySelector(".nav-products");
  if (navproductsEl) {
    navproductsEl.onclick = () => {
      navigate("products");
    };
  }
  const navcontactEl = document.querySelector(".nav-contact");
  if (navcontactEl) {
    navcontactEl.onclick = () => {
      navigate("contact");
    };
  }
  const shoppingcartEl = document.querySelector(".shopping-cart");
  if (shoppingcartEl) {
    shoppingcartEl.onclick = () => {
      navigate("checkout");
    };
  }
};

const navigate = page => {
  const state = store.getState();
  const newState = {
    ...state,
    activePage: page
  };
  store.setState(newState);
};

export default { render, bindEvents };
