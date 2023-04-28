/**
 * const
 *  const 定义为一个不可变更的常量，
 * 在缺省类型注解的情况下，TypeScript 推断出它的类型直接由赋值字面量的类型决定
 */
{
    var str = 'this is string'; // str: 'this is string'
    var num = 1; // num: 1
    var bool = true; // bool: true
}
/**
 * let
 * 缺省显式类型注解的可变更的变量的类型转换为了赋值字面量类型的父类型，
 * 比如 str 的类型是 'this is string' 类型（这里表示一个字符串字面量类型）的父类型 string
 * num 的类型是 1 类型的父类型 number
 * let 可以更改为相同父类型的任何值
 */
{
    var str = 'this is string'; // str: string
    var num = 1; // num: number
    var bool = true; // bool: boolean
}
