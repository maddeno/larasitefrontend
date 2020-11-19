import React from 'react';
import {
  Container,
  Dropdown,
  Image,
  Menu,
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
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <Image size='mini' circular src={require('../assets/lara_logo.jpg')} style={{ marginRight: '1.5em' }} />
               
          </Menu.Item>
          <Menu.Item as={NavLink} to="/">Home</Menu.Item>
          <Menu.Item as={NavLink} to="/credentials">Biography/Credentials</Menu.Item>
          <Menu.Item as={NavLink} to="/gallery">Gallery</Menu.Item>
          <Menu.Item as={NavLink} to="/media">Media</Menu.Item>\
          <Menu.Item as={NavLink} to="/calendar">Upcoming Performances</Menu.Item>

          <Dropdown item simple text='Work with Lara'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/performances">Performances</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/lessons">Lessons</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        </Container>
      </Menu>
    );
  }
}


export default Navbar;