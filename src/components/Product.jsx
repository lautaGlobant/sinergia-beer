import React from 'react'
import { connect } from 'react-redux';
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
                <div className='addProd' onClick={() => { props.dispatch({ type:'ADD', prod:props.product }) }}>
                    <span>+</span>
                </div>
            </div>
        </div>
    )
}

export default connect()(Product);