import React from "react";
import './Produit.css';

export default class Produit extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        
    }
    render(){
        
//      const nom = this.props?.info?.nom;
        const {valeur, nom} = this.props?.info;
//        const {valeur, nom} = this.props;        
        
        return (
            <article onClick={()=>{this.props.clique(this.props.info)}}>
                <p>Nom : {nom}</p>
                <p>Prix : {valeur} $</p>
            </article>
            
        );
    }
}