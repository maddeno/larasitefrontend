import _ from 'lodash'
import React from 'react'
import {
    Grid,
    Embed,
    Card
  } from 'semantic-ui-react'

class Media extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div style={{ marginTop: '7em', marginLeft: '5em', marginRight: '5em'}} >
                <Grid relaxed centered columns={4}>
                    <Grid.Column>
                        <Card>
                            <Card.Header as='h4'>Bach Sonata in A Minor</Card.Header>
                            <Card.Content>
                                <Embed
                                    id='DNj_gXD6dnU'
                                    placeholder=''
                                    source='youtube'
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Card.Header as='h4'>Prokofiev Violin Concerto No. 2 in G Minor</Card.Header>
                            <Card.Content>
                                <Embed 
                                    id='Ok4CzvahhgM'
                                    placeholder=''
                                    source='youtube'
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Card.Header as='h4'>Three Miniatures for Solo Violin</Card.Header>
                            <Card.Content>
                                <Embed 
                                    id='znhVnf8iFcc'
                                    placeholder=''
                                    source='youtube'
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Card.Header as='h4'>Bach Sonata in G Minor: Presto</Card.Header>
                            <Card.Content>
                                <Embed 
                                    id='eJLyVlaonYY'
                                    placeholder=''
                                    source='youtube'
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Card.Header as='h4'>Bach Sonata in G Minor: Adagio</Card.Header>
                            <Card.Content>
                                <Embed 
                                    id='GqRX6TDxR5s'
                                    placeholder=''
                                    source='youtube'
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Card.Header as='h4'>Michael Shingo Crawford: Teru Teru Bouzu</Card.Header>
                            <Card.Content>
                                <Embed 
                                    id='NG9Fa1rMe9I'
                                    placeholder=''
                                    source='youtube'
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card>
                            <Card.Header as='h4'>Prokofiev Violin Concerto No. 2 Movement 3</Card.Header>
                            <Card.Content>
                                <Embed 
                                    id='WhmT5nqDvx8'
                                    placeholder=''
                                    source='youtube'
                                />
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    
                </Grid>
            </div>
        )
    }
}

export default Media