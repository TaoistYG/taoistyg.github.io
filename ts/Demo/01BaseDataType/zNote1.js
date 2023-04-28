/**
 * 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给其他类型。
 *
 */
// null和undefined赋值给string
var str1 = "666";
str1 = null;
str1 = undefined;
// null和undefined赋值给number
var num1 = 666;
num1 = null;
num1 = undefined;
// null和undefined赋值给object
var obj1 = {};
obj1 = null;
obj1 = undefined;
// null和undefined赋值给Symbol
var sym1 = Symbol("me");
sym1 = null;
sym1 = undefined;
// null和undefined赋值给boolean
var isDone1 = false;
isDone1 = null;
isDone1 = undefined;
// null和undefined赋值给bigint
var big1 = 100n;
big1 = null;
big1 = undefined;
/**
 * 如果你在tsconfig.json指定了"strictNullChecks":true ，null 和 undefined 只能赋值给 void 和它们各自的类型。
 * 单独设置strict为true，也是一样的效果
 */ 
