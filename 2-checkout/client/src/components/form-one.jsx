import React from 'react';

class FormOne extends React.Component {
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
        <h1> Hello World</h1>
        <p>You Made it to Page {this.state.one}...</p>
        {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
        <div style={{padding: '10px'}}>
          <a>Username</a>
          <input id='username' name='username' type='text' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>E-Mail</a>
          <input id='email' name='email' type='text' onChange={this.props.input}></input>
        </div>
        <div style={{padding: '10px'}}>
          <a>Password</a>
          <input id='password' name='password' type='password' onChange={this.props.input}></input>
        </div>
        <button type='submit' onClick={this.props.submit}>NEXT</button>
      </div>
    )
  }
}

export default FormOne;