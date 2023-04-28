/**
 * 基础demo
 */
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25, // 缺少属性会报错
    // gender: 'male', // 多属性也会报错
}