import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import 'semantic-ui-less/semantic.less'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Credentials from './components/Credentials';
import Footer from './components/Footer';
import Performances from './components/Performances';
import Lessons from './components/Lessons';
import Media from './components/Media';
import AdminPages from './components/AdminPages';
import Calendar from './components/Calendar';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      authToken: null
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/credentials" component={Credentials}/>
          <Route exact path="/media" component={Media}/>
          <Route exact path="/performances" component={Performances}/>
          <Route exact path="/lessons" component={Lessons}/>
          <Route exact path="/bookings" component={AdminPages}/>
          <Route exact path="/calendar" component={Calendar}/>
          <Footer/>
        </div>
      </Router>
    );
  }

}

export default App;
