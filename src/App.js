import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container' style={{ marginBottom: 25 }}>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
