import React from 'react'
import { useState , useEffect } from 'react'

function Createcaptcha() {
    const [values, setvalues] = useState('')
    const [captcha, setcaptcha] = useState('')
    const [security, setsecurity] = useState('')

    let a = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789qwertyuiopasdfghjklzxcvbnm"
    let store = ""
    let c = a.length

    useEffect(() => {
        function changenumber(){
        
            for(let i= 0;i<6;i++){
                store += a[Math.floor(Math.random()*c)]
                
            }
            setcaptcha(store)
        }
        changenumber()
        

    },[])
    
    function securitystep(){
        if(values === captcha){
            setsecurity("Correct")
        }
        else{
            setsecurity("Wrong")
        }
    }

    function sethandles(e){
        setvalues(e.target.value)
        
      }


  return (
    <>
    
    <div className='captchadiv'>
    <p>{captcha}</p>
    <p>{security}</p>
    </div>

    <div className='textfields'>
    <input type='text' onChange={sethandles}></input>
    <button onClick={securitystep}>Verify</button>

    </div>
    
    </>
    )
}

export default Createcaptcha