import React, { useState } from 'react'

function ToDoInput(props) {

    const [inputText, setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }

  return (
    <div className='input-container'>
        <input type='text' 
        className='input-box-todo' 
        placeholder='Enter your To-Do'
        value={inputText}
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress }
        />
        <button className='add-btn'
        onClick={()=>{
            props.addList(inputText)
            setInputText("")
        }}>+</button>

    </div>
  )
}

export default ToDoInput
