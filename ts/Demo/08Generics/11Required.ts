/**
 * Required将类型的属性变成必选
 * 
 * -? 是代表移除 ? 这个 modifier 的标识
 */

type Required_demo<T> = { 
    [P in keyof T]-?: T[P] 
};