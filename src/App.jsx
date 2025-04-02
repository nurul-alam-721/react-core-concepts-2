import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';


function App() {

  function handleClick(){
    alert ("I am clicked");
  }

  const handleClick3 = () =>{
    alert ("cliked button 3");
  }

  const handleClick5 = (num)=>{
   const sum = num + 5;
   alert (sum);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
     <Counter></Counter>

     {/* <button onclick="handleClick()">Click Me</button> */}
     <button onClick={handleClick}>Click Me</button>
     <button onClick={function handleClick2(){alert ("Cliked Button 2")}}>Click  Me 2</button>
     <button onClick={handleClick3}>Click Me 3</button>
     <button onClick={()=>alert("Clicked Button 4")}>Click Me 4</button>
     <button onClick={()=>handleClick5(7)}>Click Me 5</button>
    </>
  )
}

export default App
