import React from 'react'
// A select dropdown field for node configuration using the options provided by the custom component
function nodeSelectField({ label, value, onChange, options }) {
  return (
    <div className='select-field'>
      <label>
        <p>{`${label}:`}</p>
        <select value={value || 'Text'} onChange={(e)=> onChange(e.target.value)}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default nodeSelectField