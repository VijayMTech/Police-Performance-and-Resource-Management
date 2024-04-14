// import React from 'react';
// import Navbar from './Navbar';
// import Slider from './Slider';
// import BodyContent from './BodyContent';
// import Footer from './Footer';
// import SecondaryNavbar from './SecondaryNavbar';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import About  from './About';

// function App() {
//   return (
//     <div className="App">
//     <Navbar/>
//     <SecondaryNavbar/>
//       {/* <Slider/> */}
//       {/* <BodyContent /> */}
      
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Navbar from './Navbar';
import SecondaryNavbar from './SecondaryNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login'
import ACPPage from './ACPPage';
import PIPage from './PIPage';
import SIPage from './SIPage';
import Dclogin from './Dclogin';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login}/>
          <Route path="/ACP" component={ACPPage} />
          <Route path="/PI" component={PIPage} />
          <Route path="/SI" component={SIPage} />
          <Route path = "/Dclogin" component={Dclogin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
