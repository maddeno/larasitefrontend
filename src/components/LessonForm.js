import React from 'react'
import {
  Container,
  Divider,
  // Dropdown,
  Grid,
  Header,
  Image,
  List,
  // Menu,
  Segment,
  GridColumn,
  Button,
  Checkbox,
  Form
} from 'semantic-ui-react'

class LessonForm extends React.Component {

    constructor() {
      super()
      this.state = {
        admin_id: 2,
        status: 'requested'
      }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    createLesson = (event) => {
        event.preventDefault()
        const newLesson = this.state

        const reqObj = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(newLesson)
        }
        fetch(`http://localhost:3000/lessons`, reqObj)
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
                <Header as='h1'>Book a Lesson</Header>
                    <h4>
                        Lara has experience with students between the ages of 3 and 75.  
                    </h4>

                
                <Form onSubmit={this.createLesson}>

                    <Form.Group widths='equal'>
                        <Form.Input name="client_name" fluid label='Name' placeholder='First and Last' onChange={this.handleChange} />
                        <Form.Input name="client_email" fluid label='Email' placeholder='Email Address' onChange={this.handleChange} />
                        <Form.Input name="client_phone" fluid label='Phone' placeholder='Phone Number' onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Input name="date" fluid label='Date' placeholder='MM/DD/YY' onChange={this.handleChange}/>
                        <Form.Input name="time" fluid label='Time' placeholder='##:## am/pm' onChange={this.handleChange} />
                        <Form.Input name="location" fluid label='Location' placeholder='Location'onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Input name="student_name" fluid label='Student name' placeholder='Student name' onChange={this.handleChange}/>
                        <Form.Input name="student_age" fluid label='Student age' placeholder='Student age' onChange={this.handleChange} />
                        <Form.Input name="student_experience" fluid label='Experience' placeholder='Past musical experience' onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Field>
                    <label>Goals/Expectations</label>
                    <input name="student_goals" placeholder='Brief description of student goals and expectations' onChange={this.handleChange} />
                    </Form.Field>

                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            </div>
        
        )
    }
  }
  
  export default LessonForm