import React from 'react'
import BaseNode from "../baseNode";
function NoteNode({id,data}) {
    const fields=[
        {
            type:"textarea",
            label:"Note",
            key:"note",
        }
    ]
  return (
    <BaseNode
      id={id}
      data={data}
      title="Note"
      fields={fields}
    ></BaseNode>
  )
}

export default NoteNode