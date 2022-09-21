import React from 'react';

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: 1,
      two: 2,
      three: 3
    }
  }


  render() {
    return (
      <div>
        <h1> Welcome {this.props.user}! </h1>
        <p>This is Page {this.state.two}...</p>
        {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
        <div style={{padding: '10px'}}>
          <a>Street Address</a>
          <input id='street' name='street' type='text' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>Street Address 2</a>
          <input id='streettwo' name='streettwo' type='text' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>City</a>
          <input id='city' name='city' type='text' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>State</a>
          <input id='state' name='state' type='text' maxLength='2' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>Zip Code</a>
          <input id='zipcode' name='zipcode' type='text' maxLength='5' onChange={this.props.input}></input>
        </div>
        <button type='submit' onClick={this.props.submit}>NEXT</button>
      </div>
    )
  }
}

export default FormTwo;