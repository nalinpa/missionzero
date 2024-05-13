import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Navigation  from './components/Navigation/Navigation';
import HomeCarousel from './components/HomeCarousel/HomeCarousel';
import HomeCards from './components/HomeCards/HomeCards';
import Hero from './components/Hero/Hero';
import Banner from './components/Banner/Banner';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero hero="roomsHero">
        <Banner title="Marketing Company" subtitle="bla lblablabalbal">
          <SearchBar />
        </Banner>
      </Hero>
      <Container>         
          <Row>
              <HomeCards />
          </Row>        
      </Container>
    </div>
  );
}

export default App;
