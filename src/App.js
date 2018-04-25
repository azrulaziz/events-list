import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import EventDashboard from './components/EventDashboard'
import EventPage from './components/EventPage'

// Setup the route for home page and single event page
const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={EventDashboard} exact={true}/>
        <Route path="/:id" component={EventPage}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

  

export default App;
