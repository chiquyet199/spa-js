const render = props => {
  const { title } = props;
  return `
    <div class="about">
      <h1>This is ${title} page</h1>
    </div>
  `;
};

export default {
  render
};
