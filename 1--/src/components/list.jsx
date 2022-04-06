
import React from  "react";

const List = (props)=>{

    return (
        <div>
            <h1> { props.heading } </h1> 
            <ul>
                <li>Android</li>
                <li>Blackberry</li>
                <li>iPhone</li>
                <li>Windows Phone</li>
            </ul>
        </div>
    );

}

export default List ;