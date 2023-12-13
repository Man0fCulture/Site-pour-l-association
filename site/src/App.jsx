import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Connection from './Connection';
import Agenda from './Agenda';
import Membres from './Membres';
import Contacter from './Contacter';

const title = "Festivités Garennoises Solidaires"

function App() {

  function Titre ({color}) {

    return <h1 style = {{color : color}}>{title}</h1>
    }

   return (
    <Router>
      <div>
        <Link to="/Home">
          <Titre color="orange" />
        </Link>
        <Link to="/Connection">Connection</Link>
        <Link to="/Agenda"> Agenda</Link>
        <Link to="/Membres"> Membres</Link>
        <Link to="/Contacter"> Contacter</Link>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/Membres" element={<Membres />} />
          <Route path="/Contacter" element={<Contacter />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
