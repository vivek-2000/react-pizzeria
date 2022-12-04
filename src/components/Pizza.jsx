
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './Pizza.css'

function Pizza(props) {
    let handleClick = props.handleClick
    let cart = props.cart
    let setCart = props.setCart
    let [pizza, setpizza] = useState([]);
    const [flag, setflag] = useState({
        toggle: [0, 1, 2, 3, 4, 5], index: ''
    });

    const handleRemovecart = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);

    }

    const addTocart = (index) => {
        setflag({
            ...flag,
            toggle: flag.toggle.filter((t) => t !== index)
        })
    }

    const removeTocart = (index) => {
        setflag({
            ...flag,
            toggle: [...flag.toggle, index]
        })
    }

    useEffect(() => {
        axios.get("assets/pizza.json")
            .then(response => {
                setpizza(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    console.log("hii", pizza);
    return (

        <div style={{ marginLeft: "94px" }}>
            {pizza.length && pizza.map((pizza, index) => (
                <div className="mx-2 mt-3 card" style={{ height: "350px", width: "530px", display: 'inline-block' }}>
                    <div className="d-flex flex-column" id='cardss'>
                        <div className="d-flex flex-row">
                            <h6 className="p-2">{pizza.name}</h6>
                            <span className="p-2" style={{ marginLeft: "4px" }}>{pizza.description}</span>
                            <img className="p-2" style={{}} src={pizza.image} alt={pizza.tname} height={50} width={50} />
                        </div>
                        <div className="d-flex flex-row">
                            {/* <h6 className="p-2">{pizza.type}</h6> */}

                            {
                                (() => {
                                    if (pizza.type === "veg") {

                                        return (
                                            <div className='p-2' id='veg' style={{ width: "5px", height: "5px", align: 'center', marginLeft: '20px' }}>
                                                <img style={{
                                                    height: "24px", width: "20px" ,marginLeft: "-16px"
                                                }} src="assets/veg.png" alt="veg"></img>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className='p-2' id='nonveg' style={{ width: "15px", height: "15px", align: 'center', marginLeft: '20px' }}>
                                                <img id='nonveg' style={{
                                                    height: "24px", width: "20px" ,marginLeft: "-16px"
                                                }}  src="assets/nonveg.png" alt="nonveg"></img>
                                            </div>
                                        )
                                    }
                                })()}



                            <dl className="p-2" style={{ marginRight: 50, display: 'inline-block' }} >
                                <dt style={{ display: 'inline-block' }}>Ingredients: <span style={{ fontWeight: 'normal' }}>{pizza.ingredients.join(",")}</span></dt>


                            </dl>
                            <dd style={{ display: 'inline-block', fontSize: 13 }}></dd>

                        </div>
                        <div className="d-flex flex-row" style={{ display: 'inline-block', fontSize: 14 }}>

                            <p className="p-2"  >₹{pizza.price}</p>

                            <dl className="p-2" style={{ marginRight: 50, display: 'inline-block' }} >
                                <dt style={{ display: 'inline-block' }}>Toppings : <span style={{ fontWeight: 'normal' }}>{pizza.topping.join(",")}</span></dt>

                            </dl>
                            <div>
                                {
                                    flag.toggle.includes(index) ? (<button onClick={() => { handleClick(pizza); addTocart(index) }} style={{ marginRight: "20px", width: 100, height: 38, fontSize: "8" }} className=" p-2 btn btn-warning" id='bbutton' >Add to Cart
                                    </button>) : (<button onClick={() => { handleRemovecart(pizza.id); removeTocart(index) }} style={{ marginRight: "20px", width: 100, height: 38, fontSize: "8" }} className=" p-2 btn btn-danger" id='bbutton' >Remove
                                    </button>)
                                }
                            </div>

                        </div>

                    </div>
                </div>))}
        </div>
    );
}

export default Pizza;