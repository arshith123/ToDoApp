import React from 'react'

const AddTodo = () => {
  return (
    <div className='form-container'>
        <form className='form-body'>
            <div className='row task-input'>
           <label>Task Name:</label>
           <input type="text" />
           </div>
           <div className='row task-input'>
           <label>Task Name:</label>
           <input type="text" />
           </div>
        </form>
    </div>
  )
}

export default AddTodo