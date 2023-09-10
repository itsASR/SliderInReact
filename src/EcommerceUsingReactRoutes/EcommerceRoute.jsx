import React, { createContext, useState } from 'react'
import Header from './Header'
import ProductSection from './ProductSection'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart';
export const cont =createContext()
export const consta =createContext()




function EcommerceRoute() {
  const [cartout , setcartout] = useState(false)
  const [cartdata, setcartdata] =useState([])
  
  return (
    <>
   

<consta.Provider value={{cartdata, setcartdata}}>

<cont.Provider value={{cartout , setcartout}}>
<BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductSection />}></Route>
        </Routes>
      </BrowserRouter>
    
      </cont.Provider>
      </consta.Provider>
    
    </>
  )
}

export default EcommerceRoute