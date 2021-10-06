import React from "react";
import Produit from "../Produit/Produit";
import './ListeProduit.css';

export default class ListeProduit extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <section>
                <p>Liste de produit</p>
                <Produit></Produit>
            </section>
        );
    }
}