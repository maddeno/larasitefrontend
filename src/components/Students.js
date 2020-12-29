import React from 'react'
import StudentForm from './StudentForm'
import SThankYouMessage from './SThankYouMessage'

class Students extends React.Component {

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
                {this.state.submitted === true ? <SThankYouMessage toggleView={this.toggleView}/> : <StudentForm toggleView={this.toggleView} /> }
            </div>
        
        
        )
    }
  }
  
  export default Students