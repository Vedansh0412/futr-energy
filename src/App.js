import React from 'react';
import '../src/css/main.css'; 
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import Journey from './components/journey/journey';
import Offers from './components/offers/offers';
import ThingsToDo from './components/things/things';
import Places from './components/places/places';
import Guide from './components/guide/guide';
import Blog from './components/blog/blog';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Journey />
      <Offers />
      <ThingsToDo />
      <Places />
      <Guide />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
