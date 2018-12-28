import navBar from "../components/navbar.js";
import product from "../components/product.js";
import store from "../js/store.js";

const appState = store.getState();
const { products } = appState;

const render = rootEl => {
  const template = `
    <div class="page products">
      ${navBar.render()}
      <div class="content">
        ${products.map(product.render).join("")}
      </div>
    </div>
  `;
  rootEl.innerHTML = template;
  navBar.bindEvents();
  product.bindEvents();
};

export default { render };
