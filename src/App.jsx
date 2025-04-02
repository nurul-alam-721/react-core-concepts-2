import { Suspense } from 'react';
import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';


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

  // const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json());

  // const fetchFriends = async() =>{
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     return res.json();
  // }
  // const friendsPromise = fetchFriends();

  // const fetchPosts = async() =>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   return res.json();
  // }
  // const postsPromise = fetchPosts();

  return (
    <>
      <h1>Vite + React</h1>

      <Players></Players>

      {/* <Suspense fallback={<h4>All Posts are loading.......</h4>}> 
          <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are loading...</h3>}>
        <Friends fetchFriends={friendsPromise}></Friends>
      </Suspense> */}
{/* 
    <Suspense fallback={<h3>Loading...</h3>}>
      <Users fetchUsers={fetchUsers}></Users>
    </Suspense> */}

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
