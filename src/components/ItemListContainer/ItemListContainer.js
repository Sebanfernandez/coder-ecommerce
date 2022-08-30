import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

const onAdd = (cantidad) => {
    alert(`Se agregaron ${cantidad} item al carrito`)
}

  return (
    <div>
        <div className='d-flex mt-5 h1 justify-content-center'>
            {greeting}
        </div>
        <div className='d-flex justify-content-center mt-5 h1 '>
          <ItemCount stock={5} initial={1} onAdd={onAdd}  />
        </div>
    </div>
  )
}

export default ItemListContainer