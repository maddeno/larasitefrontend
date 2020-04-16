import React from 'react'
import Bio from './Bio'
import Resume from './Resume'

class Credentials extends React.Component {

    constructor() {
      super()
      this.state = {
          showResume: false
      }
    }

    toggleView = () => {
        this.setState({
            showResume: !this.state.showResume
        })
    }
  
    render() {
        return (
            <div>
                {this.state.showResume ? <Resume toggle={this.toggleView}/> : <Bio toggle={this.toggleView}/>}
            </div>
        )
    }
  }
  
export default Credentials