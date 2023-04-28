/**
 * Partial<T> 将类型的属性变成可选
 * keyof T 拿到 T 的所有属性名，
 * 然后使用 in 进行遍历，
 * 将值赋给 P，
 * 最后通过 T[P] 取得相应的属性值的类。
 * 中间的 ? 号，用于将所有属性变为可选
 */

type Partial_demo<T> = {
    [P in keyof T]?: T[P];
};

/**
 * demo
 */
interface UserInfo {
    id: string;
    name: string;
}

// error 类型 "{ name: string; }" 中缺少属性 "id"，但类型 "UserInfo" 中需要该属性
const xiaoming: UserInfo = {
    name: 'xiaoming',
    // id: '23',
}

type NewUserInfo = Partial<UserInfo>;
// =>
// interface NewUserInfo {
//     id?: string;
//     name?: string;
// }

const xiaoyang: NewUserInfo = {
    name: 'xiaoyang'
}

/**
 * 弊端：不支持嵌套属性，处理多层的话只能自己去实现
 */

// DeepPartial
type DeepPartial<T> = {
    // 如果是object，则递归类型
    [U in keyof T]?: T[U] extends object
        ? DeepPartial<T[U]>
        : T[U]
}

type PartialedWindow = DeepPartial<T>; // 现在T上所有属性都变成了可选啦
