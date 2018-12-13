import {$} from '../js/utils.js'
import {goback, navigate} from '../js/navigation.js'

const render = (rootEl,props) => {
  const template =  `
    <div class="about">
      <h1>ABOUT</h1>
      <button class="btn-back">Back</button>
      <button class="btn-products">Products</button>
    </div>
  `;
  rootEl.innerHTML = template
  const backButton = $('.about .btn-back')
  const productskButton = $('.about .btn-products')
  backButton.onclick = () => goback()
  productskButton.onclick = () => navigate('products')
};

export default {
  render,
};
