import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import Cookies from 'js-cookie';


import Choice from './choice';
import Forest from './Cursed';
import Grove from './Grove'
import Magic from './Magic'
import NoMagic from './NoMagic'
import NPath from './NPath'
import Puzzle from './Puzzle'
import AnotherWay from './AnotherWay'
import Dollhouse from './Dollhouse'
import Dolls from './Dolls'
import Library from './Library'
import Avoid from './Avoid';
import Games from './Games';
import Ritual from './Ritual';
import Books from './Books';
import Circus from './Circus';
import Funhouse from './Funhouse';
import Backstage from './Backstage';
import Illusions from './Illusions';
import Caution from './Caution';
import TrueBad from './TrueBad';
import TrueGood from './TrueGood';
import Notes from './Notes';
import Leave from './Leave';
import Sidequest from './Sidequest';
import Attic from './Attic';
import UpAttic from './UpAttic';
import AtticFail from './AtticFail';
import DollRoom from './DollRoom';
import Diary from './Diary';
import DiaryReveal from './DiaryReveal';
import Entry1 from './Entry1';
import Entry5 from './Entry5';
import Entry10 from './Entry10';
import Entry15 from './Entry15';
import Entry20 from './Entry20';
import Entry25 from './Entry25';
import FinalEntry from './FinalEntry';

function MainApp() {
  return (
    <div className="App">
      <div className='background'></div>
      <p className='blood'>Alice's Descent</p>
      <a className='button' href='/choices'>Start</a>
    </div>
  );
}

function ClearCookies() {
  Cookies.remove("TrueGood");
  Cookies.remove("TrueBad");

  //true bad
  Cookies.remove("Magic");
  Cookies.remove("Caution");
  Cookies.remove("Library");

  //true ending
  Cookies.remove("NoMagic");
  Cookies.remove("Illusions");
  Cookies.remove("Notes");
  Cookies.remove("Ritual");
  Cookies.remove("Games");
  Cookies.remove("Puzzle");
}

function NavBar() {
  return (
    <div className='topnav'>
      <a href='/'><img id="logo" src="./Alice.png"></img></a>
    </div>
  );
}

function App() {

  if (Cookies.get("TrueGood") && !null) {
    ClearCookies();
  }


  if (Cookies.get("TrueBad") && !null) {
    ClearCookies();
  }


  let BadEnding =
    (Cookies.get("Magic") && !null)
    && (Cookies.get("Caution") && !null)
    && (Cookies.get("Library") && !null);


  let TrueEnding =
    (Cookies.get("NoMagic") && !null)
    && (Cookies.get("Illusions") && !null)
    && (Cookies.get("Notes") && !null)
    && (Cookies.get("Ritual") && !null)
    && (Cookies.get("Games") && !null)
    && (Cookies.get("Puzzle") && !null);

  if (TrueEnding) {
    return (
      <div className='MainApp'>
        <TrueGood></TrueGood>
      </div>
    );
  }
  if (BadEnding) {
    return (
      <div className='MainApp'>
        <TrueBad></TrueBad>
      </div>
    );
  }

  return (
    <div className='MainApp'>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainApp />} />
          <Route exact path="/choices" element={<Choice />} />
          <Route exact path='/Forest' element={<Forest />} />
          <Route exact path='/Grove' element={<Grove />} />
          <Route exact path='/Magic' element={<Magic />} />
          <Route exact path='/NoMagic' element={<NoMagic />} />
          <Route exact path='/Path' element={<NPath />} />
          <Route exact path='/Puzzle' element={<Puzzle />} />
          <Route exact path='/AnotherWay' element={<AnotherWay />} />
          <Route exact path='/Dollhouse' element={<Dollhouse />} />
          <Route exact path='/Dolls' element={<Dolls />} />
          <Route exact path='/Library' element={<Library />} />
          <Route exact path='/Avoid' element={<Avoid />} />
          <Route exact path='/Games' element={<Games />} />
          <Route exact path='/Ritual' element={<Ritual />} />
          <Route exact path='/Books' element={<Books />} />
          <Route exact path='/Circus' element={<Circus />} />
          <Route exact path='/Funhouse' element={<Funhouse />} />
          <Route exact path='/Backstage' element={<Backstage />} />
          <Route exact path='/Illusions' element={<Illusions />} />
          <Route exact path='Caution' element={<Caution />} />
          <Route exact path='TrueBad' element={<TrueBad />} />
          <Route exact path='Notes' element={<Notes />} />
          <Route exact path='Leave' element={<Leave />} />
          <Route exact path='Sidequest' element={<Sidequest />} />
          <Route exact path='Attic' element={<Attic />} />
          <Route exact path='UpAttic' element={<UpAttic />} />
          <Route exact path='AtticFail' element={<AtticFail />} />
          <Route exact path='DollRoom' element={<DollRoom />} />
          <Route exact path='Diary' element={<Diary />} />
          <Route exact path='DiaryReveal' element={<DiaryReveal />} />
          <Route exact path='Entry1' element={<Entry1 />} />
          <Route exact path='Entry5' element={<Entry5 />} />
          <Route exact path='Entry10' element={<Entry10 />} />
          <Route exact path='Entry15' element={<Entry15 />} />
          <Route exact path='Entry20' element={<Entry20 />} />
          <Route exact path='Entry25' element={<Entry25 />} />
          <Route exact path='FinalEntry' element={<FinalEntry />} />
        </Routes>
      </Router>
    </div>
  );
}





export default App;
