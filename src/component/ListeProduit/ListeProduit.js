import React from "react";
import Produit from "../Produit/Produit";
import './ListeProduit.css';

export default class ListeProduit extends React.Component{
    constructor(props){
        console.log("constructeur");
        super(props);
        this.state={data: []};

        this.retirerProduit = this.retirerProduit.bind(this);
        
    }

    componentDidMount(){
        console.log("componentDidMount");
        const dummyData = [...Array(10)].map((item, index)=>{
            return {"id":index, "nom": "lorem "+ index, "valeur": index*index};
        })

        
        console.log(dummyData);

        this.setState({data: dummyData})

        // Si jamais vous avez besoin d'envoyer un entete http...
        // Référez-vous au todo...
        // PUT => Demande une authentification de type "Basic "+ btoa("biero:biero");

        fetch("http://127.0.0.1:8000/webservice/php/biere")
            .then(reponse => reponse.json())
            .then(donnees =>{
                this.setState({data:donnees.data})
                
            })
        
    }

    retirerProduit(){
        console.log("retirer produit");
        this.setState((state)=>{
            let tab = [...state.data]; // make a separate copy of the array (https://stackoverflow.com/questions/36326612/how-to-delete-an-item-from-state-array)
            tab.pop();
            return ({data : tab});
        });
    }

    cliqueProduit(e){
        console.log("cliqué");
        console.log(e);
    }

    modif(id){
        console.log("modifier le produit", id );
    }

    render(){
        console.log("render");
        console.log(this.state.data)
        
        
        const aListeProduits = this.state.data.map((item, index)=>{
            //console.log(btnModifier);
            let btnModifier = "";
            if(this.props.connecter){
                btnModifier = <button onClick={()=>this.modif(item.id_biere)}>Modifier</button>;
            }
            return(
                <article>
                    <Produit info={item} clique={this.cliqueProduit} key={index}></Produit>
                    {btnModifier}
                </article>
            )
        });
        //console.log(aListeProduits);

        return (
            
            <section>
                <button onClick={this.retirerProduit}>Retirer produit</button>
                <p>Liste de produit</p>
                {aListeProduits}
            </section>
        );
    }
}