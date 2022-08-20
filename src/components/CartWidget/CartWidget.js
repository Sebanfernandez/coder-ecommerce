import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget';


const CartWidget = () => {
  return (
    <div className="p-4 CartIcon">
    <AddShoppingCartIcon sx={{ fontSize: 60 }} />
    </div>
  )
}

export default CartWidget