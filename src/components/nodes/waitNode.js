import React from 'react'
import BaseNode from "../baseNode";

function WaitNode({id,data}) {
    const fields=[
        {
            type: "text",
            label: "Wait Time",
            key: "wait_time",
        },
        {
            type: "select",
            label: "Time Unit",
            key: "time_unit",
            options:[
                {value:"Seconds", label:"Seconds"}, 
                {value:"Minutes", label:"Minutes"},
                {value:"Hours", label:"Hours"}
            ]

        }
    ]
  return (
    <BaseNode
      id={id}
      data={data}
      title="Wait"
      inputs={[{ id: `${id}-trigger` }]}
      outputs={[{ id: `${id}-waitTime` }]}
      fields={fields}
    ></BaseNode>
  )
}

export default WaitNode