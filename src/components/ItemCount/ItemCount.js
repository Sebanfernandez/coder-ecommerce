import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import RemoveIcon from '@mui/icons-material/Remove';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ItemCount({stock, initial, onAdd}) {
    const [counter, setCounter] = useState(initial)

    const handlerCounterUp = () => {
        if(stock > counter){
        setCounter(counter + 1)
        }
    }
    const handlerCounterDown = () => {
        if(counter > 1)
        setCounter(counter - 1)
    }

    const addCart = () => {
        onAdd(counter)
    }

    return (
      <div>
      <div >
      <Box className='d-flex' sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab  onClick={handlerCounterUp} color="primary">
          <AddIcon />
        </Fab>
            <p>
             {counter}  
            </p>
        <Fab onClick={handlerCounterDown} color="primary">
          <RemoveIcon />
        </Fab>
      </Box>
      </div>
      <div>
      <Stack spacing={2} direction="row">
      <Button onClick={addCart} className='mt-3' variant="contained">Agregar al Carrito</Button>
    </Stack>
      </div>
      </div>
    );
  }

  export default ItemCount