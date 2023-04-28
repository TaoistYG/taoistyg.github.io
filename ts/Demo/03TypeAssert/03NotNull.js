/**
 * 在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。
 * 具体而言，x! 将从 x 值域中排除 null 和 undefined 。
 */
var mayNullOrUndefinedOrString;
mayNullOrUndefinedOrString.toString(); // ok
mayNullOrUndefinedOrString.toString(); // ts(2531)
function myFunc(numGenerator) {
    // Object is possibly 'undefined'.(2532)
    // Cannot invoke an object which is possibly 'undefined'.(2722)
    var num1 = numGenerator(); // Error
    var num2 = numGenerator(); //OK
}
