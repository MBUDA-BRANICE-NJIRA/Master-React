import React from "react";
const Hello = () => {
    // return ( 
    //     <div>
    //         <h1>Heloo Branice</h1>    CLASS COMPONET WITHOUT JSX
    //     </div>
    //  );

    return React.createElement (
        'div', 
        null,
        React.createElement('h1', null, "Jsx Comparizon") )  //With jsx
        //Its better for writing long code 
}
 
export default Hello;