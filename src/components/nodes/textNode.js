// textNode.js

import { useMemo, useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";
import BaseNode from "../baseNode";
export const TextNode = ({ id, data }) => {
  const updateNodeInternals = useUpdateNodeInternals();
  // Extract valid JS Variables
  const extractVariables = (text) => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

    const variables = new Set();
    let match;

    while ((match = regex.exec(text)) !== null) {
      variables.add(match[1]);
    }

    return Array.from(variables);
  };

  // Generate dynamic input handles based on extracted variables
  const text = data.textarea ?? "{{input}}";
  const variables = useMemo(() => extractVariables(text), [text]);

  const dynamicInputs = useMemo(() => {
    const generateHandles = (variables) => {
      const spacing = 100 / (variables.length + 1);
      return variables.map((variable, index) => ({
        id: `${id}-input-${variable}`,
        style: {
          top: `${(index + 1) * spacing}%`,
        },
      }));
    };
    return generateHandles(variables);
  }, [variables, id]);
  const fields = [
    {
      type: "textarea",
      label: "Text",
      key: "textarea",
      defaultValue: "{{input}}",
    },
  ];

  // Update node internals to for render purposes wheneve the handle count changes
  useEffect(() => {
    updateNodeInternals(id);
  }, [dynamicInputs, id, data.text, updateNodeInternals]);
  return (
    <BaseNode
      title={"TEXT"}
      id={id}
      data={data}
      inputs={dynamicInputs}
      outputs={[{ id: `${id}-output` }]}
      fields={fields}
    ></BaseNode>
  );
};
