import React from 'react'
import ReactDOM from 'react-dom'
import image from '../public/images/logo-ex.png'

const Header = () => {
    let screen = window.screen.height;
    if(screen > 500) { screen = screen - 150}
    
    return (
        <div className='Header' style={{backgroundColor:'#2b2b2b', height:screen+'px', paddingBottom:'15px'}}>
            <img src={image} style={{height:'70%'}}/>
            <h1 style={{color:'#fdfdfd'}}>Sinergia Beer House</h1>
        </div>
    )
}

export default Header;