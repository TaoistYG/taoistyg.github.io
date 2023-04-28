/**
 * 用来遍历枚举类型
 */
type Keys = "a" | "b" | "c"

type Obj =  {
    [p in Keys]: any
} // -> { a: any, b: any, c: any }