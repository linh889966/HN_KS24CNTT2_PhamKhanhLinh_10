interface Props {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({ open, message, onConfirm, onCancel }: Props) {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "white", padding: 20, borderRadius: 8, minWidth: 300 }}>
        <p>{message}</p>
        <div style={{ textAlign: "right" }}>
          <button onClick={onCancel} style={{ marginRight: 10 }}>
            Hủy
          </button>
          <button onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </div>
  );
}
