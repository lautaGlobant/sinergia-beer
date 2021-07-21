import React from 'react'
import { connect } from 'react-redux'

const ListProduct = (props) => {
    return (
        <div className='ListProduct'>
            <span>{props.product.name}</span>
            <span>{props.product.price}</span>
        </div>
    )
}

export default connect()(ListProduct);