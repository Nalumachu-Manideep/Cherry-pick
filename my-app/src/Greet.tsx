import React, { ReactNode } from "react";
import './Greet.css';

// Define the props type
interface GreetProps {
    name: string;
    heroName: string;
    children?: ReactNode;
}

function Greet({ name, heroName }: GreetProps) {
    return (
        <>
            
            {/* also known as */}
            <div id="container">
                <label htmlFor="operand1">Enter the Operand 1 :</label>
                <input type="text"  id="input1"></input>
            </div>

            <div id="container">
                <label htmlFor="operand2">Enter the Operand 2 :</label>
                <input type="text" id="input2"></input>
            </div>

            <h3>Select the Operation you want to perform and then <span>click on Get Result button</span> :</h3>
            
            <select id="operations" data-select>
                <option value="Addition">Addition</option>
                <option value="Subtraction">Subtraction</option>
                <option value="Multiplication">Multiplication</option>
                <option value="Division">Division</option>
            </select>
            
            <button id="btn">Get Result</button>

            <h1>I am {name} a.k.a {heroName}</h1>
        </>
    );
}

export default Greet;

// Using Arrow Function and Exporting without default
// export const Greet: React.FC = () => <h1>Hi, I am Manideep</h1>;
