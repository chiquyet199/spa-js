import nav from '../components/nav.js'

const render = (rootEl) => {
  const template = `
    <div class="page home">
      ${nav.render()}
      <div class="content">
        <h1>THIS IS HOME PAGE</h1>
      </div>
    </div>
  `
  rootEl.innerHTML = template;
};

export default {
  render
};
