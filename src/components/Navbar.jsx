import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BuildPizza from './BuildPizza';
import Cart from './Cart';
import { useState } from 'react';
import Homepage from './Homepage';


import Pizza from './Pizza';
function Navbar(props) {
    const [ingredientscart, setIngredientCart] = useState([]);
    

    const handleingredientsitem= (ingredientsitem) => {
		console.log(ingredientsitem)
		let isPresent = false;
		ingredientscart.forEach((product) => {
			if (ingredientsitem.id === product.id)
				isPresent = true;
		})
		if (isPresent) {
			return;
		}
		
		setIngredientCart([...ingredientscart, ingredientsitem]);
	}

    console.log("bro",props)
    let size=props.sizes
    let handleClick=props.handleClick
    let cart=props.cart
    let setCart=props.setCart
    let handleChange= props.handleChange
    console.log("size",size)
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{ height: "50px" }}>
                <Link className="nav-link disabled text-white" >Pizzeria</Link>

                <Link className="nav-link" to="/"><img alt='logo' src='assets/pizzerialogo.png' height={50} width={50}></img> </Link>

                <Link className="nav-link text-white" to="/order-pizza"> Order Pizza</Link>
                <Link className="nav-link text-white" to="/build-pizza"> Build Ur Pizza</Link>
                <Link class="p-2 ml-auto bg-warning border-0" to="/cart"><button id="openPopup"  class="bg-warning border-0"><img alt='' src='assets/shopping.png' height={15} width={14} ></img>Shopping Cart  <span>{size}</span></button></Link>



            </nav>

            <Routes>
                <Route index element={<Homepage />} />
                <Route path='/order-pizza' element={<Pizza handleClick={handleClick} cart={cart} setCart={setCart} />} />
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} ingredientscart={ingredientscart} setIngredientCart={setIngredientCart}  />} />
                <Route path="/build-pizza" element={<BuildPizza ingredientscart={ingredientscart} setIngredientCart={setIngredientCart} handleingredientsitem={handleingredientsitem} />} />
            </Routes>
        </div>
    );
}

export default Navbar;