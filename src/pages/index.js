import home from "./home.js";
import about from "./about.js";

const initialize = () => {
  window[home.moduleIdentifier] = home.funcs;
  window[about.moduleIdentifier] = about.funcs;
};

export default { home, about, initialize };
