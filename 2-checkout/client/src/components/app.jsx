import React from 'react';
import FormOne from './form-one.jsx';
import FormTwo from './form-two.jsx';
import CheckOut from './checkoutButton.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page:  <CheckOut checkout={() => {this.checkout()}}/>,
      username:'',
      email:'',
      password:'',
      street:'',
      streetTwo:'',
      city:'',
      state:'',
      zipcode:'',
      payment:'',
      exp:'',
      cvv:'',
      billingzip:'',

    }
    this.inputHandler = this.inputHandler.bind(this);
    this.checkout = this.checkout.bind(this);
    this.formOneButton = this.formOneButton.bind(this);
  }

  inputHandler(input) {
    var field = input.target.id
    if (field === 'username') {
      this.setState({username: input.target.value})
    }
    if (field === 'email') {
      this.setState({email: input.target.value})
    }
    if (field === 'password') {
      this.setState({password: input.target.value})
    }
  }

  checkout() {
    $.ajax({
      url: '/formOne',
      type: 'GET',
      success: function(res) {
        console.log(res)
      }
    })
    .then(() => {
      this.setState({page: <FormOne submit={() => {this.formOneButton()}} input={(i) => {this.inputHandler(i)}}/>})
    })
  }

  formOneButton() {
    $.ajax({
      url: '/formTwo',
      type: 'POST',
      data: {username: this.state.username, email: this.state.email, password: this.state.password},
      success: function(res) {
        console.log(res)
      }
    })
    .then(() => {
      this.setState({page: <FormTwo user={this.state.username}/>})
    })
  }

  render() {
    return(
      <div>
        {this.state.page}
      </div>
    )
  }


}

export default App

