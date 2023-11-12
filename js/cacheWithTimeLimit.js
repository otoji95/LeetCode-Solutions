class TimeLimitedCache {
  constructor() {
    this.store = {};
  }

  set(key, value, duration) {
    let isNewKey = !(key in this.store);
    if (this.store[key]) {
      clearTimeout(this.store[key].timeout);
    }

    const timeout = setTimeout(() => {
      delete this.store[key];
    }, duration);

    this.store[key] = { value, timeout };
    return !isNewKey;
  }

  get(key) {
    if (this.store[key]) {
      return this.store[key].value;
    } else {
      return -1;
    }
  }

  count() {
    return Object.keys(this.store).length;
  }
}
