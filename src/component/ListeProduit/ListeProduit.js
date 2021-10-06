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
        console.log(this);
        this.setState((state)=>{
            state.data.pop();
            return ({data : state.data});
        });
    }

    cliqueProduit(e){
        console.log("cliqué");
        console.log(e);
    }

    render(){
        console.log("render");
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