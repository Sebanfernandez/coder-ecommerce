import React from "react";
import Item from '../Item/Item'

const ItemList = ( {Excur} ) => {
    return (
        Excur.map((excur) => <Item key = {excur.id} excur = {excur} />)
    )
}

export default ItemList