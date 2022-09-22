import React from 'react';

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      three: 3
    }
  }


  render() {
    return (
      <div>
        <p>Payment Information for {this.props.user}</p>
        {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
        <div style={{padding: '10px'}}>
          <a>Credit Card Number</a>
          <input id='payment' name='payment' type='text' maxLength='20' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>Expiration Date</a>
          <input id='exp' name='exp' type='month' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>CVV</a>
          <input id='cvv' name='cvv' type='password' maxLength='3' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>Billing Zip Code</a>
          <input id='billingzip' name='billingzip' type='text' maxLength='5' onChange={this.props.input}></input>
        </div>
        <button type='submit' onClick={this.props.submit} style={{borderRadius: '25px', backgroundColor: 'brown', color: 'white', padding: '20px'}}>NEXT</button>
      </div>
    )
  }
}

export default FormThree;