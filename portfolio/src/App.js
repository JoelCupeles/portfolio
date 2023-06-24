import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header>
        <Navigation />
      </Header>
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="*" component={AboutMe} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;