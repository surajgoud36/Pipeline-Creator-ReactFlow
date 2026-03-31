// llmNode.js

import BaseNode from "../baseNode";
export const LLMNode = ({ id, data }) => {
  const fields = [
    {
      type: "output",
      label: "Response",
      key: "response",
      defaultValue: "This is the response from the LLM.",
    },
  ];
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system`, style: { top: `${100 / 3}%` } },
        { id: `${id}-prompt`, style: { top: `${200 / 3}%` } },
      ]}
      outputs={[{ id: `${id}-response` }]}
      fields={fields}
      data={data}
      id={id}
    ></BaseNode>
  );
};
