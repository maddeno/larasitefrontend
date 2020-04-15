import React from 'react'
import {Table, Button } from 'semantic-ui-react'

class LessonReqsTable extends React.Component {
    constructor() {
        super()
        this.state = {
            reqs: null
        }
    }

    componentDidMount(){
        this.setState({
            reqs: this.props.reqs
        })
    }


    handleClick = (event) => {
        const lessonToUpdate = {
            id: event.target.id,
            status: event.target.value
        }
        this.props.update(lessonToUpdate)
    }

    parseRow = (req) => {
        return (
            <Table.Row>
                <Table.Cell>{req.created_at}</Table.Cell>
                <Table.Cell>{req.date}</Table.Cell>
                <Table.Cell>{req.time}</Table.Cell>
                <Table.Cell>{req.location}</Table.Cell>
                <Table.Cell>{req.client_name}: {req.client_email} {req.client_phone}</Table.Cell>
                <Table.Cell>
                    <Button color="black" id={req.id} value="accepted" onClick={this.handleClick}>Accept</Button> or <Button color="black" id={req.id} value="declined" onClick={this.handleClick}>Decline</Button>
                </Table.Cell>
            </Table.Row>
        )
    }

    render(){
        return (
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Date Requested</Table.HeaderCell>
                    <Table.HeaderCell>Lesson Date</Table.HeaderCell>
                    <Table.HeaderCell>Time</Table.HeaderCell>
                    <Table.HeaderCell>Location</Table.HeaderCell>
                    <Table.HeaderCell>Client Info</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    { this.state.reqs ? this.state.reqs.map(req => {
                        return this.parseRow(req)
                    }): null }
                </Table.Body>

            </Table>
        )
    }
}

export default LessonReqsTable