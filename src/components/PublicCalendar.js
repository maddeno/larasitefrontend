import React from 'react'
import PublicGigsList from './PublicGigsList'
import NoGigsMessage from './NoGigsMessage';

const API_KEY = 'AIzaSyB0MyIQYJsB9LG8yCGWMi1UaQEtOGiboJ8'
const CAL_ID = "laramaddenviolinist@gmail.com"
let URL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?key=${API_KEY}`

class PublicCalendar extends React.Component {
  constructor () {
    super()
    this.state = {
      
    }
  }

  // convertDates(gigs){

  // }

  filterGigs(gigs){
    let filteredGigs = gigs.filter(gig => Date.parse(gig.end.dateTime) > new Date());
    this.orderGigs(filteredGigs);
  }

  orderGigs(gigs){
    let orderedGigs = gigs.sort(function(a,b) {
      return new Date(a.start.dateTime) - new Date(b.start.dateTime);
    })
    this.setState({
      publicGigs: orderedGigs
    })
  }

  componentDidMount() {
    fetch(`${URL}`)
      .then(resp => resp.json())
      .then(resp => this.filterGigs(resp.items)
    )
  }



  render () {
    
    return (
      <div>
        {this.state.publicGigs? <PublicGigsList publicGigs={this.state.publicGigs}></PublicGigsList> : <NoGigsMessage></NoGigsMessage>}
      </div>
      
    )
  }
}

  
export default PublicCalendar