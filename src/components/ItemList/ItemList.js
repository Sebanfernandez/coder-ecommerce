import React from "react";
import Item from '../Item/Item'
import { Link } from "react-router-dom";

const ItemList = ( {Excur} ) => {
    return (
        Excur.map((excur) => 
        <div key = {excur.id}>
            <Link to='/' style={{ textDecoration: 'none'}}>
                <Item  excur = {excur} />
            </Link>
        </div>)
    )
}

export default ItemList