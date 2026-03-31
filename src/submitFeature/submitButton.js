// submit.js
import { useStore } from "../zustandStore/store";
import {useState} from "react";
import { shallow } from "zustand/shallow";
import ResultModal from "./resultModal";
export const SubmitButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [result,setResult] = useState(null);
  // retreive nodes and edges from the zustand store
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow,
  );
  const handleSubmit = async () => {
    try {
      // extract only necessary information from nodes and edges to send to the backend
      const sendingNodes = nodes.map((node) => ({
        id: node.id,
      }));
      const sendingEdges = edges.map((edge) => ({
        source: edge.source,
        target: edge.target,
      }));
      // fetch request to the fast api backend
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: sendingNodes,
          edges: sendingEdges,
        }),
      });
      const result = await response.json();
      // save the result in state and update model state to display
      setResult(result);
      setShowModal(true);
    } catch (error) {
      console.error("Error during submission:", error);
    }
    // Here you can send `sendingNodes` and `sendingEdges` to your backend or process them as needed
  };
  return (
      <>
      <button title="Check DAG" type="submit" onClick={handleSubmit} className="submit-button">
        Submit
      </button>
      <ResultModal isOpen={showModal} onClose={()=>setShowModal(false)} data={result}/>

    </>
  );
};
