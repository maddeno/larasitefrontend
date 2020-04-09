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
} from 'semantic-ui-react'

class Bio extends React.Component {

    constructor() {
      super()
    }
  
      render() {
          return (
  
              <div>
                    <Grid columns={3}> 
                        <Grid.Row>
                        <Grid.Column>
                            <Image src={require('../assets/gallery/lara_gal_pic11.jpg')} circular style={{ marginTop: '10em', marginLeft: '4em' }} size="medium"/>
                        </Grid.Column>

                        <Grid.Column>
                            <Container text style={{ marginTop: '7em'}} floated="right">
                            <Header as='h1'>Biography</Header>
                                <h4>
                                    Lara Maria Madden is a violinist from River Forest, Illinios. She began her musical studies in violin and piano at the age of three. She has had the privilege of witnessing the wonderful effects that music has on one's life.
                                </h4>

                                <h4>
                                    Lara served as assistant concert mistress at Merit School of Music in high school, and attended Meadowmount School of Music during her teen years.
                                </h4>

                                <h4>
                                    She studied under the instruction of Grigory Kalinovsky as an undergraduate at Indiana University, and Olga Kaler during her graduate studies at DePaul University. Lara attended summer music festivals during her college years including Bowdoin International Music Festival, Aspen Music Festival and School, and Music Masters Couse Japan.
                                </h4>

                                <h4>
                                    Through her Bachelor's and Master's studies in violin, Lara developed and cultivated a passion for teaching. In 2019 she primarily taught with the People's Music School- a non-profit school designed to serve less advantaged young people in Chicago. Lara is excited fo rhe next step as a violin fellow with Community MusicWorks in Providence, Rhode Island from 2019-2021.
                                </h4>
                            </Container>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
              </div>
          
            )
      }
  }
  
  export default Bio