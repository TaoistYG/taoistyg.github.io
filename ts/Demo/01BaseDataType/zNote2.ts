let big2: bigint =  100n;
let num2: number = 6;
big2 = num2;
num2 = big2;

/**
 * number和bigint都表示数字，但是这两个类型不兼容
 * 抛出一个类型不兼容的 ts(2322) 错误。
 */