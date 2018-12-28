let state = {
  activePage: "home",
  productDetail: null,
  shoppingCart: [],
  successShoopingCart: [],
  products: [
    {
      id: "1",
      name: "iPhone6",
      prize: 650
    },
    {
      id: "2",
      name: "iPhone6 Plus",
      prize: 700
    },
    {
      id: "3",
      name: "iPhone7",
      prize: 750
    },
    {
      id: "4",
      name: "iPhone7 Plus",
      prize: 800
    }
  ]
};
console.log(state);
const historyState = [{ ...state, _time: new Date() }];

const events = {};

const subcribe = (eventName, callback) => {
  if (!events.hasOwnProperty(eventName)) events[eventName] = [];
  events[eventName].push(callback);
};

const publish = (eventName, data) => {
  if (!events.hasOwnProperty(eventName)) return;
  events[eventName].map(callback => {
    callback(data);
  });
};

const getState = () => state;

const setState = newState => {
  state = newState;
  historyState.push({ ...newState, _time: new Date() });
  console.clear();
  console.table(historyState);
  publish("stateChanged", newState);
};

export default {
  getState,
  setState,
  subcribe
};
