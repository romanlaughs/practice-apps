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
    }
    this.checkout = this.checkout.bind(this);
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
      this.setState({page: <FormOne submit={() => {this.formOneButton()}}/>})
    })
  }

  formOneButton(e) {
    $.ajax({
      url: '/formTwo',
      type: 'GET',
      success: function(res) {
        console.log(res)
      }
    })
    .then(() => {
      this.setState({page: <FormTwo />})
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

