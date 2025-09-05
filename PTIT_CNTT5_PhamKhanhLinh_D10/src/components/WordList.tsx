import type { Todo } from "../types";
import TodoItem from "./WordItem";

type Props = {
  items: Todo[];
  onToggle: (id: string) => void;
  onPhone:(id. number);
  onDelete: (id: string) => void;
};

export default function TodoList({ items, onToggle,onPhone, onDelete }: Props) {
  if (!items.length) {
    return <p className="empty">Chưa có liên hệ nào.</p>;
  }
  return (
    <ul className="todo-list">
      {items.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onPhone={onPhone}
          onDelete={onDelete}
          
        />
      ))}
    </ul>
  );
}
