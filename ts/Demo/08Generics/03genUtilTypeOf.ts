/**
 * typeof
 * 主要用途是在类型上下文中获取变量或者属性的类型
 */
interface Person {
    name: string;
    age: number;
}

const sem: Person = { name: 'aaa', age: 20 };
type Sem = typeof sem; // type Sem = Person

const lolo: Sem = { name: "lolo", age: 5 }


// 对嵌套对象操作
const Message = {
    name: "jimmy",
    age: 18,
    address: {
        province: '四川',
        city: '成都'   
    }
}
type message = typeof Message;
/*
type message = {
    name: string;
    age: number;
    address: {
        province: string;
        city: string;
    };
}
*/


// 获取函数对象的类型
function toArray(x: number): Array<number> {
    return [x];
}
type Func = typeof toArray; // -> (x: number) => number[]