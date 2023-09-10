import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import axios from 'axios';
import axios, { isCancel, AxiosError } from 'axios';

function App() {
  // const [count, setCount] = useState('')
  const [value, setvalue] = useState('')



  function checko() {
    axios.get('https://api.github.com/users/mapbox')
      .then((response) => {
        // let oo = avatar_url
        console.log(response.data.avatar_url);
        setCount(response.data.avatar_url)
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
      });
  }

  function ravi(){
    console.log()
  }

  return (
    <>

    <input type='text'></input>
    <button onClick={(e) => {setvalue(e.target.value)}}>Search</button>
    {/* values = value */}

    {console.log("naam" + value)}








  {/* <button onClick={checko}>Get Photo</button>
      {/* {checko()} */}
      

      {/* axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
  }); */}







      {/* {count}
    <br></br>
     <button onClick={rav}>Increment </button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
       */}



      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
