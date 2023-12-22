const chai = require('chai');
const assert = chai.assert;
const mountRoutes = require('../routes');

describe('mountRoutes', () => {
    it('should be a function', () => {
        assert.isFunction(mountRoutes);
    });
});
