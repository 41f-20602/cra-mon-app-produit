import React from 'react';
import {Link, NavLink} from "react-router-dom";

import './Entete.css';

export default class Entete extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <header>
                <h1>Titre de mon application</h1>
                <nav>
                    <a href="/">Accueil</a>
                    <Link to="/">Accueil (Link)</Link>
                    <NavLink activeClassName="pageActive" exact to="/">Accueil (NavLink)</NavLink>
                    
                    <a href="/produit">Produit</a>
                    <Link to="/produit">produit (Link)</Link>
                    <NavLink  activeClassName="pageActive"  to="/produit">produit (NavLink)</NavLink>
                </nav>
            </header>
        );
    }
}