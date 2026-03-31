// draggableNode.js
import { useStore } from "../zustandStore/store";
export const DraggableNode = ({ type, label }) => {
  const addNode = useStore((state) => state.addNode);
  const getNodeID = useStore((state) => state.getNodeID);

  // generate a new node on click
  const clickAddNode = () => {
    const newId = getNodeID(type);
    const newNode = {
      id: newId,
      type,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
      data: { id: newId, nodeType: type },
    };
    addNode(newNode);
  };
  // Initiate drag event and store details
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onClick={clickAddNode}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "30px",
        maxWidth: "100px",
        padding: "8px 12px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#1C2536",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
