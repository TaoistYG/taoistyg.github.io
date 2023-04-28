/**
 * keyof TypeScript 2.1版本引入
 * 获取某种类型的所有键，其返回类型是联合类型
 */

interface Person {
    name: string;
    age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number


/**
 * 在 TypeScript 中支持两种索引签名，数字索引和字符串索引：
 * 同时支持两种索引类型，就得要求数字索引的返回值必须是字符串索引返回值的子类
 * 当使用数值索引时，JavaScript 在执行索引操作时，会先把数值索引先转换为字符串索引
 * keyof { [x: string]: Person } 的结果会返回 string | number
 */

interface StringArray {
    // 字符串索引 -> keyof StringArray => string | number
    [index: string]: string; 
}

interface StringArray1 {
    // 数字索引 -> keyof StringArray1 => number
    [index: number]: string;
}

let K1: keyof boolean; // let K1: "valueOf"
let K2: keyof number; // let K2: "toString" | "toFixed" | "toExponential" | ...
let K3: keyof symbol; // let K1: "valueOf"

/**
 * keyof作用
 */

function prop(obj: object, key: string) {
    // return obj[key] // error 隐式地拥有 any 类型，因为 string 类型不能被用于索引 {} 类型
    return (obj as any)[key] // 暴力解法
}

// 首先定义了 T 类型并使用 extends 关键字约束该类型必须是 object 类型的子类型，
// 然后使用 keyof 操作符获取 T 类型的所有键，其返回类型是联合类型，
// 最后利用 extends 关键字约束 K 类型必须为 keyof T 联合类型的子类型
function prop_a<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}


type Todo = {
    id: number;
    text: string;
    done: boolean;
}

const todo: Todo = {
    id: 1,
    text: "Learn TypeScript keyof",
    done: false
}

function prop_n<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const id_1 = prop_n(todo, "id"); // const id: number
const text = prop_n(todo, "text"); // const text: string
const done = prop_n(todo, "done"); // const done: boolean
