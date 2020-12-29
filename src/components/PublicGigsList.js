import React from 'react'
import {
  Container,
  Header,
  List,
  Button,
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class PublicGigsList extends React.Component {

  parseStartDates = (gig) => {
    const startDateObj = new Date(gig.start.dateTime);
    const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const day = startDateObj.getUTCDate();
    const weekday = dayOptions[day]
    const month = startDateObj.toLocaleString('default', {month: 'long'});
    const date = startDateObj.getDate();
    const year = startDateObj.getUTCFullYear();
    const parsedDate = `${weekday} ${month} ${date}, ${year}`
    return parsedDate;
  }

  parseStartTimes = (gig) => {
    const startDateObj = new Date(gig.start.dateTime);
    let startHour = startDateObj.getHours();
    let startMinute = startDateObj.getMinutes();
    const ampm = startHour >= 12 ? 'pm' :'am' ;
    startHour = startHour % 12;
    startHour = startHour ? startHour : 12;
    startMinute = startMinute < 10 ? '0' + startMinute : startMinute;
    const parsedTime = startHour + ':' + startMinute + ' ' + ampm;
    return parsedTime;
  }

  parseEndTimes = (gig) => {
    const endDateObj = new Date(gig.end.dateTime);
    let endHour = endDateObj.getHours();
    let endMinute = endDateObj.getMinutes();
    const ampm = endHour >= 12 ? 'pm' :'am' ;
    endHour = endHour % 12;
    endHour = endHour ? endHour : 12;
    endMinute = endMinute < 10 ? '0' + endMinute : endMinute;
    const parsedTime = endHour + ':' + endMinute + ' ' + ampm;
    return parsedTime;
  }

  parseGigs = (gig) => {
    return (
      <List.Item key={gig.id} >
        <List.Header as='h2'>{gig.summary}</List.Header>
        <List.Header as='h3'>
          {this.parseStartDates(gig)}<br/>
          {this.parseStartTimes(gig)} - {this.parseEndTimes(gig)}<br/>
          Where: {gig.location}<br/>
        </List.Header>
          <List.Description>{gig.description}<br/><br/><br/></List.Description>
      </List.Item>
    )
  }

  render () {
    return (
      <Container text style={{ marginTop: '7em'}} >
        <Header as='h1'>Lara's Upcoming Performances:</Header>
          <List divided >
            {this.props.publicGigs.map(gig => {return this.parseGigs(gig)})}
          </List>
        <Button color="black" as={NavLink} to="/">Home</Button>
      </Container>
    )
  }
}  
export default PublicGigsList