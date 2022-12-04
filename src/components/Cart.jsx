import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
function Cart(props) {
    console.log("Anshu", props.cart)
    let cart = props.cart
    let setCart = props.setCart
    let handleChange = props.handleChange
    let ingredientscart = props.ingredientscart
    let setIngredientCart = props.setIngredientCart

    console.log("inggg", ingredientscart)

    const [prices, setPrices] = useState(0);
    const [totalpriceIng, settotalpriceIng] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrices(ans);
    }
    const handleIngPrice = () => {
        let ans = 0;
        ingredientscart.map((item) => (
            ans += item.price
        ))
        settotalpriceIng(ans);
    }
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);

    }
    const [warning, setWarning] = useState(false);
    const handleCheckOut = () => {

        setCart([]);
        setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
        return;
        //alert("Thank You For Shopping?")





}

const handleRemoveIng = (id) => {
    const arr = ingredientscart.filter((item) => item.id !== id);
    setIngredientCart(arr);

}
useEffect(() => {
    handlePrice();
    handleIngPrice();
})
return (
    <div class="wrapper">
        <h1>Shopping Cart</h1>
        <div className="project">
            <div className="shop">
                {cart?.map((item) => (
                    <div class="box" >
                        <img src={item.image} alt={item.name} width={50} height={50} />
                        <div className='content'>
                            <p>{item.name}</p>
                            {/* veg and non veg */}
                            <p> {
                                (() => {
                                    if (item.type === "veg") {

                                        return (
                                            <div id='veg' style={{ width: "5px", height: "5px", align: 'center', marginLeft: '20px' }}>
                                                <img style={{
                                                    height: "24px", width: "23px", marginLeft: "-16px"
                                                }} src="assets/veg.png" alt="veg"></img>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div id='nonveg' style={{ width: "15px", height: "15px", align: 'center', marginLeft: '20px' }}>
                                                <img id='nonveg' style={{
                                                    height: "24px", width: "20px", marginLeft: "-16px"
                                                }} src="assets/nonveg.png" alt="nonveg"></img>
                                            </div>
                                        )
                                    }
                                })()}

                                {/* veg and non veg  END */}
                            </p>
                            <b><br />₹ &nbsp;{item.price}</b>
                            <br />

                            <br />
                            <span>Quantity :</span>
                            <button id="minus" onClick={() => handleChange(item, -1, item.id)}>&nbsp;&nbsp;&nbsp;<i class="fa fa-minus-square"></i>&nbsp;</button>

                            <p style={{ display: "inline-block" }}>{item.amount}&nbsp;</p>
                            <button id='plus' onClick={() => handleChange(item, +1, item.id)}
                            > <i class="fa fa-plus-square"></i> </button>

                            <button className="btn-area" onClick={() => handleRemove(item.id)} ><i aria-hidden="true" class="fa fa-trash"></i></button>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            {cart.length ?
                (<div class="right-bar">

                    <p><span>Subtotal</span> <span>₹{prices}</span></p>
                    <hr />
                    <div><div><span>Ingredients</span></div>
                        <br />
                        {
                            ingredientscart.length ? (ingredientscart.map((item_ing) => (
                                <div className='container'>
                                    <span>{item_ing.tname}</span>
                                    <span> ₹{item_ing.price} <button id='igdel' onClick={() => handleRemoveIng(item_ing.id)}><i aria-hidden="true" class="fa fa-trash"></i></button></span>

                                </div>
                            ))) : (<span>No Ingredients Added</span>)
                        }
                    </div>

                    <hr />
                    <p><span>Total</span> <span> ₹{prices + totalpriceIng}</span></p><Link to="/cart"><button type='submit' style={{ border: "none", outline: "none" }} onClick={() => handleCheckOut()} className='btn'><i class="fa fa-shopping-cart"></i>Checkout</button></Link>

                </div>) : (
                
                <div className='container' align="center" style={{ marginRight: "350px" }}>
                    <img src='assets/empty_cart.png' alt='empty cart'></img>
                    <br />
                    <Link to="/order-pizza"><button className='btn btn-warning'>Continue Shopping</button></Link>

                    <br />
                </div>
                )?(warning ? (<div className='container' align='center' style={{ marginRight: "300px" }}  ><img  height={300} width={400} align='center' src="assets/Thanks.jpg" alt="Thank You For Shopping" /></div>):( <div className='container' align="center" style={{ marginRight: "350px" }}>
                <img src='assets/empty_cart.png' alt='empty cart'></img>
                <br />
                <Link to="/order-pizza"><button className='btn btn-warning'>Continue Shopping</button></Link>

                <br />
            </div>)):
                ( <div className='container' align="center" style={{ marginRight: "350px" }}>
                <img src='assets/empty_cart.png' alt='empty cart'></img>
                <br />
                <Link to="/order-pizza"><button className='btn btn-warning'>Continue Shopping</button></Link>

                <br />
            </div>)}


        </div>
        {/*  {
                            ingredientscart?.map((item_ing) => (
                                <div className='container'>
                                    <span>{item_ing.tname}</span>
                                    <span> ₹{item_ing.price}</span>
                                </div>
                            ))
                        } */}
        {/* {console.log(cart)}
                        {cart.length ?
                            (<div className='total'>
                                <span style={{ fontSize: 20 }}>Total Price of your Cart</span>
                                <span style={{ fontSize: 20 }}>₹ - {prices}</span>
                            </div>) :
                            (<div className='container' align="center">
                                <img src='assets/empty_cart.png' alt='empty cart'></img>
                                <br />
                                <Link to="/order-pizza"><button className='btn btn-warning'>Continue Shopping</button></Link>

                                <br />
                            </div>
                            )} */}

    </div>
);
}

export default Cart;