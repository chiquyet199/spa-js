export default class PubSub {
  constructor() {
    this.events = {};
  }

  subcribe(eventName, callback) {
    if (!this.events.hasOwnProperty(eventName)) this.events[eventName] = [];

    this.events[eventName].push(callback);
    return this.events;
  }

  publish(eventName, data) {
    if (!this.events.hasOwnProperty(eventName)) return;
    const callbackCaller = data => callback(data);
    this.events[eventName].map(callbackCaller(data));
  }
}
