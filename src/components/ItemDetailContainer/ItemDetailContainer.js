import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import ItemCount from '../ItemCount/ItemCount'
import { getFetch } from '../../Mock'
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () => {

const [Excursions, setExcursions] = useState ([]);
const [loading, setLoading] = useState(true);
const { categoryid } = useParams();

useEffect(() => {
    getFetch
    .then(resp => setExcursions(resp.find(excur => excur.id === categoryid)))
    .finally(() => setLoading(false))
}, [categoryid] )
console.log(Excursions);

//const onAdd = (cantidad) => {
 //   alert(`Se agregaron ${cantidad} item al carrito`)
//}

  return (
    <div className='container' >
        <div className=''>
            {
            loading ? <h1 className='d-flex m-5 h1 justify-content-center'>Cargando...</h1> : 
            <div >
                <div className='row row-cols-1 row-cols-md-4'>
                <ItemDetail Excur = {Excursions}/>    
                </div>
            </div>
            }
        
        </div>
    </div>
  )
}

export default ItemDetailContainer