import React from 'react';

function CheckOut(props) {
  return (
    <div style={{backgroundColor: 'cornsilk', padding: '50px'}}>
      <div>
        <p style={{fontSize: '35px', position: 'relative', padding: '30px', fontWeight: 'bold', textShadow:'2px, 2px, white'}}> Click the Button Below to Continue Checking Out</p>
      </div>
      <div>
        <button type= 'submit' style={{borderRadius: '25px', backgroundColor: 'brown', color: 'white', padding: '20px'}} onClick={props.checkout}> Checkout </button>
      </div>
    </div>
  )
}

export default CheckOut;