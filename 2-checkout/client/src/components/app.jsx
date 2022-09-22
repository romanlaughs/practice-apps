import React from 'react';
import FormOne from './form-one.jsx';
import FormTwo from './form-two.jsx';
import FormThree from './form-three.jsx';
import CheckOut from './checkoutButton.jsx';
import Summary from './summary.jsx';
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
      streettwo:'',
      city:'',
      state:'',
      zipcode:'',
      phone:'',
      payment:'',
      exp:'',
      cvv:'',
      billingzip:'',

    }
    this.inputHandler = this.inputHandler.bind(this);
    this.checkout = this.checkout.bind(this);
    this.formOneButton = this.formOneButton.bind(this);
    this.formTwoButton = this.formTwoButton.bind(this);
    this.summaryButton = this.summaryButton.bind(this);
    this.complete = this.complete.bind(this);
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
    if (field === 'street') {
      this.setState({street: input.target.value})
    }
    if (field === 'streettwo') {
      this.setState({streettwo: input.target.value})
    }
    if (field === 'city') {
      this.setState({city: input.target.value})
    }
    if (field === 'state') {
      this.setState({state: input.target.value})
    }
    if (field === 'zipcode') {
      this.setState({zipcode: input.target.value})
    }
    if (field === 'phone') {
      this.setState({phone: input.target.value})
    }
    if (field === 'payment') {
      this.setState({payment: input.target.value})
    }
    if (field === 'exp') {
      this.setState({exp: input.target.value})
    }
    if (field === 'cvv') {
      this.setState({cvv: input.target.value})
    }
    if (field === 'billingzip') {
      this.setState({billingzip: input.target.value})
    }
  }

  checkout() {
    $.ajax({
      url: '/formOne',
      type: 'GET',
      success: function(res) {
        console.log(res)
        return res
      }
    })
    .then((res) => {
      console.log(res)
      if (res === '0') {
        this.setState({page: <FormOne submit={() => {this.formOneButton()}} input={(i) => {this.inputHandler(i)}}/>})
      } else {
        alert('Please delete the cookie to start a new Session.')
      }
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
      this.setState({page: <FormTwo user={this.state.username} submit={() => {this.formTwoButton()}} input={(i) => {this.inputHandler(i)}}/>})
    })
  }

  formTwoButton() {
    $.ajax({
      url: '/formThree',
      type: 'POST',
      data: {username: this.state.username, street: this.state.street, streettwo: this.state.streettwo, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode, phone: this.state.phone},
      success: function(res) {
        console.log(res)
      }
    })
    .then(() => {
      this.setState({page: <FormThree user={this.state.username} input={(i) => {this.inputHandler(i)}} submit={() => {this.summaryButton()}}/>})
    })
  }

  summaryButton() {
    $.ajax({
      url: '/summary',
      type: 'POST',
      data: {username: this.state.username, payment: this.state.payment, exp: this.state.exp, cvv: this.state.cvv, billingzip: this.state.billingzip},
      success: function(res) {
        console.log(res)
      }
    })
    .then(() => {
      return $.ajax({
        url: '/summaryTwo',
        type: 'POST',
        data: {username: this.state.username},
        success: function(res) {
          return res
        },
      })
    })
    .then((results) => {
      console.log(results)
      this.setState({page: <Summary summary={results} user={this.state.user} submit={() => {this.complete()}}/>})
    })
  }

  complete() {
    alert('You Order Has Been Placed :)')
    this.setState({page: <CheckOut checkout={() => {this.checkout()}}/>})
  }

  render() {
    return(
      <div >
        {this.state.page}
      </div>
    )
  }


}

export default App

