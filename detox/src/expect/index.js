class Element {
  constructor(matcher) {
    this.matcher = matcher;
  }

  /**
   * Taps on an element
   * @example
   * element(by.text("Button")).tap();
   */
  tap() {
    throw new Error("Not implemented on this platform");
  }
}

class Expect {
  constructor(element) {
    this.element = element;
  }

  /**
   * Fails if the selected element is invisible
   * @example
   * expect(element(by.text("Hello World"))).toBeVisible();
   */
  toBeVisible() {
    throw new Error("Not implemented on this platform");
  }
}
module.exports = { Element, Expect };
