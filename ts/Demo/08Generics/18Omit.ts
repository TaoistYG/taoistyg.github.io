/**
 * Omit
 * Omit<T, K extends keyof any> 的作用是使用 T 类型中除了 K 类型的所有属性，来构造一个新的类型
 */

type Omit_demo<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * demo
 */
interface Todo_omit {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview_1 = Omit<Todo_omit, "description">;

const todo_omit: TodoPreview_1 = {
    title: "Clean room",
    completed: false,
};