/**
 * 只读属性创建时使用
 */
interface Person {
    readonly name_p: string;
    age_p?: number,
}

/**
 * TypeScript 还提供了 ReadonlyArray<T> 类型，
 * 它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
 */
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12;
ro.push(5);
ro.length = 100;
a = ro;