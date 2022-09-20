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
        <input id='userName' name='userName' type='text'></input>
        <button type='submit'>NEXT</button>
      </div>
    )
  }
}

export default FormTwo;