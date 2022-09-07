import React from "react";
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({Excursions}) => {
    return (
    <div>    
       <h2>{Excursions.places}</h2> 
        
        <div>
        <ItemCount stock={5} initial={1}/>
        </div>
    </div>    
    )
}


export default ItemDetail