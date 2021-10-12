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

    render(){
        console.log("render");
        console.log(this.state.data)
        const aListeProduits = this.state.data.map((item, index)=>{
            //console.log(item);
            return(
                <Produit info={item} clique={this.cliqueProduit} key={index}></Produit>
                //<Produit {...item} key={index}></Produit>
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