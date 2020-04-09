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
  Button
} from 'semantic-ui-react'
import GigReqsTable from './GigReqsTable';
import LessonReqsTable from './LessonReqsTable';


const gigURL = 'http://localhost:3000/gigs';
const lessonURL = 'http://localhost:3000/lessons';

class RequestsHandler extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            gigReqs: [],
            lesReqs: []
        }
    }

    componentDidMount(){
        Promise.all([fetch(gigURL), fetch(lessonURL)])
        .then(([resp1, resp2]) => { 
            return Promise.all([resp1.json(), resp2.json()]) 
        })
        .then(([resp1, resp2]) => {
            this.setState({
                gigReqs: resp1.filter(req => {return req.status === 'requested'}),
                lesReqs: resp2.filter(req => {return req.status === 'requested'}) 
            })
        });
    }

    updateState = () => {
        Promise.all([fetch(gigURL), fetch(lessonURL)])
        .then(([resp1, resp2]) => { 
            return Promise.all([resp1.json(), resp2.json()]) 
        })
        .then(([resp1, resp2]) => {
            this.setState({
                gigReqs: resp1.filter(req => {return req.status === 'requested'}),
                lesReqs: resp2.filter(req => {return req.status === 'requested'}) 
            })
        });
    }

    updateGigs = (gigToUpdate) => {
        this.setState({
            isLoading: true
        })
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: gigToUpdate.id,
                status: gigToUpdate.status
            })
        }
        fetch(`http://localhost:3000/gigs/${gigToUpdate.id}`, reqObj)
        .then(resp => resp.json())
        .then(() => this.updateState())
    }


    updateLessons = (lessonToUpdate) => {
        const reqObj = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: lessonToUpdate.id,
                status: lessonToUpdate.status
            })
        }
        fetch(`http://localhost:3000/lessons/${lessonToUpdate.id}`, reqObj)
        .then(resp => resp.json())
        .then(() => this.updateState()) 
    }


    render(){
        return(
        <div>
        
            <Container text style={{ marginTop: '7em'}} >
                <Header as='h1'>Hello Lara</Header>
                <Header as='h2'>Here are your pending requests:</Header>
                {this.state.gigReqs.length > 0 ? <GigReqsTable update={this.updateGigs} reqs={this.state.gigReqs} /> : null}
                {this.state.lesReqs.length > 0 ? <LessonReqsTable update={this.updateLessons} reqs={this.state.lesReqs} /> : null}
            </Container>

        </div>
        )
    }

}

export default RequestsHandler