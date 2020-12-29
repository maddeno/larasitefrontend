  
import React from 'react'
import {
  Container,
  Header,
  Image,
  Button,
  Grid
} from 'semantic-ui-react'
import BookingOptions from './BookingOptions'

class Homepage extends React.Component {
  constructor() {
    super()
    this.state = {
      bookingOptions: false
    }
  }

  toggleBookingOptions = () => {
    this.setState({
      bookingOptions: !this.state.bookingOptions
    })
  }

  render(){
    return(
      <Grid columns={3}> 
        <Grid.Row>
          <Grid.Column>
            <Image src={require('../assets/gallery/lara_gal_pic11.jpg')} circular style={{ marginTop: '14em', marginLeft: '4em' }} size="medium"/>
          </Grid.Column>

          <Grid.Column>
            <Container text style={{ marginTop: '7em'}} floated="right">
              <Header as='h1'>Lara Maria Madden: Violinist</Header>
                <h4>
                  Lara is a dedicated performer and pedagogue committed to providing the highest level of musicianship. She believes in the potential for music to enhance lives, and continually explores ways to make music an accessible and joyful experience.
                </h4>
             
                <br/>
                <br/>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Homepage