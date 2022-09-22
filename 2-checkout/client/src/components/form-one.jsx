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
        <div style={{padding: '40px'}}>
          <h1 style={{padding: '20px', fontSize: '35px', fontWeight: 'bold', textShadow: '2px, 2px, white', textAlign: 'center', position: 'absolute', top: '5%', left: '20.5%'}}> Create an Account </h1>
          <div style={{padding: '20px', position: 'absolute', top: '25%', left: '20%'}}>
            <a style={{padding: '20px', fontSize: '18px', fontWeight: 'bold', textShadow: '2px, 2px, white'}}>Username:</a>
            <input id='username' name='username' type='text' onChange={this.props.input} style={{padding: '10px', fontSize: '13px'}}></input>
          </div>
          <div style={{padding: '20px', position: 'absolute', top: '45%', left: '25%'}}>
            <a style={{padding: '20px', fontSize: '18px', fontWeight: 'bold', textShadow: '2px, 2px, white'}}>E-Mail:</a>
            <input id='email' name='email' type='email' maxLength='40' onChange={this.props.input} style={{padding: '10px', fontSize: '13px'}}></input>
          </div>
          <div style={{padding: '20px', position: 'absolute', top: '65%', left: '20.5%'}}>
            <a style={{padding: '20px', fontSize: '18px', fontWeight: 'bold', textShadow: '2px, 2px, white'}}>Password:</a>
            <input id='password' name='password' type='password' onChange={this.props.input} style={{padding: '10px', fontSize: '13px'}}></input>
          </div>
          <button type='submit' onClick={this.props.submit} style={{borderRadius: '25px', backgroundColor: 'brown', color: 'white', padding: '20px', textAlign: 'center', position: 'absolute', top: '80%', left: '10%'}}>NEXT</button>
        </div>
    )
  }
}

export default FormOne;