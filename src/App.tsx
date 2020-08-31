import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/about-page/about-page';
import HeroDetailsProfile from './pages/hero-details-page/hero-details-page';
import HomePage from './pages/home-page/home-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import RandomPage from './pages/random-page/random-page';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/random" component={RandomPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/details/:id" component={HeroDetailsProfile} />
          <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
