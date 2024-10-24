import React, { useState } from 'react';
import './App.css';
import BeerListScreen from './screens/BeerListScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';

function App() {

  const [beerList, setBeerList] = useState<string[]>([
    "Coreff",
    "Corona",
    "Mort Subite"
  ])

  return (
    <div className="App" style={{
      padding: 20,
      gap: 20,
    }}>
      <BrowserRouter>
        <Routes>
          <Route
          path='/'
            element={
            <BeerListScreen
              beerList={beerList}
              setBeerList={setBeerList}
            />
          }/>

        <Route
          path='/about'
            element={
            <AboutScreen/>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;