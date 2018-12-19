import store from '../js/store.js'

const render = function (product) {
  const {name} = product
  return `
    <div class="product" data-id="${product.id}">
      <img width="200px" height="200px" src="https://cdn.tgdd.vn/Products/Images/42/191482/iphone-xs-max-512gb-gold-400x400.jpg"/>
      <h3>${name}</h3>
      <button class="add">Add to cart</button>
    </div>
  `
}

const bindEvents = () => {
  Array.from(document.querySelectorAll('.add')).map(el => {
    const productId = el.parentElement.getAttribute('data-id')
    el.onclick = () => {addToCart(productId)}
  })
  Array.from(document.querySelectorAll('.product')).map(el => {
    el.onclick = event => {
      setProductDetail(event.target.getAttribute('data-id'))
    }
  })
}

const addToCart = id => {
  const appState = store.getState();
  const { products } = appState;
  const productToAdd = products.find(p => p.id == id)
  const newState = { ...appState, cart: [...appState.cart, productToAdd] };
  store.setState(newState);
}

const setProductDetail = id => {
  const appState = store.getState();
  const { products } = appState;
  const activeProduct = products.find(p => p.id == id);
  const newState = {
    ...appState,
    activeProduct: activeProduct
  };
  store.setState(newState);
}


export default {
  render,
  bindEvents,
}