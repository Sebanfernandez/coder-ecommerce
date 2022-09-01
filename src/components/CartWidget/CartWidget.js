import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget';


const CartWidget = () => {
  return (
    <div className="d-flex p-4 ">
    <AddShoppingCartIcon sx={{ fontSize: 60 }} />
    </div>
  )
}

export default CartWidget