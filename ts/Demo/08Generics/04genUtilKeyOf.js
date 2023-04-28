/**
 * keyof TypeScript 2.1版本引入
 * 获取某种类型的所有键，其返回类型是联合类型
 */
var K1; // let K1: "valueOf"
var K2; // let K2: "toString" | "toFixed" | "toExponential" | ...
var K3; // let K1: "valueOf"
/**
 * keyof作用
 */
function prop(obj, key) {
    // return obj[key] // error 隐式地拥有 any 类型，因为 string 类型不能被用于索引 {} 类型
    return obj[key]; // 暴力解法
}
// 首先定义了 T 类型并使用 extends 关键字约束该类型必须是 object 类型的子类型，
// 然后使用 keyof 操作符获取 T 类型的所有键，其返回类型是联合类型，
// 最后利用 extends 关键字约束 K 类型必须为 keyof T 联合类型的子类型
function prop_a(obj, key) {
    return obj[key];
}
var todo = {
    id: 1,
    text: "Learn TypeScript keyof",
    done: false
};
function prop_n(obj, key) {
    return obj[key];
}
var id_1 = prop_n(todo, "id"); // const id: number
var text = prop_n(todo, "text"); // const text: string
var done = prop_n(todo, "done"); // const done: boolean
