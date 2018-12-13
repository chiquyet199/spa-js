const render = (rootEl,props) => {
  const template =  `
    <div class="about">
      <h1>ABOUT</h1>
      <button onclick="spa_home.goTo('home')">Back To Home</button>
    </div>
  `;
  rootEl.innerHTML = template
};

export default {
  render,
};
