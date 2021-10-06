import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduit from '../ListeProduit/ListeProduit';

import './App.css';

export default class App extends React.Component{

  render(){
    return(
      <div>
        <Entete></Entete>
        <ListeProduit></ListeProduit>
      </div>
    );
  }
}
