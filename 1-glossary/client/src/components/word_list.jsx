import React from 'react';
import reactDom from 'react-dom';

function Word_list(props) {
 return (
   <div>
     <ul>
       {props.glossWords.map((item) =>
         <li key={item.word}> <a style={{fontWeight: 'bold'}}>{item.word}</a> -
          <a style={{fontStyle: 'italic'}}>{item.category}</a> - <a>"{item.definition}"</a>
          <button value={item.word} style={{backgroundColor: 'blue', color: 'white', fontSize: '10px', borderRadius: '50%'}}type='submit' onClick={props.onClick}>
            Edit</button><button value={item.word} style={{backgroundColor: 'red', color: 'white', fontSize: '10px', borderRadius: '50%'}}
            type='submit'onClick={props.onDelete}>Delete</button></li>
       )}
     </ul>
   </div>
 )
}

export default Word_list;