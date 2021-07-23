import React from 'react'
import { connect } from 'react-redux'
import {useEffect} from 'react'
import './ListProduct.css'

const ListProduct = (props) => {

    useEffect(() => {
        console.log('aaaa!')
    }, [props.product.quantity])

    const removeProduct = (prod) => {
        props.dispatch({ type:'REMOVE', prod:prod })
    }

    return (
        <div className='ListProduct'>
            <span className='remove' onClick={() => { removeProduct(props.product) }} >x</span>
            <span>{props.product.quantity}</span>
            <span>{props.product.name}</span>
            <span>{props.product.price}</span>
        </div>
    )
}

export default connect()(ListProduct);