import React from 'react'
import {
    Container,
    Header,
    Button,
    Image,
    Grid
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

function NoGigsMessage() {
    return(
        <Grid columns={2}> 
        <Grid.Row>
            <Grid.Column>
            <Container text style={{ marginTop: '7em', }} floated="left" textAlign='center'>
                <Header as='h2'>Sorry, Lara currently has no public performances coming up.</Header>
                <Header as='h3'>Please check back later or click the link to book your own performance.</Header>
                <Button as={NavLink} to="/performances" color="black">Book Now</Button>  <Button as={NavLink} to="/" color="black">Home</Button>
            </Container>
            </Grid.Column>

            <Grid.Column>
                <Image src={require('../assets/gallery/lara_gal_pic25.jpg')} circular style={{ marginTop: '11em', marginRight: '4em' }} size="large"/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
    )
}

export default NoGigsMessage