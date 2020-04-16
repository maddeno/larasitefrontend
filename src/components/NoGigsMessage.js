import React from 'react'
import {
    Container,
    Header,
    Button
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

function NoGigsMessage() {
    return(
        <Container text style={{ marginTop: '7em'}} >
            <Header as='h2'>Sorry, Lara currently has no public performances coming up.</Header>
            <Header as='h3'>Please check back later or click the link to book your own performance.</Header>
            <Button as={NavLink} to="/performances" color="black">Book Now</Button>  <Button as={NavLink} to="/" color="black">Home</Button>
        </Container>
    )
}

export default NoGigsMessage