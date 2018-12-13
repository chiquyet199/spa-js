import {$} from '../js/utils.js'
import {goback} from '../js/navigation.js'
import { get, hosts } from "../js/api.js";

const renderProductItem = product =>
  `<li data-id="${product.id}">${
    product.name
  }</li>`;

const render = (rootEl, props) => {
  const { products } = props;
  funcs.fetchProducts();
  const template = `
    <div class="product">
      <h1>Products List</h1>
      <ul>
        ${products.map(renderProductItem).join("")}
      </ul>
      <button class="btn-back">Back</button>
    </div>
  `;
  rootEl.innerHTML = template;
  const backButton = $('.product .btn-back')
  backButton.onclick = () => goback()
};

const funcs = {
  openProductDetail: function(id) {
    const appState = store.getState();
    const { products } = appState;
    const activeProduct = products.find(p => p.id === id);
    const newState = {
      ...appState,
      activePage: "productsDetail",
      activeProduct: activeProduct
    };
    store.setState(newState);
  },
  fetchProducts: async function() {
    var products = await get(`${hosts.nordic}products`);
    console.log(`This is data from api calling service ${products}`);
  }
};

export default {
  render
};
