import React from 'react'
import ReactDOM from 'react-dom'
import Product from './Product'

const Menu = (props) => {
    return (
        <div className='Menu'>
            <h2>{props.title}</h2>
            <div>
                {
                    props.products.map((p) => {
                        return <Product key={p.name} product={p} />
                    })
                }
            </div>
        </div>
    )
}

export default Menu;