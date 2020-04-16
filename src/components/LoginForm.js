import React from 'react'
import {
  Container,
  Header,
  Button,
  Form
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component {

    constructor() {
      super()
      this.state = {

      }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.login(this.state)
    }
  
    render() {
        return (

            <div>
                
            <Container text style={{ marginTop: '7em'}} floated="right">
                <Header as='h2'>Please Log In</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Email</label>
                        <input name="email" placeholder='email' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type="password" name="password" placeholder='password' onChange={this.handleChange} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            </div>
        
        )
    }
}
  
export default LoginForm