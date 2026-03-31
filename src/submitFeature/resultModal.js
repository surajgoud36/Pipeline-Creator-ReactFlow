import React from 'react'

function ResultModal({isOpen, onClose, data}) {
    if(!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e)=> e.stopPropagation()}>
        <h2>Pipeline Analysis</h2>

        <div className="modal-content">
          <p><strong>Nodes:</strong> {data?.num_nodes}</p>
          <p><strong>Edges:</strong> {data?.num_edges}</p>
          <p><strong>Is DAG:</strong> {data?.is_dag ? "Yes ✅" : "No ❌"}</p>
        </div>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default ResultModal