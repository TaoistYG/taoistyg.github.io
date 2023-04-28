/**
 * 映射类型 => 根据旧的类型创建出新的类型, 我们称之为映射类型
 */

interface TestInterface{
    name:string,
    age:number
}

// 我们把上面定义的接口里面的属性全部变成可选
// 我们可以通过+/-来指定添加还是删除
type OptionalTestInterface<T> = {
    [p in keyof T]+?:T[p]
}
type newTestInterface = OptionalTestInterface<TestInterface>
// type newTestInterface = {
//    name?:string,
//    age?:number
// }

// 再加上只读
type OptionalTestInterface_readOnly<T> = {
    +readonly [p in keyof T]+?:T[p]
}

type newTestInterface_only = OptionalTestInterface_readOnly<TestInterface>
// type newTestInterface = {
//   readonly name?:string,
//   readonly age?:number
// }
