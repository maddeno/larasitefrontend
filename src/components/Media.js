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
                            <Card.Header>Bach Sonata in A Minor</Card.Header>
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
                            <Card.Header>Prokofiev Violin Concerto No. 2 in G Minor</Card.Header>
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
                            <Card.Header>Three Miniatures for Solo Violin</Card.Header>
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
                            <Card.Header>Bach Sonata in G Minor: Adagio</Card.Header>
                            <Card.Content>
                                <Embed 
                                    id='GqRX6TDxR5s'
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