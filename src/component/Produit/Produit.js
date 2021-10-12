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
            <article className='unProduit init'  onClick={()=>{this.props.clique(this.props.info)}}>
                <div className='image'><img src="204x204.png" /></div>
                <div className='texte'>
                    <p className='nom'>Nom : {nom}</p>
                    <p>Fabricant ou autre mot qui permet de comprendre... : {this.props.info.brasserie}</p>
                </div>
            </article>
        );
    }
}