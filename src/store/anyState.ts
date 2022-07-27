class AnyState {
  private state: { [key: string]: any };
  private watchers: { [key: string]: (any) => void } = {};
  constructor(state: any) {
    this.state = state;
    this.watchers = {};
    this.setItem = this.setItem.bind(this);
    this.getItem = this.getItem.bind(this);
    this.watch = this.watch.bind(this);
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
    Object.keys(this.watchers).forEach((key) => {
      this.watchers[key](this.state[key]);
    });
  }

  setItem(key, value) {
    this.state[key] = value;
    if (this.watchers[key]) {
      this.watchers[key](value);
    }
  }

  getItem(key) {
    return this.state[key];
  }

  watch(key, callback) {
    console.log(typeof callback)
    if (typeof callback !== 'function') {
      throw new Error('callback must be a function');
    }
    if (this.state[key] === undefined) {
      throw new Error(`state ${key} must be defined on constructor`);
    }

    if (this.watchers[key]) {
      console.warn(`${key} is already watched`);
    }
    this.watchers[key] = callback;
  }
}

export default AnyState;
