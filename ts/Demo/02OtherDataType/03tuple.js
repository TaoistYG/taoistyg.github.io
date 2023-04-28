/**
 * 保存定长定数据类型的数据
 * 注意，元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访问会提示错误。如果一个数组中可能有多种类型，数量和类型都不确定，那就直接any[]
 */
var x;
// 类型必须匹配且个数必须为2
x = ['hello', 10]; // OK 
// x = ['hello', 10, 10]; // Error 
// x = [10, 'hello']; // Error
// -------------------------------------------------------------------------------------
/**
 * 元组解构赋值
 */
var employee = [1, "Semlinker"];
var id = employee[0], username = employee[1];
console.log("id: ".concat(id)); // id: 1
console.log("username: ".concat(username)); // username: Semlinker
// 在解构赋值时，如果解构数组元素的个数是不能超过元组中元素的个数，否则也会出现错误
// error
// let employee2: [number, string] = [1, "Semlinker"];
// let [id2, username2, age2] = employee2;
// -------------------------------------------------------------------------------------
/**
 * 元组类型的可选元素
 */
var optionalTuple;
optionalTuple = ["Semlinker", true];
console.log("optionalTuple : ".concat(optionalTuple)); // optionalTuple: Semlinker,true
optionalTuple = ["Kakuqo"];
console.log("optionalTuple : ".concat(optionalTuple)); // optionalTuple : Kakuqo
var x_ = [10]; // 一维坐标点
var xy = [10, 20]; // 二维坐标点
var xyz = [10, 20, 10]; // 三维坐标点
console.log(x_.length); // 1
console.log(xy.length); // 2
console.log(xyz.length); // 3
var restTuple = [666, "Semlinker", "Kakuqo", "Lolo"];
console.log(restTuple[0]);
console.log(restTuple[1]);
// -------------------------------------------------------------------------------------
/**
 * 元组类型只读
 * TypeScript 3.4 还引入了对只读元组的新支持。我们可以为任何元组类型加上 readonly 关键字前缀，以使其成为只读元组
 */
var point = [10, 20];
// Cannot assign to '0' because it is a read-only property.
// point[0] = 1;
// Property 'push' does not exist on type 'readonly [number, number]'.
// point.push(0);
// Property 'pop' does not exist on type 'readonly [number, number]'.
// point.pop();
// Property 'splice' does not exist on type 'readonly [number, number]'.
// point.splice(1, 1);
