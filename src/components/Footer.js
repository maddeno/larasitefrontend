import React from 'react'
import {
  Container,
  Divider,
  Image,
  List,
  Segment
} from 'semantic-ui-react'

class Footer extends React.Component {

    constructor() {
        super()
    }

    render(){
        return(

            <Segment fixed='bottom' inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                    <Divider inverted section />
                    <Image centered size='mini' circular src={require('../assets/lara_logo.jpg')} />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href='#'>
                        Site Map
                        </List.Item>
                        <List.Item as='a' href='#'>
                        Contact Us
                        </List.Item>
                        <List.Item as='a' href='#'>
                        Terms and Conditions
                        </List.Item>
                        <List.Item as='a' href='#'>
                        Privacy Policy
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        )
    }



}

export default Footer