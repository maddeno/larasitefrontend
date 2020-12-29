import React from 'react'
import {
  Container,
  Header,
  Button,
  Form
} from 'semantic-ui-react'

class StudentForm extends React.Component {

    constructor() {
      super()
      this.state = {
        status: 'requested'
      }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    createStudent = (event) => {
        event.preventDefault()
        const newStudent = this.state

        const reqObj = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify(newStudent)
        }
        fetch(`http://localhost:3000/students`, reqObj)
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
                    <h3>
                        Lara has experience with students between the ages of 3 and 75. Teaching blerb....
                    </h3>
                <Form onSubmit={this.createStudent}>
                    <Form.Group widths='equal'>
                        <Form.Input name="client_name" fluid label='Name' placeholder='First and Last' onChange={this.handleChange} />
                        <Form.Input name="client_email" fluid label='Email' placeholder='Email Address' onChange={this.handleChange} />
                        <Form.Input name="client_phone" fluid label='Phone' placeholder='###-###-####' onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.Input name="student_name" fluid label='Student Name' placeholder='Student name' onChange={this.handleChange}/>
                        <Form.Input name="student_age" fluid label='Student Age' placeholder='Student age' onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group widths='equal'>
                        <Form.TextArea name="student_experience" fluid label='Experience' placeholder="Brief description of student's past musical experience" onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Field>
                        <Form.TextArea name="student_goals" fluid label='Goals/Expectations' placeholder="Brief descripton of student's goals" onChange={this.handleChange} />
                    </Form.Field>
                    <br></br>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            </div>
        
        )
    }
  }
  
  export default StudentForm