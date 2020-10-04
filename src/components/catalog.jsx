import React, { Component } from "react";
import Item from "./item";
import ItemService from "../services/itemService";
import "./catalog.css";


class Catalog extends Component {
    state = { 
        items: [],
        categories: [],
        selectedCategory: "",
     };
    render() { 
        let itemsToDisplay = this.state.items;
        
        if(this.state.selectedCategory){
            itemsToDisplay = itemsToDisplay.filter(
                (item) => item.category === this.state.selectedCategory);
        }
        /*
        if selected category is not an emoty string,
        then filter items to Display
        ie.) itemsToDisplay= itemsToDisplay.filter 


        MDN array filter for help to complete competency folder
        */
        return ( 
            <div className="catalog-page">
                <img className="banner-image" src="/images/market-banner2.png" alt=""/>
                <div className="categories">
                    
                        <div 
                            className="category" 
                            key = ""
                            onClick = {() => this.selectedCategory("")}>
                            <h6>All Items</h6>
                        </div>
                    
                        {this.state.categories.map((category) => (
                            <div
                                className = {this.getCategoryClass(category)}
                                key = {category}
                                onClick = {() => this.selectedCategory(category)}
                            >
                                <h6>{category}</h6>
                            </div>
                        ))}       
                </div> 
                

                <div className="products">
                    {itemsToDisplay.map((i)=>(
                    <Item key={i.id} product={i}></Item>)) }
                </div>
            </div>
         );
    }

    getCategoryClass = (catName) => {
        
        let catClass = "category";
        if(catName === this.state.selectedCategory){
            catClass += "active-cat";
        }
        return catClass;
    }; 
    
    selectedCategory = (catName) =>{
        console.log("category clicked", catName);
        this.setState({selectedCategory: catName});
    };

    async componentDidMount(){
        // perfect place to get data from server/DB/ Ajax call
        let service = new ItemService();
        const data = await service.getProducts();
        this.setState({ items: data });

        // travel array
        let cats = [];

        for (let i=0; i<data.length; i++){
            let item = data[i];

            if(!cats.includes(item.category)){
                cats.push(item.category);
            }
        }

        this.setState({ categories: cats });
        console.log("cats", cats);
        // identify the unique catagories  from data
        /* 
        
        1. Travel the array
        So we need a temporary array to store categories we know
        2.  Ask "if this category foes not exist inside my temporary array
        then push it inot the temporary array"
        */
        
        // create an array with those categories
        // set it to the state
    }
}


 
export default Catalog;