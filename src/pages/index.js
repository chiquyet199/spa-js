import home from "./home.js";
import about from "./about.js";
import products from "./products.js";
import productsDetail from "./productsDetail.js";

const initialize = () => {
  window[home.moduleIdentifier] = home.funcs;
  window[about.moduleIdentifier] = about.funcs;
  window[products.moduleIdentifier] = products.funcs;
  window[productsDetail.moduleIdentifier] = productsDetail.funcs;
};

export default { home, about, products, productsDetail, initialize };
