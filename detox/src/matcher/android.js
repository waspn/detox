const invoke = require('../invoke');
const DetoxMatcherApi = require('../android/espressoapi/DetoxMatcher');

const Matcher = require('./index');

class AndroidMatcher extends Matcher {
    async toBeVisible() {
        const matcher = invoke.callDirectly(DetoxMatcherApi.matcherForSufficientlyVisible())
        await this.invoke(invoke.Android.Class(DetoxAssertion), 'assertMatcher', this._element._call, matcher);
    }
}

module.exports =  AndroidMatcher;
