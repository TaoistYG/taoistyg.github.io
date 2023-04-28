/**
 * JS的8种内置类型：string, number, boolean, undefined, null, object, bigInt, symbol
 */
var str = "xiaoyang";
var num = 24;
var bool = false;
var u = undefined;
var n = null;
var obj = { x: 1 };
var big = 100n; // 目标低于es2020时无法使用，需要在tsconfig.json里配置
var sym = Symbol("me");
