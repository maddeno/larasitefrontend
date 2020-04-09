import _ from 'lodash'
import React from 'react'
import {
    Container,
    Divider,
    // Dropdown,
    Grid,
    // Header,
    Image,
    List,
    // Menu,
    Segment,
    Embed,
    Card
  } from 'semantic-ui-react'

class Gallery extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <div style={{ marginTop: '7em', marginLeft: '5em', marginRight: '5em'}} >
                <Grid relaxed centered columns={4}>

                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic1.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic2.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic5.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic20.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic21.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic22.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic26.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic25.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic24.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic6.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic9.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic10.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic23.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic11.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic12.jpg')} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image size="large" src={require('../assets/gallery/lara_gal_pic17.jpg')} />
                    </Grid.Column>
                    
                </Grid>
            </div>
        )
    }
}


export default Gallery

