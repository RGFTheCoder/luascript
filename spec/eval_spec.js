var Lua = require("lib/lua.js");

exports.testArithmeticExpressions = function(test){
  test.equal(3, Lua.evalText("1+2"));
  test.equal(0, Lua.evalText("1+(2-3)"));
  test.equal(-2, Lua.evalText("-1+(2-3)"));
  test.equal(-10, Lua.evalText("10*(2-3)"));
  test.equal(-10, Lua.evalText("10/(2-3)"));
  test.equal(5, Lua.evalText("10/(2-3);2+3"));
  test.done();
};