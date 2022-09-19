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
        <input id='userName' name='userName' type='text'></input>
        <button type='submit' onClick={this.props.submit}>NEXT</button>
      </div>
    )
  }
}

export default FormOne;