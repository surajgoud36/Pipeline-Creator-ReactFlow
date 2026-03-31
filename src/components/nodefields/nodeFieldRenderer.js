import React from "react";
import NodeTextField from "./nodeTextField";
import NodeSelectField from "./nodeSelectField";
import NodeOutputField from "./nodeOutputField";
import NodeTextArea from "./nodeTextArea";

// A parent component that renders child components based on the field type
function nodeFieldRenderer({ data, field, value, onChange }) {
  switch (field.type) {
    case "text":
      return (
        <NodeTextField label={field.label} value={value} onChange={onChange} />
      );
    case "output":
      return <NodeOutputField label={field.label} value={value} />;
    case "textarea":
      return (
        <NodeTextArea label={field.label} value={value} onChange={onChange} />
      );
    case "select":
      return (
        <NodeSelectField
          label={field.label}
          value={value}
          onChange={onChange}
          options={field.options}
        />
      );
    default:
      return null;
  }
}

export default nodeFieldRenderer;
