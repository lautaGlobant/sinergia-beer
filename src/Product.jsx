import React from 'react'
import ReactDOM from 'react-dom'
import './Product.css';

const Product = (props) => {
    return (
        <div className='Product'>
            <div className='Desc'>
                <h3>{props.product.name}</h3>
                <span>{props.product.desc}</span>
            </div>
            
            <div className='Price'>
                <span>{props.product.price}</span>
            </div>
        </div>
    )
}

export default Product;