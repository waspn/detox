const GreyActions = require('../ios/earlgreyapi/GREYActions');
const GreyInteraction = require('../ios/earlgreyapi/GREYInteraction');
const GreyMatchers = require('../ios/earlgreyapi/GREYMatchers');
const invoke = require('../invoke');
const { Element, Expect } = require('./');

function wrapAction(self, fn) {
  return async (...args) => {
    const im = global.invocationManager;
    const result = fn(...args);
    const call = GreyInteraction.performAction(
      invoke.callDirectly(invoke.call(invoke.EarlGrey.instance, 'detox_selectElementWithMatcher:', self.matcher._call)()),
      invoke.callDirectly(result)
    );
    im.execute(call);
  };
}

function wrapMatcher(self, fn) {
  return async (...args) => {
    const im = global.invocationManager;
    const result = fn(...args);
    const call = GreyInteraction.assertWithMatcher(invoke.callDirectly(self.element._call()), invoke.callDirectly(result));

    im.execute(call);
  };
}

class IosElement extends Element {
  constructor(matcher) {
    super(matcher);

    // Do this in a loop or with a decorator or try to handle it in parent?
    this.tap = wrapAction(this, this.tap);
  }

  tap() {
    return GreyActions.actionForTap();
  }
}

class IosExpect extends Expect {
  constructor(element) {
    super(element);

    // Do this in a loop or with a decorator or try to handle it in parent?
    this.toBeVisible = wrapMatcher(this, this.toBeVisible);
  }

  toBeVisible() {
    return GreyMatchers.matcherForSufficientlyVisible();
  }
}

function element(matcher) {
  return new IosElement(matcher);
}
function expect(element) {
  // Check if it's a iOS Element?
  return new IosExpect(element);
}
function waitFor() {}
const by = {};

module.exports = {
  exportGlobals() {
    global.element2 = element;
    global.expect2 = expect;
    global.waitFor2 = waitFor;
    global.by2 = by;
  }
};
