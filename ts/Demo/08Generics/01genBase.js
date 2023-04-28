/**
 *
 * 可以引入希望定义的任何数量的类型变量。
 * 比如我们引入一个新的类型变量 U，用于扩展我们定义的 identity 函数
 */
function identity(value, message) {
    console.log(message);
    return value;
}
// 为类型变量显式设定值
console.log(identity(12, 'aaa'));
// 使编译器自动选择这些类型，从而使代码更简洁。我们可以完全省略尖括号
console.log(identity(23, 'dads'));
