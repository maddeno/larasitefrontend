import React from 'react'
import {
  Button
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

function bookingOptions() {
    return(
        <div>
            <br/>
            <Button as={NavLink} to="/performances" color="black">Performance</Button> <Button as={NavLink} to="/lessons" color="black">Lesson</Button>
        </div>
    )
}

export default bookingOptions