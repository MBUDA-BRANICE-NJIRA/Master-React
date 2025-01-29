import React from "react";
const Hello = () => {
    // return ( 
    //     <div>
    //         <h1>Heloo Branice</h1>
    //     </div>
    //  );

    return React.createElement (
        'div', 
        null,
        React.createElement('h1', null, "Jsx Comparizon") )
}
 
export default Hello;