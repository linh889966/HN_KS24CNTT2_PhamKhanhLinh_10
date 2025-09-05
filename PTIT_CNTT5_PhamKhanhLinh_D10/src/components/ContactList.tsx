interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface Props {
  items: Contact[];
  onEdit: (c: Contact) => void;
  onDelete: (c: Contact) => void;
}

export default function ContactList({ items, onEdit, onDelete }: Props) {
  return (
    <table border={1} cellPadding={6} style={{ width: "100%", background: "white" }}>
      <thead style={{ background: "#f0f0f0" }}>
        <tr>
          <th>Tên liên hệ</th>
          <th>Số điện thoại</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan={3} style={{ textAlign: "center" }}>
              Chưa có dữ liệu
            </td>
          </tr>
        ) : (
          items.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>
                <button onClick={() => onEdit(c)}>Sửa</button>{" "}
                <button onClick={() => onDelete(c)}>Xóa</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
