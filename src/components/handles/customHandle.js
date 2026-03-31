import React from "react";
import { Handle } from "reactflow";
import { useStore } from "../../zustandStore/store";
function CustomHandle({ key, type, position, id, style }) {

  const edges = useStore((state) => state.edges);
  // check if the handle is connected to any edge 
  // conditionally apply styling using the result
  const isHandleConnected = (id, type) => {
    return edges.some((edge) => {
      if (type === "target") return edge.targetHandle === id;
      if (type === "source") return edge.sourceHandle === id;
      return false;
    });
  };
  // Extract variable name from handle id for tooltip, as the text node has multiples handles for variable names
  const getHandleName = (id) => {
    const match = id.match(/^text-\d+-input-(.+)$/);

    const variable = match ? match[1] : null;
    return variable;
  };
  const isConnected = isHandleConnected(id, type);
  return (
    <Handle
      id={id}
      type={type}
      position={position}
      key={key}
      style={style}
      title={getHandleName(id)}
      className={`custom-handle ${isConnected ? "connected" : ""}`}
    />
  );
}

export default CustomHandle;
