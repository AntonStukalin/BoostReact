import './App.css';
import {Header} from './components/Header'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import React from "react";
import {Home} from "./pages/Home";
import {Reg} from "./pages/Reg";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <div>
            <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/reg'} component={Reg}/>
            </Switch>
        </div>
    </BrowserRouter>

  );
}

export default App;
