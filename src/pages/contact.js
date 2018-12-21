import nav from '../components/nav.js'

const render = (rootEl,props) => {
  const template = `
    <div class="page contact">
      ${nav.render()}
      <div class="content">
      </div>
    </div>
  `
  rootEl.innerHTML = template
};

export default {
  render,
};
