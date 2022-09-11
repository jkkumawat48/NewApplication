import React from "react";
import { Switch, Route } from "react-router-dom";
import {BrowserRouter as Router } from 'react-router-dom';
import Login from './Component/Login';
import Ragister from './Component/Ragister';
import AddProduct from './Component/AddProduct';
import UpdateProduct from './Component/UpdateProduct';
import Home from './Component/Home';
import About from './Component/About';

export default function Routing(){
return(
    <div>
        <Router> 
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/about" component={About}/>
     <Route path="/ragister" component={Ragister}/>
     <Route path="/addproduct" component={AddProduct}/>
     <Route path="/updateproduct" component={UpdateProduct}/>
        </Switch>
        </Router>
    </div>
)
}