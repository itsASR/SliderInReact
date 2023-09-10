import React, { useContext } from 'react'
import {cont} from './EcommerceRoute'
import {consta} from './EcommerceRoute'


function Cart() {

  function removecartitem(productpri){
    cartdata.filter((productpri) => {
      console.log(productpri.id)
    })
  }


  const {cartdata}  = useContext(consta)
  const {cartout,setcartout} = useContext(cont)
    
  
  return (
    <>
    <div className="cartdiv" style={{right: cartout?'0':'-355px'}}>
        <button className='crossbtn' onClick={() => {setcartout(false)}}>X</button>
        
        
        
        {
            cartdata.map((productpri) => {
                return <div className="productdivcart">
                    <div className="imgdivcart">
                    <img src={productpri.image} />
                    </div>
                    <div className="cartdecribe">
                    <h1>{productpri.title}</h1>
                    <h2>{productpri.price}</h2>
                    <button onClick={() => {removecartitem(productpri)}}>Remove</button>
                    </div>
                    
                </div>
            })
}
</div>

        

        
   
    
    
    
    </>
  )
}

export default Cart