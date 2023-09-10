import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import {cont} from './EcommerceRoute'

function Header() {

  const {cart, setcartout}  = useContext(cont)





  return (
    <>
    <div className="header">
        <h2>Products</h2>
        
        <Link to= '' onClick={() => {setcartout(true)}}><h2>Cart</h2></Link>
        
    </div>
    
    
    </>
  )
}

export default Header