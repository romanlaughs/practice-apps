import React from 'react';

function CheckOut(props) {
  return (
    <div>
      <div>
        <p> Click the Button Below to Continue the Checkout Process</p>
      </div>
      <div>
        <button type= 'submit' onClick={props.checkout}> Checkout </button>
      </div>
    </div>
  )
}

export default CheckOut;