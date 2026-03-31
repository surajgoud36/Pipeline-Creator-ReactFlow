import React from "react";
import BaseNode from "../baseNode";
function ApiNode({ id, data }) {
  const fields = [
    {
      type: "text",
      label: "method",
      key: "method",
    },
    {
      type: "text",
      label: "url",
      key: "endpoint",
    },
  ];
  return (
    <BaseNode
      id={id}
      data={data}
      title="API"
      inputs={[{ id: `${id}-request` }]}
      outputs={[{ id: `${id}-response` }]}
      fields={fields}
    ></BaseNode>
  );
}

export default ApiNode;
