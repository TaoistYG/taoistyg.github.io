/**
 * 对数组类型的定义有两种方式
 */
let arr: string[] = ['1', '2'];
let arr2: Array<string> = ['1', '2'];

/**
 * 定义联合类型数组
 */
let arr_and:(number | string)[];
// 表示定义了一个名称叫做arr的数组, 
// 这个数组中将来既可以存储数值类型的数据, 也可以存储字符串类型的数据
arr_and = [1, 'b', 2, 'c'];

/**
 * 定义指定对象成员的数组
 */
interface arrObj {
    name: string,
    age?: number,
}
let arr_obj: arrObj[] = [{name: 'xiaoyang'}];