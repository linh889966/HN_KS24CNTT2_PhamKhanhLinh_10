import { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TodoInput({ onAdd }: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    const title = value.trim();
    if (!title) {
      setError("Vui lòng nhập tên liên hệ");
      return;
    }
    onAdd(title);
    setValue("");
    setError("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className="card">
      <h2 className="title">Quản lý liên hệ</h2>

      <p className="description">Thêm liên hệ mới</p>

      <div className="row">
        <input
          aria-label="Tên liên hệ"
          placeholder="Tên liên hệ…"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          onKeyDown={onKeyDown}
          className={`input ${error ? "input-error" : ""}`}
        />


         <input
          aria-labell="Số điện thoại"
          placeholder="Số điện thoại…"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError("");
          }}
          onKeyDown={onKeyDown}
          className={`input ${error ? "input-error" : ""}`}
        />



        <button className="btn" onClick={submit}>Thêm</button>
      </div>

      {error && <p className="error">{error}</p>}

     
    </div>
  );
}
