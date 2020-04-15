  
import React from 'react'
import {
  Container,
  Header,
  Image,
  Button
} from 'semantic-ui-react'
import BookingOptions from './BookingOptions'
import { NavLink } from 'react-router-dom';

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
      <div>
      
        <Container text style={{ marginTop: '7em'}} >
          <Image src={require('../assets/lara_headshot.jpg')} circular size="medium" style={{ marginTop: '2em' }} floated="right"/>
            <Header as='h1'>Lara Maria Madden: Violinist</Header>
            <h4>
              Lara is a classical musician with a Master's degree in Violin from DePaul University, and more than 5 years experice playing and teaching.
            </h4>
            <h4>
              Lara is a dedicated performer and pedagogue committed to providing the highest level of musicianship. She believes in the potential for music to enhance lives, and continually explores ways to make music an accessible and joyful experience.
            </h4>
            <h4>
              Currently based out of Providence, Lara accepts bookings in Rhode Island, Massachusetts, and Illinois. 
            </h4>
            <Button color="black" onClick={this.toggleBookingOptions}>Book Now</Button> 
            <Button as={NavLink} to="/bookings">Pending Requests(for Lara)</Button>
            {this.state.bookingOptions === true? <BookingOptions/> : null}
        </Container>
  
      </div>
    )
  }

}

export default Homepage