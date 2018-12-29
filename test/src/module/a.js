
const getCallerDir = require('../../../');
 
function A() {
    return getCallerDir();
}

module.exports = A;
