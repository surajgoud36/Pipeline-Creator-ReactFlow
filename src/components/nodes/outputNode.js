// outputNode.js

import BaseNode from "../baseNode";
export const OutputNode = ({ id, data }) => {
  const fields = [
    {
      type: "select",
      label: "Type",
      key: "select_type",
      options: [
        { value: "Text", label: "Text" },
        { value: "File", label: "File" },
      ],
    },
    {
      type: "output",
      label: "Output",
      key: "output_value",
      defaultValue: "Output generated",
    },
  ];
  return (
    <BaseNode
      id={id}
      data={data}
      inputs={[{ id: `${id}-value` }]}
      title="Output"
      fields={fields}
    ></BaseNode>
  );
};
