class Element {
  constructor(matcher) {
    this.matcher = matcher;
  }

  tap() {
    throw new Error("Not implemented on this platform");
  }
}

class Expect {
  constructor(element) {
    this.element = element;
  }

  toBeVisible() {
    throw new Error("Not implemented on this platform");
  }
}
module.exports = { Element, Expect };
