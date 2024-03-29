/**
 * 在对象中获取一些属性的值
 * 当打印对象中不存在的属性，ts不报错，打印undefined
 */

let person_1 = {
    name: 'musion',
    age: 35
}

function getValues_1(person: any, keys: string[]) {
    return keys.map(key => person[key])
}

console.log(getValues_1(person_1, ['name', 'age'])) // ['musion', 35]
console.log(getValues_1(person_1, ['gender'])) // [undefined]

//通过 索引类型查询和 索引访问 操作符 
//T[K]表示对象T的属性K所表示的类型，在上述例子中，T[K][] 表示变量T取属性K的值的数组
function getValues<T, K extends keyof T>(person: T, keys: K[]): T[K][] {
    return keys.map(key => person[key]);
}

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'musion',
    age: 35
}

getValues(person, ['name']) // ['musion']
getValues(person, ['gender']) // 报错：
// Argument of Type '"gender"[]' is not assignable to parameter of type '("name" | "age")[]'.
// Type "gender" is not assignable to type "name" | "age".