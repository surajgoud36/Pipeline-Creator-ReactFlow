import React from 'react'
import BaseNode from "../baseNode";
function SemanticSearchNode({id,data}) {
    const fields=[
        {
            type:"select",
            label: "Embedding Model",
            key: "embedding_model",
            options: [
              { value: "Model_A", label: "OpenAi" },
              { value: "Model_B", label: "Claude" },
              { value: "Model_C", label: "Gemini" },
            ],
        },
        {
            type:"text",
            label:"Search Query",
            key:"search_query",

        },
        {
            type:"text",
            label:"Documents for Search",
            key:"documents",
        }
    ]
  return (
    <BaseNode
      id={id}
      data={data}
      title="Semantic Search"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
      fields={fields}
    >
     
    </BaseNode>
  )
}

export default SemanticSearchNode