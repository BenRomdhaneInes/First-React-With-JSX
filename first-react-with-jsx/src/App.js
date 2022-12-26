import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Details from './Details'
import Form from './Form';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Form/>
      <Routes>
        <Route path="/:type/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
                
export default App;

