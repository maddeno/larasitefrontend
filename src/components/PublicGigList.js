import React from 'react'
import {
  Container,
  Header,
  List,
  Button
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class PublicGigsList extends React.Component {

parseGigs = (gig) => {
    return (
      <List>
        <List.Item>
            <List.Header as='h3'>{gig.date}</List.Header>
            {gig.description} hosted by {gig.client_name} <br/> {gig.location} <br/> {gig.start_time} - {gig.end_time}
        </List.Item>
      </List>
    )
}

  render () {
    return (
      <div>
        <Container text style={{ marginTop: '7em'}} >
        <Header as='h1'>Lara's Upcoming Performances:</Header>
          {this.props.publicGigs.map(gig => {return this.parseGigs(gig)})}
          <Button color="black" as={NavLink} to="/">Home</Button>
        </Container>
      </div>
    )
  }
}  
export default PublicGigsList