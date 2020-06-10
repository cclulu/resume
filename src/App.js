import React from 'react';
import Home from './pages/home/home.jsx'
import Header from './Component/header/header.jsx';
import Anubis from './pages/anubis/anubis.jsx'
import AnubisPP from './pages/anubisPP/anubisPP.jsx'
import Conveyor from './pages/conveyor/conveyor.jsx'
import Rundeck from './pages/rundeck/rundeck.jsx'
import Symphony from './pages/symphony/symphony.jsx'
import Vision from './pages/vision/vision.jsx'
import {Route, Switch} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}/>
          <Route exact path='/anubis' render={(props) => <Anubis {...props} />}/>
          <Route exact path='/anubispp' render={(props) => <AnubisPP {...props} />}/>
          <Route exact path='/conveyor' render={(props) => <Conveyor {...props} />}/>
          <Route exact path='/rundeck' render={(props) => <Rundeck {...props} />}/>
          <Route exact path='/symphony' render={(props) => <Symphony {...props} />}/>
          <Route exact path='/vision' render={(props) => <Vision {...props} />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
