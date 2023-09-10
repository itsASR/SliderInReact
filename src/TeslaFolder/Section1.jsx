import React from 'react'
import model3 from './model-3.jpg'

function Section1(props) {


    function hideo(){
        if(props.tag1 === 'ORDER NOW'){
            return 'none'
        }
        
    }




    return (
        <>
        
        <div className="section1div"  style={{backgroundImage: 'url('+props.imgsrc+')'}}>

        <div className="titlediv">
        <h1>{props.title}</h1>
        <p>Order Online for touchless delivery</p>

        <div className="twobuttons">
                <div className="twobuttons2a">
                    <a href="#">{props.tag1}</a>
                </div>
    
                <div className="twobuttons2b" style={{ORDER NOW ? 'NONE' : 'BLOCK'}}>
                {/* <div className="twobuttons2b" style={{display: hideo()}}> */}
                    <a href="#">{props.tag2} </a>
                </div>
        </div>
        </div>    
        
            
        </div>
        
        </>
    )
}

export default Section1