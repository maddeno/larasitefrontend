import React from 'react'
import LessonForm from './LessonForm'
import LThankYouMessage from './LThankYouMessage'

class Lessons extends React.Component {

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
                {this.state.submitted === true ? <LThankYouMessage toggleView={this.toggleView}/> : <LessonForm toggleView={this.toggleView} /> }
            </div>
        
        
        )
    }
  }
  
  export default Lessons