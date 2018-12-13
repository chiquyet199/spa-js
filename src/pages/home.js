import { $ } from "../js/utils.js";
import { navigate } from "../js/navigation.js";

const renderCartInfo = cart => {
  const totalPrize = cart.reduce((total, item) => {
    total = total + item.prize;
    return total;
  }, 0);
  return `
    <ul>
      ${cart.map(item => `<li>${item.name} ---- ${item.prize}</li>`)}
    </ul>
    <h3>Total: ${totalPrize}</h3>
  `;
};

const render = (rootEl, props) => {
  const { cart } = props;
  const template = `
    <div class="home">
      <h1>HOME</h1>
      <button class="btn btn-nav-about">About page</button>
      <button class="btn btn-nav-products">Product list</button>
      <h2>Cart Info</h2>
      ${cart.length === 0 ? "no Item selected" : renderCartInfo(cart)}
      </div>
  `;
  rootEl.innerHTML = template;
  const aboutBtn = $(".home .btn-nav-about")
  const productsBtn = $(".home .btn-nav-products")
  aboutBtn.onclick = () => navigate('about')
  productsBtn.onclick = () => navigate('products')
};

export default {
  render
};
