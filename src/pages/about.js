import nav from '../components/nav.js'

const render = (rootEl,props) => {
  const template =  `
    <div class="page about">
      ${nav.render()}
      <div class="content">
        <h1>THIS IS ABOUT PAGE</h1>
      </div>
    </div>
  `;
  rootEl.innerHTML = template
};

export default {
  render,
};
