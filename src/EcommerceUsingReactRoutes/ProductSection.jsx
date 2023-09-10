import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Cart from './Cart'
import {consta} from './EcommerceRoute'



function ProductSection() {
    // const [producttitle, setproducttitle] = useState("")
    // const [productprice, setproductprice] = useState("")
    // const [productimage, setproductimage] = useState("")
    const [products, setProducts] = useState([])
    // const [cartdata, setcartdata] =useState([])
    const {cartdata, setcartdata}  = useContext(consta)
    
    

    function cartdatafunction(productpri){
        setcartdata([...cartdata, productpri])
        console.log(cartdata)
    }

    useEffect(() => {
        function callproduct() {
            axios
                .get("https://fakestoreapi.com/products")
                .then((data) => {
                    setProducts(data.data)
                    console.log(data.data[0])
                })


                

    }
    callproduct()
    }, [])


   



return (
    <>
    <div className="maindiv">
        
    
        
{
            products.map((productpri) => {
                return <div className="productdiv">
                    <div className="imgdiv">
                    <img src={productpri.image} />
                    </div>
                    <h1>{productpri.title}</h1>
                    <h2>{productpri.price}</h2>
                    <button onClick={() => {cartdatafunction(productpri)}}>Add to CART</button>
                </div>
            })
}
</div>



<Cart></Cart>



    </>
)
}

export default ProductSection