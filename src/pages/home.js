import nav from '../components/nav.js'

const render = (rootEl) => {
  const template = `
    <div class="page home">
      ${nav.render()}
      <div class="content">
      </div>
    </div>
  `
  rootEl.innerHTML = template;
};

export default {
  render
};
