
var callDir = require("../");
var assert  = require("assert");

var A = require('./src/module/a');

describe('test index.js', function() {
    it('the value of A() shoud be ' + __dirname, function() {
       if(A() != __dirname){
         throw new Error("path is not \"internal/modules/cjs\"");
       }
    });
});

