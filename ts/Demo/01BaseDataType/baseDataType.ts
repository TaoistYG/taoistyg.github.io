/**
 * JS的8种内置类型：string, number, boolean, undefined, null, object, bigInt, symbol
 */
let str: string = "xiaoyang";
let num: number = 24;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let obj: object = {x: 1};
let big: bigint = 100n; // 目标低于es2020时无法使用，需要在tsconfig.json里配置
let sym: symbol = Symbol("me");