import React from "react";
import Navbar from "../components/Navbar";
import DividedByZeroError from "../components/DividedByZeroError";
import Calculate from "../components/Calculate";
import Footer from "../components/Footer";

const Calculator = () => {
    return(
        <div>
            <Navbar />
            <DividedByZeroError>
                <Calculate />
            </DividedByZeroError>
            <Footer />
        </div>
    )
}

export default Calculator;