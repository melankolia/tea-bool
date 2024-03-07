export function isBool(v) {
    return Object.prototype.toString.call(v) === "[object Boolean]";
  }