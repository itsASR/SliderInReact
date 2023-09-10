import React, { useState } from 'react'
import axios, { isCancel, AxiosError } from 'axios';

function Inputstake() {
  const [values , setvalues] = useState("")

  function sethandles(e){
    console.log("oko")
    setvalues(e.target.value)
  }

  function outs(){
    console.log(values)
  }

  function checko() {
    let aa = 'https://api.themoviedb.org/3/search/movie?query=' + values + '&api_key=9050502cb4f092054e46a7f47ebde0dc'
      axios.get(aa)
        .then((response) => {
          console.log(response.data.results);
         
        });
    }



  return (
    <>
    <input type='text' onChange={sethandles} ></input>
    
    <button onClick= {checko}>Save</button>


    </>
  )
}

export default Inputstake