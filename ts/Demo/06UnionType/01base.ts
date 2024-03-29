/**
 * 联合类型表示取值可以为多种类型中的一种，使用 | 分隔每个类型
 */
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven'; // OK
myFavoriteNumber = 7; // OK

/**
 * 联合类型通常与 null 或 undefined 一起使用
 */
const sayHello = (name: string | undefined) => {
    /* ... */
};
sayHello("semlinker"); 
sayHello(undefined);

/**
 * 字面量类型，用来约束取值只能是某几个值中的一个
 */
let num_type1: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'mousemove';