/**
 * Partial<T> 将类型的属性变成可选
 * keyof T 拿到 T 的所有属性名，
 * 然后使用 in 进行遍历，
 * 将值赋给 P，
 * 最后通过 T[P] 取得相应的属性值的类。
 * 中间的 ? 号，用于将所有属性变为可选
 */
// error 类型 "{ name: string; }" 中缺少属性 "id"，但类型 "UserInfo" 中需要该属性
var xiaoming = {
    name: 'xiaoming',
    // id: '23',
};
// =>
// interface NewUserInfo {
//     id?: string;
//     name?: string;
// }
var xiaoyang = {
    name: 'xiaoyang'
};
