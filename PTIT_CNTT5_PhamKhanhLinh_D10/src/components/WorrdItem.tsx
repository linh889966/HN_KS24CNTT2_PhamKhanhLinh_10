import type { Todo } from "../types";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onPhone: (id: number) => void;
  onDelete: (id: string) => void;

};

export default function TodoItem({ todo, onToggle, onPhone, onDelete }: Props) {
  return (
    <li className="todo-item">
      <label className="checkbox">
        
        <span className={`todo-text ${todo.completed ? "done" : ""}`}>
          {todo.title}
        </span>
      </label>


      <label className="checkbox">
        <span className={`todo-text ${todo.completed ? "done" : ""}`}>
          {todo.title}
        </span>
      </label>

      <div className="actions">
       
        <span>
          <button className="icon-btn edit" onClick={() => onEdit(todo.id)}>
            Sửa ✏️
          </button>
        </span>

        <button
          className="icon-btn danger"
          onClick={() => onDelete(todo.id)}
          aria-label="Xóa liên hệ"
          title="Xóa"
        >
         Xóa 🗑
        </button>
      </div>
    </li>
  );
}
