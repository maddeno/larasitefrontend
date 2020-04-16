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

            <Segment fixed='bottom' inverted vertical style={{ margin: '7em 0em 0em', padding: '5em 0em' }}>
                <Container textAlign='center'>
                    {/* <Divider inverted section /> */}
                    <Image centered size='mini' circular src={require('../assets/lara_logo.jpg')} />
                    <List horizontal inverted divided link size='small'>
                        <List.Item as='a' href="https://www.facebook.com/lara.madden.10">
                        Facebook
                        </List.Item>
                        <List.Item as='a' href="https://www.linkedin.com/in/lara-madden-22183210b/">
                        Linkedin
                        </List.Item>
                    </List>
                </Container>
            </Segment>
        )
    }



}

export default Footer