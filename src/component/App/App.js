// https://reactrouter.com/web/guides/quick-start


import React from 'react';
import Accueil from '../Accueil/Accueil';
import Entete from '../Entete/Entete';
import ListeProduit from '../ListeProduit/ListeProduit';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom";

import './App.css';

export default class App extends React.Component{

  render(){
    return(
      <Router>
        <Entete></Entete>
        <Switch>
            <Route exact path="/" component={Accueil}></Route>
            <Route exact path ="/produit">
              <ListeProduit></ListeProduit>
            </Route>
            <Route exact path ="/produit/:id">
              <p>Détail d'un produit</p>
            </Route>
            <Route exact path="/contact" render={()=><p>page contact</p>}></Route>
            <Route exact path="*" render={()=><p>Page non trouvée (404)!</p>}></Route>
        </Switch>

      </Router>
      
    );
  }
}
