function element() {}
function expect() {}
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
