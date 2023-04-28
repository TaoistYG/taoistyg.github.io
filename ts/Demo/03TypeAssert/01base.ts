/** 介绍 */

/**
 * TypeScript 类型检测无法做到绝对智能，毕竟程序不能像人一样思考。有时会碰到我们比 TypeScript 更清楚实际类型的情况
 */

const arrayNumber: number[] = [1, 2, 3, 4];
const greaterThan2: number = arrayNumber.find(num => num > 2); // 提示 ts(2322)

// 使用断言，作用于类型层面的强制类型转换
const arrayNumber1: number[] = [1, 2, 3, 4];
const greaterThan21: number = arrayNumber1.find(num => num > 2) as number; // ok