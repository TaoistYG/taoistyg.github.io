/**
 * 定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束到函数返回值的类型方便之后使用
 */
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});