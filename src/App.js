import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {
  
// Created Router for Home page by using internal package such as react-router-dom

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
