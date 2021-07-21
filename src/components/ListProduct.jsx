import React from 'react'
import ReactDOM from 'react-dom'

const ListProduct = (props) => {
    return (
        <div className='ListProduct'>
            <span>{props.product.name}</span>
            <span>{props.product.price}</span>
            <span>{props.product.quantyty}</span>
        </div>
    )
}

export default ListProduct;