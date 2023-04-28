/**
 * Parameters<T> 的作用是用于获得函数的参数类型组成的元组类型。
 */
type Parameters_demo<T extends (...args: any) => any> = T extends (...args: infer P) => any
? P : never;

/**
 * demo
 */
type A = Parameters<() =>void>; // []
type B = Parameters<typeof Array.isArray>; // [any]
type C = Parameters<typeof parseInt>; // [string, (number | undefined)?]
type D = Parameters<typeof Math.max>; // number[]

