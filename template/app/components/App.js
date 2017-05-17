import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Helloworld from './Helloworld';

const NoMatch = () => (
  <div>
    <h4>no match</h4>
  </div>
);

ReactDOM.render(
  <Router>
     <Switch>
       <Route path="/" component={Helloworld}/>
       <Route component={NoMatch}/>
     </Switch>
 </Router>,
  document.getElementById('main'));
