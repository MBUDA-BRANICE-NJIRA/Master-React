import React from "react";

// // Method 1
// const Greet = () => {
//     return ( 
//         <h1>Heloo Branice</h1>
//      );
// }

 
// export default Greet;


//Method 2
// This is using short cut in arrow function
const Great = (props)=> {
    console.log(props)
    return  <h1>Heloo {props.name}</h1> }  // This is a methode used called props.It helps in re using of codes .

export default Great;