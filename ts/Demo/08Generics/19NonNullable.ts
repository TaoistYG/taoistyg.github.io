/**
 * NonNullable<T> 的作用是用来过滤类型中的 null 及 undefined 类型。
 */

type NonNullable_demo<T> = T extends null | undefined ? never : T;

/**
 * demo
 */
type T0_2 = NonNullable<string | number | undefined>; // string | number
type T1_2 = NonNullable<string[] | null | undefined>; // string[]