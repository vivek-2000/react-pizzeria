import React from 'react';
import './Homepage.css'

function Homepage(props) {
    return (
        <div >
            <br />
            <h4 style={{ textAlign: "center" }}> Our Story </h4>
            <div className='story'>
                <p>
                    We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza.

                </p>

                <p>
                    Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match
                </p>


                <p>
                    We launched Fresh Pan Pizza Best Excuse Awards or gur Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
                </p>
            </div>
            <div className='d-flex flex-row' >
                <img className='p-2' src="assets/ingridents_original.webp" alt="ingredients" />
                <div style={{ marginTop: "100px" }}>
                    <h6 className='p-2' style={{ marginLeft: "100px" }}> Ingredients</h6>

                    <p className='p-2' style={{ marginLeft: "100px", marginRight: "50px" }}>
                        We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut Cut. Chop. Chop. Steam. Steam. Stir Stir. While they're still young and fresh- that's our motto. It makes the kitchen a better place.
                    </p>
                </div>
            </div>


            <div className='d-flex flex-row' >
                {/* <img  className='p-2' src="assets/ingredients.jpeg" alt="ingredients" /> */}
                <div style={{ marginTop: "50px" }}>
                    <h6 className='p-2' style={{ marginLeft: "50px" }}> Our Chefs</h6>

                    <p className='p-2' style={{ marginLeft: "50px", marginRight: "50px" }}>

                        They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.
                    </p>
                </div>
                <img className='p-2' src="assets/cheforg.webp" style={{ marginRight: "300px" }} alt="chef" />
            </div>

            <div className='d-flex flex-row' >
                <img className='p-2' src="assets/kitchencountdown.webp"  alt="timer"  />
                <div style={{ marginTop: "100px" }}>
                    <h5 className='p-2' style={{ marginLeft: "100px" }}> 45 min delivery</h5>

                </div>
            </div>


        </div>
    );
}

export default Homepage;