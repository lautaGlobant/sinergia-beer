import React from 'react'
import ReactDOM from 'react-dom'
import image from '../public/images/logo-ex.png'

const Header = () => {
    return (
        <div className='Header' style={{backgroundColor:'#2b2b2b', height:'200px', paddingBottom:'15px'}}>
            <img src={image} style={{height:'70%'}}/>
            <h1 style={{color:'#fdfdfd'}}>Sinergia Beer House</h1>
        </div>
    )
}

export default Header;