import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home'; 
import Search from './Search';
import Header from './Header';
import CarShow from './CarShow';

class App extends Component {
  render() {
    return (
      <div className="container" id="container">
        <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route path="/:make/:model/:id" component={CarShow} />
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
