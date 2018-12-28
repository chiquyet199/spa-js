import navBar from "../components/navbar.js";

const render = rootEl => {
  const template = `
    <div class="page home">
      ${navBar.render()}
      <div class="content">
        <h1>THIS IS HOME PAGE</h1>
      </div>
    </div>
  `;
  rootEl.innerHTML = template;
  navBar.bindEvents();
};

export default { render };
