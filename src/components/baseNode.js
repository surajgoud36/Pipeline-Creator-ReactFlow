import React from "react";
import { Position,useReactFlow } from "reactflow";
import NodeFieldRenderer from "./nodefields/nodeFieldRenderer";
import { useStore } from "../zustandStore/store";
import CustomHandle from "./handles/customHandle";

// Node Abstraction Component - Used by all nodes to render common UI elements like title, handles and fields
// abstract code for repetitve fields such as title, handles and common input fields.
// directly using the node's data object to store field values and eliminating the need for local state for each field.
function BaseNode({
  id,
  data,
  title,
  children,
  inputs = [],
  outputs = [],
  fields = [],
}) {
  // to delete node using it
  const { deleteElements } = useReactFlow();

  // zustand store function to update node field values in the global state
  const updateNodeField = useStore((state) => state.updateNodeField);

  // Each field value is stored in the node's state in the data object. 
  const handleChange = (key, value) => {
    updateNodeField(id, key, value);
  };
  // generating default node name from the node id 
  const getDefaultValue = () => {
    if (data.nodeType==='customInput') return id.replace("customInput-", "input_");
    if (data.nodeType === "customOutput") return id.replace("customOutput-", "output_");
    return id.replaceAll("-", "_");
    
  };
  const inputSpacing = 100 / (inputs.length + 1);
  const outputSpacing = 100 / (outputs.length + 1);
  return (
    <div className="base-node">

      {/* Title */}
      <div className="title">
        <h5>{title}</h5>

        {/* Node Name */}
        <input
          className="node-name"
          type="text"
          value={
            data.name ?? getDefaultValue()
          }
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      
      {/* Input Handlesb */}
      {inputs.map((input, index) => (
        <CustomHandle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: `${(index + 1) * inputSpacing}%`, ...input.style }}
        />
      ))}
      
      {/* Output Handles */}
      {outputs.map((output, index) => (
        <CustomHandle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: `${(index + 1) * outputSpacing}%`, ...output.style }}
        />
      ))}
      {/* Fields */}
      {fields.map((field, index) => (
        <NodeFieldRenderer
          field={field}
          data={data}
          key={index}
          value={
            data?.[field.key] ??
            field.defaultValue ??
            ""
          }
          onChange={(value) => handleChange(field.key, value)}
        />
      ))}

      {/* Node Content */}
      {children && <div>{children}</div>}
      <button title="deleteNode" className="node-delete-btn" onClick={()=>deleteElements({nodes:[{id}]})}>
        ✕
      </button>
    </div>
  );
}

export default BaseNode;
