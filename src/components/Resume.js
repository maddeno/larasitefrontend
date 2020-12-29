import React from 'react'
import {
  Container,
  Header,
  Button,
  Grid,
  Image,
  List
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

class Resume extends React.Component {

    constructor() {
      super()
      this.state = {

      }
    }

  
    render() {
        return (
                
            <Grid centered > 
                <Grid.Row>
                <Grid.Column width={6} style={{ marginLeft: '7em'}}>
                    <Container text style={{ marginTop: '7em'}} floated="right">
                    <Header as='h1'>Education</Header>
                    <List>

                        <List.Item>
                            <List.Header as='h3'>Quartet Fellow Community MusicWorks 2019-Present</List.Header>
                        </List.Item><br/>

                        <List.Item>
                            <List.Header as='h3'>Indiana University Jacobs School of Music</List.Header>
                            Bachelors of Music in Violin Performance 2012-2016<br/>
                            Primary Teacher: Professor Grigory Kalinovsky
                        </List.Item><br/>

                        <List.Item>
                            <List.Header as='h3'>DePaul University School of Music</List.Header>
                            Master of Music in Violin Performance 2016-2018<br/>
                            Primary Teacher: Professor Olga Kaler
                        </List.Item><br/>
                        
                    </List>

                    <Header as='h1'>Summer Festivals</Header>
                    <List>
                        <List.Item>
                            <List.Header as='h3'>Meadowmount School of Music 2009-2012</List.Header>
                            Primary Teacher: Gerardo Ribeiro
                        </List.Item><br/>

                        <List.Item>
                            <List.Header as='h3'>Bowdoin International Music Festival 2015</List.Header>
                            Primary Teachers: Frank Huang, Olga Kaler
                        </List.Item><br/>
                        
                        <List.Item>
                            <List.Header as='h3'>Aspen Music Festival and School 2016</List.Header>
                            Primary Teacher: Paul Kantor
                        </List.Item><br/>

                        <List.Item>
                            <List.Header as='h3'>Music Masters Course Japan 2017</List.Header>
                        </List.Item><br/>

                        <List.Item>
                            <List.Header as='h3'>Manchester Music Festival 2018</List.Header>
                        </List.Item><br/>
                    </List>
                    <Button color="black" onClick={() => this.props.toggle()}>Back to Bio</Button>
                    </Container>
                </Grid.Column>

                <Grid.Column width={6}>
                    <Container text style={{ marginTop: '7em'}} floated="right">
                    <Header as='h1'>Orchestral Experience</Header>
                    <List>
                        <List.Item>
                            <List.Header as='h3'>Jacobs School of Music Baroque Orchestra 2014</List.Header>
                            Conductor: Stanley Ritchie
                            </List.Item><br/>
                        <List.Item>
                            <List.Header as='h3'>Aspen Music Festival and School Conductors Orchestra 2016</List.Header>
                        </List.Item><br/>
                        <List.Item>
                            <List.Header as='h3'>Substitute Violinist Chicago Composers Orchestra 2017-2019</List.Header>
                        </List.Item><br/>
                        <List.Item>
                            <List.Header as='h3'>Associate Violinist Civic Orchestra of Chicago</List.Header>
                        </List.Item><br/>
                    </List>

                    <Header as='h1'>Teaching Experience</Header>
                    <List>
                        <List.Item>
                            <List.Header as='h3'>Mimi Zewig Violin Pedagogy 2015-2016</List.Header>
                        </List.Item><br/>
                        <List.Item>
                            <List.Header as='h3'>Jacobs School of Music Fairview Violin Project 2015-2016</List.Header>
                        </List.Item><br/>
                        <List.Item>
                            <List.Header as='h3'>The People's Music School 2018-2019</List.Header>
                        </List.Item><br/>
                        <List.Item>
                            <List.Header as='h3'>Knapp Music School 2019-present</List.Header>
                        </List.Item><br/>
                    </List>

                    <Header as="h1">Honors and Awards</Header>
                    <List>
                        <List.Item>
                            <List.Header as='h4'>Jacobs School of Music Emerging Young Artist Award</List.Header>
                        </List.Item><br/>
                    </List>
                    </Container>
                </Grid.Column>               
                </Grid.Row>
            </Grid>
        )
    }
}
  
export default Resume