import React from 'react'
import {
  Container,
  Divider,
  // Dropdown,
  Grid,
  Header,
  Image,
  List,
  // Menu,
  Segment,
  GridColumn,
  Button,
  Checkbox,
  Form
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class AdminValidation extends React.Component {

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
  
    render() {
        return (

            <div>
                
            <Container text style={{ marginTop: '7em'}} floated="right">
                <Header as='h2'>Please Log In</Header>
                <Form>
                    <Form.Field>
                        <label>Email</label>
                        <input name="email" placeholder='email' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input name="password" placeholder='password' onChange={this.handleChange} />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            </div>
        
        )
    }
}
  
export default AdminValidation