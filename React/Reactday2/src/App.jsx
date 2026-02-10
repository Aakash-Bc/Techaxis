import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [count, setCount]=useState(10)// number
  const [name, setName]=useState("Aakash") // string
  const[number, setNumber]=useState([2,3,4,5,5,6]) //array
  const[ show, setShow]=useState("false")
  const[showname, setShowName]= useState("true")
  const[showage, setShowAge]= useState(false)

  console.log(count)
  return (
    <>
      <Header />

      <button onClick={()=>setCount(count+10)}> Increase count</button>
      <button onClick={()=>setCount(count-1)}>Decrease count</button>
      <button onClick={()=>setCount(0)}>Reset count</button>
      <h1>{count}</h1>

      <div>
        <button onClick={()=> setName("Changed")}>Change name</button>
      </div>


      <div>
        <label htmlFor="password">password</label>
        <input type={show ? "text": "password"} id="password" />
        <button onClick={()=>setShow(!show)}>
          {show ? "hide": "show"}
        </button>
      </div>
      <button onClick={()=>setShowAge(!showage)}>Show Age</button>
      {
        showage? <h1>My age is 22.</h1 >: " "
      }
  
        <button onClick={()=>setShowName(!showname)}>Show name aakash</button>
        {showname? <h1>My name is aakash</h1>: ""}
        <h1>Hello my name is aakash</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae laborum quam labore omnis. Porro placeat dolores explicabo, aliquid blanditiis iure!</p>
      <h4>Hello, my name is Aakash Budhathoki</h4>
     
      <Footer />
    </>
  );
}

export default App;
