import React from "react";
import {
  BaseEdge,
  getSmoothStepPath,
  EdgeLabelRenderer,
  useReactFlow,
} from "reactflow";
function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
}) {
  // function to delete edge
  const { deleteElements } = useReactFlow();
  // creating a smooth step path from the edge props
  const [edgePath, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} markerEnd={markerEnd} />
      {/* Edge label with delete button */}
      <EdgeLabelRenderer>
        <button
          className="edge-delete-btn nodrag nopan"
          onClick={() => deleteElements({ edges: [{ id }] })}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
          }}
        >
          ✕
        </button>
      </EdgeLabelRenderer>
    </>
  );
}

export default CustomEdge;
