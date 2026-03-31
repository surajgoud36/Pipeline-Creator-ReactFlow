import React from "react";
import { useRef } from "react";
function NodeTextArea({ label, value, onChange }) {
  const ref = useRef(null);
  const handleInput = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="text-area-field">
      <label>
        <p>{`${label}:`}</p>
        <textarea
          ref={ref}
          value={value}
          onChange={handleInput}
          className="auto-textarea"
          rows={1}
        />
      </label>
    </div>
  );
}

export default NodeTextArea;
