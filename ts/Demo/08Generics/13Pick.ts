/**
 * Pick 从某个类型中挑出一些属性出来
 * 
 */
type Pick_demo<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * demo
 */
interface Todo_pick {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo_pick, "title" | "completed">;

const todo_p: TodoPreview = {
    title: "Clean room",
    completed: false,
};
