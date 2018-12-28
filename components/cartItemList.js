import cartItem from "./cartItem.js";

const render = items => {
  return `
    <ul>
      ${items.map(cartItem.render).join("")}
    </ul>
  `;
};

const bindEvents = () => {
  cartItem.bindEvents();
};

export default { render, bindEvents };
