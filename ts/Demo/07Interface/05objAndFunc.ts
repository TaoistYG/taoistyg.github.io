/**
 * 写法上的区别
 */
/**
 * Interface
 */
interface Point {
    x: number;
    y: number;
}

interface SetPoint {
    (x: number, y: number): void;
}

/**
 * type
 */
type Point_T = {
    x: number;
    y: number;
};

type SetPoint_T = (x: number, y: number) => void;