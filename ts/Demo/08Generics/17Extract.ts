/**
 * Extract , Extract<T, U> 的作用是从 T 中提取出 U
 */
type Extract_demo<T, U> = T extends U ? T : never;

/**
 * demo
 */
type T0_1 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1_1 = Extract<string | number | (() => void), Function>; // () =>void