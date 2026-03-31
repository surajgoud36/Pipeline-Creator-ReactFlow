import React from "react";
import BaseNode from "../baseNode";
function ImageNode({ id, data }) {
  const fields = [
    {
      type: "text",
      label: "search image",
      key: "url",
    },
  ];
  return (
    <BaseNode
      id={id}
      data={data}
      title="Image"
      inputs={[{ id: `${id}-url` }]}
      outputs={[{ id: `${id}-output` }]}
      fields={fields}
    >
      {/* Render the children in baseNode */}
      <div className="image-node">
       
        <div className="operations-container">
          <div className="operation">
            <h6>Text to Image</h6>
            <span>{`>`}</span>
            <p>Generate image from text</p>
          </div>
          <div className="operation">
            <h6>Image to text</h6>
            <span>{`>`}</span>
            <p>Generate text from image</p>
          </div>
          <div className="operation">
            <h6>Image to Image</h6>
            <span>{`>`}</span>
            <p>Modify Image</p>
          </div>
        </div>
      </div>
    </BaseNode>
  );
}

export default ImageNode;
