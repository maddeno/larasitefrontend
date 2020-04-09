import React from 'react'
// import {
//   Container,
//   Divider,
//   // Dropdown,
//   Grid,
//   Header,
//   Image,
//   List,
//   // Menu,
//   Segment,
//   GridColumn,
//   Button,
//   Checkbox,
//   Form
// } from 'semantic-ui-react'
import GigForm from './GigForm'
import PThankYouMessage from './PThankYouMessage'

class Performances extends React.Component {

    constructor() {
      super()
      this.state = {
        submitted: false
      }
    }

    toggleView = () => {
        this.setState({
            submitted: !this.state.submitted,
        })
    }


  
    render() {
        return (

            <div>
                {this.state.submitted === true ? <PThankYouMessage toggleView={this.toggleView}/> : <GigForm toggleView={this.toggleView} /> }
            </div>
        
        )
    }
}
  
export default Performances