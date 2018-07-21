class Element {
  constructor(matcher) {
    this.matcher = matcher;
  }
}

class Expect {
  constructor(element) {
    this.element = element;
  }
}
module.exports = { Element, Expect };
