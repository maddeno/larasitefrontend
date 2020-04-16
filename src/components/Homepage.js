  
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
            <Image src={require('../assets/lara_headshot.jpg')} circular style={{ marginTop: '11em', marginLeft: '4em' }} size="medium"/>
          </Grid.Column>

          <Grid.Column>
            <Container text style={{ marginTop: '7em'}} floated="right">
              <Header as='h1'>Lara Maria Madden: Violinist</Header>
                <h4>
                  Lara is a classical musician with a Master's degree in Violin from DePaul University, and many years experice playing and teaching.
                </h4>
                <h4>
                  Lara is a dedicated performer and pedagogue committed to providing the highest level of musicianship. She believes in the potential for music to enhance lives, and continually explores ways to make music an accessible and joyful experience.
                </h4>
                <h4>
                  Currently based out of Providence, Lara accepts bookings in Rhode Island, Massachusetts, and Illinois. 
                </h4>
                <br/>
                <br/>
                <Button color="black" onClick={this.toggleBookingOptions}>Book Now</Button> 
                {this.state.bookingOptions === true? <BookingOptions/> : null}
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}

export default Homepage