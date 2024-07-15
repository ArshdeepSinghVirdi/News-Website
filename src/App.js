 import './App.css';

import React from 'react'


import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

const App=()=> {
   const pageSize=5;
   const apiKey=process.env.REACT_APP_NEWS_API
    return (

      // <Router>
      <div>
        <Navbar/>
         <News pageSize={pageSize} country="in" category="Technology" apiKey={apiKey}/> 
        {/* <Switch>
          <Route path="/"><News pageSize={5} country="in" category="General"/></Route>
          <Route path="/Business"><News pageSize={5} country="in" category="Business"/></Route>
          <Route path="/Entertainment"><News pageSize={5} country="in" category="Entertainment"/></Route>
          <Route path="/Health"><News pageSize={5} country="in" category="Health"/></Route>
          <Route path="/Science"><News pageSize={5} country="in" category="Science"/></Route>
          <Route path="/Sports"><News pageSize={5} country="in" category="Sports"/></Route>
          <Route path="/Technology"><News pageSize={5} country="in" category="Technology"/></Route>
          <Route path="/General"><News pageSize={5} country="in" category="General"/></Route>
        </Switch> */}
      </div>
      // </Router>
    )

}

 export default App;
