/**
 * 使用一个字符串字面量类型作为变量的类型
 */

let hello: 'hello' = 'hello';
hello = 'hi'; // ts(2322) Type '"hi"' is not assignable to type '"hello"'

/**
 * 定义单个的字面量类型并没有太大的用处
 * 应用场景：可以把多个字面量类型组合成一个联合类型（后面会讲解），用来描述拥有明确成员的实用的集合
 * 通过使用字面量类型组合的联合类型，我们可以限制函数的参数为指定的字面量类型集合，然后编译器会检查参数是否是指定的字面量类型集合里的成员
 * 相较于使用 string 类型，使用字面量类型（组合的联合类型）可以将函数的参数限定为更具体的类型。这不仅提升了程序的可读性，还保证了函数的参数类型，可谓一举两得
 */

type Direction = 'up' | 'down';
function move(dir: Direction) {
  // ...
}
move('up'); // ok
move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'
