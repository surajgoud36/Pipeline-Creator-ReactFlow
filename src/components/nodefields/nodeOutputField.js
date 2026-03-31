import React from 'react'

// A text display of lable and the output content
function nodeOutputField({ label, value }) {
  return (
    <div className='output-field'>
      <p><strong>{label}:</strong><br></br>{value}</p>
    </div>
  )
}

export default nodeOutputField