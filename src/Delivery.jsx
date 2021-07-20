import React  from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom'
import './Delivery.css';

const Delivery = () => {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState('inactive');
    const [products, setProducts] = useState([]);
    
    const showDelivery = () => {
        console.log('paso algo')
        if(isActive === false){
            setShow('active');
            setIsActive(true);
        }else {
            setShow('inactive');
            setIsActive(false);
        }
    }

    return (
        <div className={'Delivery ' + show}>
            <h4 onClick={() => showDelivery()} class='lengueta' >¡Tu pedido!</h4>
            <div>
            <div className='ListProduct'>
                <span>Doble Ipa</span>
                <span>$150</span>
                <span>x2</span>
            </div>
            <div className='ListProduct'>
                <span>Doble Ipa</span>
                <span>$150</span>
                <span>x2</span>
            </div>
            <div className='ListProduct'>
                <span>Doble Ipa</span>
                <span>$150</span>
                <span>x2</span>
            </div>
        </div>
                {/*
                    products.map((p) => {
                        return <ListProduct product={p}/>
                    })
                */}
            <button value='Pedir' >Pedir</button>
        </div>
    )
}

export default Delivery;