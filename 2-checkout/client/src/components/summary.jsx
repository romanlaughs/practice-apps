import React from 'react';

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      three: 3
    }
  }


  render() {
    return (
      <div>
        <div>
          {this.props.summary.map(item => {
            return <p key={item.id}>
              <a>Summary Information for {item.username}</a>
              <a>An e-mail confirmation will be sent to {item.email}</a>
              <a>This site is really unsecure, so here's your password: {item.password}</a>
              <a>The Item will be shipped to:</a>
              <a>{item.street}</a>
              <a>{item.streettwo}</a>
              <a>{item.city}, {item.state} {item.zipcode}</a>

              <a>We MAY give you a CALL at {item.phone}</a>

              <a>Payment Info:</a>
              <a>Payment Card #: {item.payment}</a>
              <a>EXP: {item.exp}</a>
              <a>CVV: {item.cvv}</a>
              <a>Billing Zip: {item.billingzip}</a>

            </p>
          })}
        </div>
        {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}

        <button type='submit' onClick={this.props.submit} style={{borderRadius: '25px', backgroundColor: 'brown', color: 'white', padding: '20px'}}>Order Now</button>
      </div>
    )
  }
}

export default Summary;