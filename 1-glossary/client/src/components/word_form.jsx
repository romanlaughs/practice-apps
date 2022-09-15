import React from 'react';
import reactDom from 'react-dom';

function Word_Form(props) {
  return (
    <div>
      <div style={{padding: '5px'}}>
        <label htmlFor='word'>Input Your Word Here:</label>
        <input type='text' id='word' name='word' required minLength='4' maxLength='20' onChange={props.onChange}/>
      </div>
      <div style={{padding: '5px'}}>
        <label htmlFor='cat'>Input Your Category Here: </label>
        <input type='text' id='cat' name='cat' required minLength='4' maxLength='20' onChange={props.onChange}/>
      </div>
      <div style={{padding: '5px'}}>
        <label htmlFor='def'>Input Your Definition Here:</label>
        <input type='text' id='def' name='def' required minLength='10' maxLength='200' onChange={props.onChange}/>
      </div>
      <div style={{padding: '5px'}}>
        <button type='submit'>Add Word</button>
      </div>
    </div>
  )
}

export default Word_Form;