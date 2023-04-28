/** 介绍 */
/**
 * TypeScript 类型检测无法做到绝对智能，毕竟程序不能像人一样思考。有时会碰到我们比 TypeScript 更清楚实际类型的情况
 */
var arrayNumber = [1, 2, 3, 4];
var greaterThan2 = arrayNumber.find(function (num) { return num > 2; }); // 提示 ts(2322)
// 使用断言，作用于类型层面的强制类型转换
var arrayNumber1 = [1, 2, 3, 4];
var greaterThan21 = arrayNumber1.find(function (num) { return num > 2; }); // ok
