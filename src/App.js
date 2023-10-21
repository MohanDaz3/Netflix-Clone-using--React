import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner';
import RowPoster from './components/RowPoster/RowPoster';
import Footer from './components/Footer/Footer'
import {originals,actions,comedy,horror,romance,trendings} from './Urls'

function App() {
  return (
   <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPoster url={originals} title='Netflix Originals'/>
    <RowPoster url={actions} title='Actions'/>
    <RowPoster url={comedy} title='Comedy'/>
    <RowPoster url={horror} title='Horror'/>
    <RowPoster url={romance} title='Romance'/>
    <RowPoster url={trendings} title='Trending'/>
    <Footer/>

   </div>
  );
};

export default App;
