import React from 'react';
import {Link, NavLink} from "react-router-dom";

import './Entete.css';

export default class Entete extends React.Component {
    constructor(props){
        super(props);
        this.state = {  courriel : "",
                        connecter : props.connecter,
                     };

        this.login=this.login.bind(this);
        this.changeCourriel=this.changeCourriel.bind(this);
    }

    login(){    // À compléter, ne permet pas de gérer tout les cas (connecter ou non, courriel valide ou non)
        let bLogin = false;
        if(this.state.courriel && this.state.connecter){
            bLogin = false
        }
        else if(this.state.courriel && !this.state.connecter){
            bLogin = true;
        }
        this.setState({connecter : bLogin});
        this.props.surConnexion(bLogin);
    }

    changeCourriel(evt){
        this.setState({courriel : evt.target.value});
    }

    render(){

        let actif = (!this.state.courriel ? "disabled" : "");
        let boutonLogin = <button disabled={actif} onClick={this.login}>{(this.state.connecter ? "Se déconnecter" : "Se connecter")}</button>;

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
                <section>
                    <input disabled={(this.state.connecter ? "disabled" : "")} value={this.state.courriel} onChange={this.changeCourriel} name="courriel"></input>
                    {boutonLogin}
                    <p>{this.state.courriel}</p>
                </section>
            </header>
        );
    }
}