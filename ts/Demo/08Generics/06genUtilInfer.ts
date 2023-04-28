/**
 * 用 infer 声明一个类型变量并且对它进行使用
 */

type ReturnType_12<T> = T extends (
    ...args: any[]
) => infer R ? R : any;

// 上述infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用