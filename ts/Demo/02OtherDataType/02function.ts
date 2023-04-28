/**
 * 函数声明
 */
function sum(x: number, y: number): number {
    return x + y;
}

/**
 * 函数表达式
 */
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
}

/**
 * 用接口定义函数类型
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}
const getBool: SearchFunc = (a, b) => a > b;
console.log(getBool('2', '3'));

/**
 * 可选参数
 * 注意点：可选参数后面不允许再出现必需参数
 */
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

/**
 * 参数默认值
 */
function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');

/**
 * 剩余参数
 */
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let b3: any[] = [];
push(b3, 1, 2, 3);

/**
 * 函数重载
 */
type Types = number | string
function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Types, b:Types) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Semlinker', ' Kakuqo');
result.split(' ');