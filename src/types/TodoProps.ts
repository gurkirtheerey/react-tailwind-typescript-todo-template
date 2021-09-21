import TodoType from "./TodoType";

export interface TodoProps {
  todo: TodoType,
  handleDelete: (todo: TodoType) => any
}