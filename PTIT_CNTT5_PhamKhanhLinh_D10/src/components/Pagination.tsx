interface Props {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;
  return (
    <div style={{ marginTop: 10, textAlign: "center" }}>
      <button onClick={() => onChange(page - 1)} disabled={page === 1}>
        ‹
      </button>
      <span style={{ margin: "0 10px" }}>
        Trang {page}/{totalPages}
      </span>
      <button onClick={() => onChange(page + 1)} disabled={page === totalPages}>
        ›
      </button>
    </div>
  );
}
