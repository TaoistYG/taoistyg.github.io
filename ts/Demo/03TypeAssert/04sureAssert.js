var x1;
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x1); // Error
function initialize() {
    x1 = 10;
}
// 该异常信息是说变量 x 在赋值前被使用了，要解决该问题，我们可以使用确定赋值断言
// 通过 let x!: number; 确定赋值断言，TypeScript 编译器就会知道该属性会被明确地赋值。
var x2;
initialize2();
console.log(2 * x2); // Ok
function initialize2() {
    x2 = 10;
}
