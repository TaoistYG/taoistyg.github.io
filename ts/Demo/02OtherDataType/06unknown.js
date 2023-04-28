/**
 * unknown与any一样，所有类型都可以分配给unknown
 */
var notSure = 4;
notSure = "maybe a string instead"; // OK
notSure = false; // OK
/**
 * unknown与any的最大区别是：
 * 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。
 * unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
 */
var notSure1 = 4;
var uncertain1 = notSure1; // OK
var notSure2 = 4;
var uncertain2 = notSure2; // OK
var notSure3 = 4;
var uncertain3 = notSure3; // Error
//dog 被声明为 unknown 类型，并赋值
//编译器无法推断其具体类型，因此在访问 dog.hello 属性时会报错
//如果不缩小类型，就无法对unknown类型执行任何操作：
function getDog() {
    return '123';
}
var dog = { hello: getDog };
console.log(dog.hello());
//这种机制起到了很强的预防性，更安全，这就要求我们必须缩小类型，我们可以使用typeof、类型断言等方式来缩小未知范围
function getDogName() {
    var x;
    return x;
}
var dogName = getDogName();
// 直接使用
var upName = dogName.toLowerCase(); // Error
// typeof
if (typeof dogName === 'string') {
    var upName_1 = dogName.toLowerCase();
}
// 类型断言
var upName1 = dogName.toLowerCase();
