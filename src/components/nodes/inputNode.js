// inputNode.js

import BaseNode from "../baseNode";
export const InputNode = ({ id, data }) => {
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
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      inputs={[]}
      outputs={[{ id: `${id}-value` }]}
      fields={fields}
    ></BaseNode>
  );
};
