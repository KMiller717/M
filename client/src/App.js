import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from '@reach/router';
import NewPet from './components/NewPet';
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import Details from './components/Details';


function App() {

  const[active, setActive] = useState("/")
  return (
    <div className="App">
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Pet Shelter</h1>
      </div>
    </div>
      <ul className="nav nav-tabs">
        <li className="nav-item" onClick ={e =>setActive("/")}>
          <Link className={ active === "/" ? "nav-link active" : "nav-link" } to="/">Home</Link>
        </li>
        <li className="nav-item" onClick ={e =>setActive("/new")}>
          <Link className={ active === "/new" ? "nav-link active" : "nav-link" } to="/new">New Pet</Link>
        </li>
      </ul>


      <Router>
        <AllPets path="/" />
        <NewPet path="/new" />
        <EditPet path="/edit/:_id" />
        <Details path="/pet/show/:_id" />

      </Router>


    </div>
  );
}

export default App;
