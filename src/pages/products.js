import nav from '../components/nav.js'
import product from '../components/product.js'
import { get, hosts } from "../js/api.js";

const render = (rootEl, props) => {
  const { products } = props;
  funcs.fetchProducts();
  const template = `
    <div class="page products">
      ${nav.render()}
      <div class="content">
        ${products.map(product.render).join('')}
      </div>
    </div>
  `
  rootEl.innerHTML = template;
  product.bindEvents()
};

const funcs = {
  fetchProducts: async function() {
    var products = await get(`${hosts.nordic}products`);
    console.log(`This is data from api calling service ${products}`);
  }
};

export default {
  render
};
