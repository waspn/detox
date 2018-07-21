module.exports = function(invocationManager) {

  function ExpectElement(element) {
    
  }

  function expect(element) {
    if (element instanceof Element) return new ExpectElement(element);
    throw new Error(`expect() argument is invalid, got ${typeof element}`);
  }

  function exportGlobals() {
    global.expect = expect;
    // global.element = element;
    // global.waitFor = waitFor;
    // global.by = by;
  }

  return {
    exportGlobals,
    expect
    // waitFor,
    // element,
    // by
  };
};
