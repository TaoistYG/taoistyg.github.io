/**
 * any赋值
 */
// 普通类型，在赋值过程中改变类型是不被允许的
var a1 = 'seven';
a1 = 7;
// any类型允许赋值
var a2 = 666;
a2 = "Semlinker";
a2 = false;
a2 = 66;
a2 = undefined;
a2 = null;
a2 = [];
a2 = {};
/**
 * any上访问任何属性都是允许的,也允许调用任何方法
 * 编译js通过，但是执行js遇到语法错误依旧报错
 */
var anyThing = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
var anyThing1 = 'Tom';
anyThing1.setName('Jerry');
anyThing1.setName('Jerry').sayHello();
anyThing1.myName.setFirstName('Cat');
/**
 * 变量如果在申明时未指定类型，则会被识别为任意值类型
 */
var something;
something = 'seven';
something = 7;
something = {
    setName: Function,
};
something.setName('Tom');
// 等价于 let something: any
