import React from 'react';
import reactDom from 'react-dom';

function Word_list(props) {
 return (
   <div>
     <ul>
       {props.glossWords.map((item) =>
         <li key={item.word}> <a style={{fontWeight: 'bold'}}>{item.word}</a> - <a style={{fontStyle: 'italic'}}>{item.category}</a> - <a>"{item.definition}"</a></li>
       )}
     </ul>
   </div>
 )
}

export default Word_list;