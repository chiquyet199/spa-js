import navBar from "../components/navbar.js";

const render = rootEl => {
  const template = `
    <div class="page contact">
      ${navBar.render()}
      <div class="content">
      </div>
    </div>
  `;
  rootEl.innerHTML = template;
  navBar.bindEvents();
};

export default { render };
