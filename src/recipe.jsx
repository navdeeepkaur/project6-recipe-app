import React, { useEffect, useState } from "react";
import './recipe.css';
import axios from "axios";
import Single from "./single";
import Popular from "./popular";
import Footer from "./footer";

export default function Recipe(){

    const ID="7ed22bea";
    const KEY="836b8b82f9864e5de9bdc68efe6513fd";
    const [res, setRes]=useState([]);
    const [searchItem, setSearchItem]=useState("pizza");

    const getRecipe= async (item)=>{
        const data= await axios.get(`https://api.edamam.com/search?app_id=${ID}&app_key=${KEY}&q=${item}&from=16&to=28`);
        console.log(data.data.hits);
        setRes(data.data.hits);
    }

    const handleClick=()=>{
        console.log(searchItem);
        getRecipe(searchItem);
    }

    return(
        <div className="recipe">
            <div className="photo">
                <img src="bg.jpg" alt="" />
            </div>
            <div className="search">
                    <input type="text" placeholder="Search a Recipe" onChange={(e)=>{setSearchItem(e.target.value)}}/>
                    <button onClick={handleClick}><i className="fa-solid fa-magnifying-glass" style={{color: "#ffffff"}}></i></button>
            </div>
            {res.map((reci, id)=>(
                <Single key={id} img={reci.recipe.image} title={reci.recipe.label} u={reci.recipe.url} ingredients={reci.recipe.ingredients}/>
            ))}
            <Popular/>
            <Footer/>
        </div>
    )
}