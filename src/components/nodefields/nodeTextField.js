import React from "react";

function nodeTextField({ label, value, onChange }) {
  return (
    <div className="text-field">
      <label>
        <p>{`${label}:`}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input-name-field"
        />
      </label>
    </div>
  );
}

export default nodeTextField;
