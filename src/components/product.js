import store from '../js/store.js'

const render = function (product) {
  const {name} = product
  return `
    <div class="product" data-id="${product.id}">
      <img width="200px" height="200px" src="${product.image}"/>
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
  const { products, cart } = appState;
  const productToAdd = products.find(p => p.id == id)
  const productInCart = itemInCart => itemInCart.id === productToAdd.id
  const sameProductInCart = cart.find(productInCart)
  let newState = appState
  if(sameProductInCart){
    sameProductInCart.quantity ++
  }else{
    productToAdd.quantity = 1
    newState = { ...appState, cart: [...appState.cart, productToAdd] };
  }
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