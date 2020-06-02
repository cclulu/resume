import React from 'react';
import Home from './pages/home/home.jsx'
import {Route, Switch} from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}/>
          <Route exact path='/anubis' render={(props) => <Home {...props} />}/>
          <Route exact path='/anubispp' render={(props) => <Home {...props} />}/>
          <Route exact path='/conveyor' render={(props) => <Home {...props} />}/>
          <Route exact path='/rundeck' render={(props) => <Home {...props} />}/>
          <Route exact path='/symphony' render={(props) => <Home {...props} />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
