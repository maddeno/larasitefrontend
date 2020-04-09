import React from 'react';
import {
  Container,
  // Divider,
  Dropdown,
  // Grid,
  // Header,
  Image,
  // List,
  Menu,
  Segment,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentUser: this.props.currentUser,
        showLogin: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ currentUser: nextProps.currentUser });  
  }

  handleClick = () => {

  }


  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image size='mini' circular src={require('../assets/lara_logo.jpg')} style={{ marginRight: '1.5em' }} />
                    laramadden.com
            </Menu.Item>
            <Menu.Item as={NavLink} to="/">Home</Menu.Item>
            <Menu.Item as={NavLink} to="/bio">Biography/Credentials</Menu.Item>
            <Menu.Item as={NavLink} to="/gallery">Gallery</Menu.Item>
            <Menu.Item as={NavLink} to="/media">Media</Menu.Item>

            <Dropdown item simple text='Work with Lara'>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/performances">Performances</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/lessons">Lessons</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          </Container>
        </Menu>
      </div>
    );
  }
}


export default Navbar;