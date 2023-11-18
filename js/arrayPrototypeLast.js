Array.prototype.last = function () {
  if (this.length > 0) {
    return this.pop();
  } else {
    return -1;
  }
};
