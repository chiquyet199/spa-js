import store from "../js/store.js";
import {get, hosts} from "../js/api.js";

const moduleIdentifier = "spa_products";

const renderProductItem = product =>
  `<li onclick="spa_products.openProductDetail(${product.id})">${
    product.name
  }</li>`;

const getHtml = props => {
  const { products } = props;
  spa_products.fetchProducts()
  return `
    <div class="product">
      <h1>Products List</h1>
      <ul>
        ${products.map(renderProductItem).join("")}
      </ul>
      <button onclick="spa_products.goTo('home')">Back To Home</button>
    </div>
  `;
};

const funcs = {
  goTo: function(page) {
    const appState = store.getState();
    const newState = { ...appState, activePage: page };
    store.setState(newState);
  },
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
  fetchProducts: async function(){
    var products = await get(`${hosts.nordic}products`)    
    console.log(`This is data from api calling service ${products}`)
  }
};

export default {
  moduleIdentifier,
  getHtml,
  funcs
};
