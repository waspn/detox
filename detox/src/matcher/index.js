 

class Matcher {
  constructor(element) {
    this._element = element;
  }

  async toBeVisible() {
    throw new Error('toBeVisible needs to be implemented');
  }
  async toBeNotVisible() {
    throw new Error('toBeNotVisible needs to be implemented');
  }
  async toExist() {
    throw new Error('toExist needs to be implemented');
  }
  async toNotExist() {
    throw new Error('toNotExist needs to be implemented');
  }
  async toHaveText(value) {
    throw new Error('toHaveText needs to be implemented');
  }
  async toHaveLabel(value) {
    throw new Error('toHaveLabel needs to be implemented');
  }
  async toHaveId(value) {
    throw new Error('toHaveId needs to be implemented');
  }
  async toHaveValue(value) {
    throw new Error('toHaveValue needs to be implemented');
  }
}

module.exports = Matcher;
