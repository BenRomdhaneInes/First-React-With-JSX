import React from 'react';
import './App.css';
import Header from './Components/header';
import Navigation from './Components/navigation';
import Main from './Components/main';
import SubContents from './Components/sub-content';
import Advertisement from './Components/advertisement';

import './App.css'
                
function App() {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <Main>
      <SubContents />
      <SubContents />
      <SubContents />
      <Advertisement />
      </Main>
    </div>
  );
}
                
export default App;

