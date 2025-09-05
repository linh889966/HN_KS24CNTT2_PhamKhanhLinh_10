import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Pagination from "./components/Pagination";
import ConfirmDialog from "./components/ConfirmDialog";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [editing, setEditing] = useState<Contact | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const [toDelete, setToDelete] = useState<Contact | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("contacts");
    if (data) setContacts(JSON.parse(data));
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const saveContact = (name: string, phone: string) => {
    const norm = phone.replace(/\D/g, "");
    const exist = contacts.some(
      (c) => c.phone.replace(/\D/g, "") === norm && c.id !== editing?.id
    );
    if (exist) {
      alert("Số điện thoại đã tồn tại!");
      return;
    }
    if (editing) {
      setContacts(
        contacts.map((c) =>
          c.id === editing.id ? { ...c, name, phone } : c
        )
      );
      setEditing(null);
    } else {
      setContacts([{ id: Date.now(), name, phone }, ...contacts]);
      setPage(1);
    }
  };

  const confirmDelete = () => {
    if (toDelete) {
      const newList = contacts.filter((c) => c.id !== toDelete.id);
      setContacts(newList);
      setToDelete(null);
      const totalPages = Math.max(1, Math.ceil(newList.length / pageSize));
      if (page > totalPages) setPage(totalPages);
    }
  };

  const start = (page - 1) * pageSize;
  const pageItems = contacts.slice(start, start + pageSize);
  const totalPages = Math.max(1, Math.ceil(contacts.length / pageSize));

  return (
    <div style={{ maxWidth: 700, margin: "20px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ background: "#2e7d32", color: "white", padding: 10, borderRadius: 8 }}>
        📇 Quản lý liên hệ
      </h1>
      <ContactForm onSave={saveContact} editing={editing} onCancel={() => setEditing(null)} />
      <ContactList items={pageItems} onEdit={(c) => setEditing(c)} onDelete={(c) => setToDelete(c)} />
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      <ConfirmDialog
        open={!!toDelete}
        message={`Bạn có chắc muốn xóa ${toDelete?.name}?`}
        onConfirm={confirmDelete}
        onCancel={() => setToDelete(null)}
      />
    </div>
  );
}

export default App;
