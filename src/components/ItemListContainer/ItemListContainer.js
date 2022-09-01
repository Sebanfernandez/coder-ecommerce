import React, { useEffect, useState } from 'react'
//import ItemCount from '../ItemCount/ItemCount'
import { getFetch } from '../../Mock'
import ItemList from '../ItemList/ItemList'



const ItemListContainer = ({greeting}) => {

const [Excursions, setExcursions] = useState ([])
const [loading, setLoading] = useState(true)

useEffect(() => {
    getFetch
    .then((respuesta) => setExcursions(respuesta))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}, [] )


//const onAdd = (cantidad) => {
 //   alert(`Se agregaron ${cantidad} item al carrito`)
//}

  return (
    <div className='container' >
        <div className=''>
            {
            loading ? <h1 className='d-flex m-5 h1 justify-content-center'>Cargando...</h1> : 
            <div >
                <div>
                    <p className='d-flex m-5 h1 justify-content-center'>{greeting}</p>
                </div>
                <div className='row row-cols-1 row-cols-md-5'>
                <ItemList Excur = {Excursions}/>    
                </div>
            </div>
            }
        
        </div>
    </div>
  )
}

export default ItemListContainer