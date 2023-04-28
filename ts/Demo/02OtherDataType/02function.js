/**
 * 函数声明
 */
function sum(x, y) {
    return x + y;
}
/**
 * 函数表达式
 */
var mySum = function (x, y) {
    return x + y;
};
var getBool = function (a, b) { return a > b; };
console.log(getBool('2', '3'));
/**
 * 可选参数
 * 注意点：可选参数后面不允许再出现必需参数
 */
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
/**
 * 参数默认值
 */
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat1 = buildName('Tom', 'Cat');
var tom1 = buildName('Tom');
/**
 * 剩余参数
 */
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var b3 = [];
push(b3, 1, 2, 3);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add('Semlinker', ' Kakuqo');
result.split(' ');
