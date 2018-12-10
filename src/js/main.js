import store from "./store.js";
import utils from "./utils.js";
import rendering from "./rendering.js";
import pages from "../pages/index.js";

const run = () => {
  pages.initialize();
  const activePage = utils.getActivePage();
  rendering.render(activePage);
};

store.subcribe("stateChanged", run);

run();
