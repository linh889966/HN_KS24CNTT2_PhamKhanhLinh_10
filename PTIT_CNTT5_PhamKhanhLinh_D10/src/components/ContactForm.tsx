import { useState, useEffect } from "react";

interface Props {
  onSave: (name: string, phone: string) => void;
  editing: { id: number; name: string; phone: string } | null;
  onCancel: () => void;
}

export default function ContactForm({ onSave, editing, onCancel }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setPhone(editing.phone);
    } else {
      setName("");
      setPhone("");
    }
  }, [editing]);

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) {
      alert("Không được để trống tên hoặc số điện thoại!");
      return;
    }
    onSave(name, phone);
    setName("");
    setPhone("");
  };

  return (
    <div style={{ background: "#fff", padding: 15, borderRadius: 8, marginBottom: 20 }}>
      <h3>{editing ? "Sửa liên hệ" : "Thêm liên hệ mới"}</h3>
      <input
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 6, marginRight: 10 }}
      />
      <input
        placeholder="Số điện thoại"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ padding: 6, marginRight: 10 }}
      />
      <button onClick={handleSubmit}>
        {editing ? "Cập nhật" : "Thêm"}
      </button>
      {editing && (
        <button onClick={onCancel} style={{ marginLeft: 10 }}>
          Hủy
        </button>
      )}
    </div>
  );
}
