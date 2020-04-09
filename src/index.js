import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-less/semantic.less'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Performances from './components/Performances';
import Lessons from './components/Lessons';
import Media from './components/Media';
import RequestsHandler from './components/RequestsHandler';
import AdminValidation from './components/AdminValidation';

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/gallery" component={Gallery}/>
      <Route exact path="/bio" component={Bio}/>
      <Route exact path="/media" component={Media}/>
      <Route exact path="/performances" component={Performances}/>
      <Route exact path="/lessons" component={Lessons}/>
      <Route exact path="/requests" component={AdminValidation}/>
      <Route exact path="/validation" component={AdminValidation}/>
      <Footer/>
    </div>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
