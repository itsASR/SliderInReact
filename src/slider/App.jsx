import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [values, setvalues] = useState("")
  const [count, setCount] = useState(1)
  const [desc, setdesc] = useState("")
  const [title, settitle] = useState("")

  useEffect(() => {
    function infomap() {
      axios.get('https://fakestoreapi.com/products/' + count)
        .then((response) => {
          setvalues(response.data.image)
          setdesc(response.data.description)
          settitle(response.data.title)
          console.log(count)

        }
        )
    }
    infomap()
    
  },[count])

  

let b = 1;
let c

if(b===count){
  c = true
}
else{
  c = false
}

console.log(c)

  return (
    <>
      <div className="slider">
        <div className="left">
          <img src={values} alt="product name" />
        </div>
        <div className="right">
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
      <div className="navigation">
        <button disabled = {c} onClick={() => setCount((count) => count - 1)}>
          <ArrowBackIosIcon />
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
}

export default App;
