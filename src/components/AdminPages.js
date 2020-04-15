import React from 'react'
import LoginForm from './LoginForm'
import BookingsHandler from './BookingsHandler';

class AdminPages extends React.Component {

    constructor() {
      super()
      this.state = {
        showBookings: false,
        authBearer: null,
        authToken: null
      }
    }

    login = (admin) => {
      fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          admin
        })
      })
      .then(resp => resp.json())
      .then(token => {
        this.setState({
          authBearer: token.admin,
          authToken: token.jwt,
          showBookings: true
        })
      })
    }

  
    render() {
        return (
            this.state.showBookings ? <BookingsHandler bearer={this.state.authBearer} token={this.state.authToken} /> : <LoginForm login={this.login}/>
        )
    }
}
  
export default AdminPages