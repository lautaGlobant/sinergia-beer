import React  from 'react'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import ListProduct from './ListProduct';
import './Delivery.css';

const Delivery = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState('inactive');
    
    const showDelivery = () => {
        if(isActive === false){
            setShow('active');
            setIsActive(true);
        }else {
            setShow('inactive');
            setIsActive(false);
        }
    }
    
    

    let cartList;
    if(props.products.length > 0){
        cartList = (
            <div className='myProds'>
                {props.products.map((p) => {
                    return <ListProduct key={p.name} product={p}/>
                })}
            </div>
        )
    }else {
        cartList = (
            <div className='myProds'>
                <h3>¡Nada por ahora!</h3>
            </div>
        )
    }

    console.log(props.products)

    return (
        <div className={'Delivery ' + show}>
            <h4 onClick={() => showDelivery()} className='lengueta' >¡Tu pedido!</h4>
            {cartList}
            <button value='Pedir' >Pedir</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { products: state.products }
}

export default connect(mapStateToProps)(Delivery);