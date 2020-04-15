import React from 'react'
import {
  Container,
  Header,
  Button,
  Checkbox,
  Form
} from 'semantic-ui-react'

class GigForm extends React.Component {

    constructor() {
      super()
      this.state = {
        status: 'requested',
        admin_id: 5,
        public: false
      }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleCheck = () => {
        this.setState({
            public: true
        })
    }

    createGig = (event) => {
        event.preventDefault()
        const newGig = this.state

        const reqObj = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(newGig)
        }
        fetch(`http://localhost:3000/gigs`, reqObj)
        .then(resp => {
            return resp.json()
        }).then(respObj => {
            console.log(respObj)
        })
        this.props.toggleView()
    }

  
    render() {
        return (

            <div>
                
            <Container text style={{ marginTop: '7em'}} floated="right">
                <Header as='h1'>Book a Performance</Header>
                    <h4>
                        Blerb about rates and such.
                    </h4>

                
                <Form onSubmit={this.createGig}>

                    <Form.Group widths='equal'>
                        <Form.Input name="client_name" fluid label='Name' placeholder='First and Last' onChange={this.handleChange} />
                        <Form.Input name="client_email" fluid label='Email' placeholder='Email Address' onChange={this.handleChange} />
                        <Form.Input name="client_phone" fluid label='Phone' placeholder='Phone Number' onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Input name="date" fluid label='Date' placeholder='MM/DD/YY' onChange={this.handleChange} />
                        <Form.Input name="start_time" fluid label='Start Time' placeholder='##:## am/pm' onChange={this.handleChange} />
                        <Form.Input name="end_time" fluid label='End Time' placeholder='##:## am/pm' onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Field>
                        <label>Location</label>
                        <input name="location" placeholder='Location' onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input name="description" placeholder='What type of event is this booking for?' onChange={this.handleChange} />
                    </Form.Field>

                    <Form.Field>
                        <label>Is your event public? Details of public events will appear on Lara's Performance Calendar</label>
                        <Checkbox name="public" label='Public' onChange={this.handleCheck} />
                    </Form.Field>

                    <Form.Field>
                        <label>Repertoire</label>
                        <input name="rep" placeholder='Specific Pieces or Music Genre' onChange={this.handleChange} />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            </div>
        
        )
    }
}
  
export default GigForm