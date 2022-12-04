import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function BuildPizza(props) {

    let ingredientscart=props.ingredientscart
    let setIngredientCart=props.setIngredientCart
    let handleingredientsitem=props.handleingredientsitem


    let [ingredients, setIngredients] = useState([]);
    let [ingredientsAmount, setIngredientAmounts] = useState(0);
    


    const handleRemoveIngredientscart = (id) =>{
        const arr = ingredientscart.filter((item)=>item.id !== id);
        setIngredientCart(arr);
        
    }

    const handleRClearAllIngredientscart = () =>{
        setIngredientCart([]);
       
    }

    useEffect(() => {
        axios.get("assets/ingredients.json")
            .then(response => {
                setIngredients(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log("hii", ingredients);
    return (
        <div style={{margin:"0 0 100px 0"}}>
            
            <p align='center'>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing ingredients from the list given below</p>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form>
                    <table className="table table-striped table-bordered table-fixed" align='center'>
                        <tbody>
                            {ingredients.length && ingredients.map(ingredients =>

                                <tr align='center'>
                                    <td><img src={ingredients.image} alt={ingredients.tname} height={30} width={30} style={{ border: "5px" }} /></td>
                                    <td>{ingredients.tname} &nbsp;&nbsp;&nbsp; ₹{ingredients.price}</td>
                                    <td style={{color:"rgb(235, 152, 52)"}}><input type="checkbox" onChange={(e)=>{
                                        if(e.target.checked){
                                            setIngredientAmounts(ingredientsAmount+ingredients.price)
                                            handleingredientsitem(ingredients)
                                        }
                                        else{
                                            setIngredientAmounts(ingredientsAmount-ingredients.price)
                                            handleRemoveIngredientscart(ingredients.id)
                                        }
                                    }}
                                     ></input>Add</td>
                                </tr>)}
                        </tbody>
                    </table>
                    <div align='center'>
                        <b>Total Amount : ₹{ingredientsAmount}</b>
                        <br />
                        <br />
                        <Link to='/cart'><button className='btn btn-dark' style={{color:"rgb(235, 152, 52)"}}>Build Your Pizza</button></Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="button" className='btn btn-dark' style={{color:"rgb(235, 152, 52)"}} onClick={()=>handleRClearAllIngredientscart()} >Clear All</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BuildPizza;