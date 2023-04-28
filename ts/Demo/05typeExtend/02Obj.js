/**
 * 背景：const 并不是万灵药。对于对象和数组，仍然会存在问题
 */
var obj_o = {
    x: 1,
};
obj_o.x = 6; // OK 
// Type '"6"' is not assignable to type 'number'.
obj_o.x = '6'; // Error
// Property 'y' does not exist on type '{ x: number; }'.
obj_o.y = 8; // Error
// Property 'name' does not exist on type '{ x: number; }'.
obj_o.name = 'semlinker'; // Error
/**
 * TypeScript 试图在具体性和灵活性之间取得平衡。
 * 它需要推断一个足够具体的类型来捕获错误，但又不能推断出错误的类型。
 * 它通过属性的初始化值来推断属性的类型，当然有几种方法可以覆盖 TypeScript 的默认行为。
 */
// 1.提供显式类型注释
// Type is { x: 1 | 3 | 5; }
var obj_a = {
    x: 1
};
// 2.使用const断言
// Type is { x: number; y: number; }
var obj1_a = {
    x: 1,
    y: 2
};
// Type is { x: 1; y: number; }
var obj2 = {
    x: 1,
    y: 2,
};
// Type is { readonly x: 1; readonly y: 2; }
var obj3 = {
    x: 1,
    y: 2
};
/**
 * 当你在一个值之后使用 const 断言时，TypeScript 将为它推断出最窄的类型，没有拓宽。
 */
// Type is number[]
var arr1_12 = [1, 2, 3];
// Type is readonly [1, 2, 3]
var arr2_13 = [1, 2, 3];
