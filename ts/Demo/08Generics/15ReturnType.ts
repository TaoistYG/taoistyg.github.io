/**
 * ReturnType,用来得到一个函数的返回值类型
 */

//infer在这里用于提取函数类型的返回值类型。
//ReturnType<T> 只是将 infer R 从参数位置移动到返回值位置，
//因此此时 R 即是表示待推断的返回值类型。
type ReturnType_demo<T extends (...args: any[]) => any> = T extends (
    ...args: any[]
) => infer R
    ? R
    : any;

/**
 * 
 * demo
 * ReturnType获取到 Func 的返回值类型为 string，
 * 所以，foo 也就只能被赋值为字符串了
 */
type Func_return = (value: number) => string;
const foo_return: ReturnType<Func_return> = "1";