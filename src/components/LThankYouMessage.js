import React from 'react'
import {
  Container,
  Header,
  Button
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class LThankYouMessage extends React.Component {

    constructor() {
      super()
      this.state = {

      }
    }

  
    render() {
        return (

            <div>
                
            <Container text style={{ marginTop: '7em'}} floated="right">
                <Header as='h1'>Thank you!</Header>
                    <h4>
                        Lara will review the details of your booking request and respond within 24 hours.
                    </h4>

                    <Button color="black" onClick={() =>this.props.toggleView()}>Submit another request</Button> <Button color="black" as={NavLink} to="/root">Home</Button>

            </Container>
            </div>
        
        )
    }
}
  
export default LThankYouMessage