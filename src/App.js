//import logo from './logo.svg';
import './App.css';
//import { Link, Route, Routes } from 'react-router-dom';
/* import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Pizza from './components/Pizza'; */
import Footer from './components/Footer';
import { useState } from 'react';
import Navbar from './components/Navbar';
function App() {

	const [cart, setCart] = useState([]);
	//let cart=['1']
	const handleClick = (item) => {
		console.log(item)
		let isPresent = false;
		cart.forEach((product) => {
			if (item.id === product.id)
				isPresent = true;
		})
		if (isPresent) {
			return;
		}
		item["amount"] = 1;
		setCart([...cart, item]);
	}

	const handleChange = (item, d,id) => {

		let ind = -1;
		cart.forEach((data, index) => {
			if (data.id === item.id)
				ind = index;
		});
		let localCart = cart;
		console.log("jjjjjj")
		console.log("aviii", localCart)
		
		console.log("vvvvvvvvvvvvvvvvvvvvv", localCart[ind]["amount"])
		
		if (localCart[ind]["amount"] >= 1) {
			if (localCart[ind]["amount"] === 1 && d===-1){

			}
			else
			localCart[ind]["amount"] = localCart[ind]["amount"] + d
			console.log(" patel vivek", localCart)
			//console.log("checkin value",localCart[ind]["amount"] )
			/* if(localCart[ind]["amount"] === 0){
				console.log("checkin value",localCart[ind]["amount"] )
				const arr = localCart.filter((item)=>item.id !== id);
        		setCart(arr);
				localCart = cart;
			} */
		}
		
		console.log(" patel", localCart)


		if (localCart[ind].price === 0)
			localCart[ind].price = 1;
		setCart([...localCart])

	}

	return (
		<div className="App">
			<Navbar sizes={cart.length} handleClick={handleClick} cart={cart} setCart={setCart} handleChange={handleChange} />

			<Footer />
		</div>
	);
}

export default App;
