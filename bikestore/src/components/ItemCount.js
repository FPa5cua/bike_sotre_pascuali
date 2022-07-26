import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'

const ItemCount = ({initial, stock, onAdd}) => {

    const [counter, setCounter] = useState(initial)
    //console.log('me renderice soy el counter')
    
     const pluser = () => {
        if (counter < stock){
            setCounter(counter + 1)
        }
        
     }
     const substracter = () => {
        if (counter > 0){
        setCounter(counter - 1)
    }
     }

  return (
    <>
        <div>
            <Button variant="danger" onClick={substracter}>-</Button>{' '}
            <span>{counter}</span>
            {' '}<Button variant="success" onClick={pluser}>+</Button>
        </div>
        <Button variant="primary" onClick={()=>onAdd(counter)}>Agregar al carrito</Button>
    </>
  )
}

export default ItemCount