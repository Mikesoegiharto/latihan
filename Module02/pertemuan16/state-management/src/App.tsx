// src/App.tsx

import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme}>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link>
        </div>

        <div>
          <span>{theme.toUpperCase()}</span>
          <button onClick={() => setTheme("light")}>Light</button>
          <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}


// import { useState } from 'react'
// import './App.css'

// localStorage.setItem('myName', 'aries')
// localStorage.setItem('address', JSON.stringify({
//  'street' : 'jalan merdeka',
//  'city' : 'jakarta'
// }))

// function App() {

// const [user, setUser ] = useState({name: 'dimas'})

//   return (
//     <div style={{padding:20, border:'1px solid blue'}}>
//      <div> User: {user.name}</div>
//      <div>Myname : {localStorage.getItem('myName')}</div>
//      <div>Address : {JSON.parse(localStorage.getItem('address'))?.street}</div>
//      <button onClick={()=> localStorage.removeItem('myName')}> remove Name</button>
//      <button onClick={()=> localStorage.clear()}> clear all</button>
//      <Dashboard user = {user}/>
//     </div>
//   )
// }

// sessionStorage.setItem ('sessionName', 'Session Dimas')

// function Dashboard({user}: {user : {name: string}}){
//   return (<div style={{padding:20, border:'1px solid blue'}}>
//   <div> Dashboard</div>
//   <div>{sessionStorage.getItem('sessionName')}</div>
//   <div>{user.name}</div>
//   <button onClick={()=> sessionStorage.setItem('sessionName', 'Session updated Dimas')}> remove Name</button>
//   <div>Remove Sesion Name:{sessionStorage.removeItem('sessionName')}</div>
//   <Profile user={user} />
//   </div>)
// }

// function Profile({user}: {user : {name: string}}){
//   return (<div style={{padding:20, border:'1px solid red'}}>
//       <div> Profile </div>
//       <div>{user.name}</div>
//       {/* <Profile user={user} /> */}
//   </div>)
// }

// function berak(){
//   const [user, ] = useState("dimas")
//   return < Dashboard user={user}/>
// }

// function Dashboard ({user}: any){
//   return <Profile user={user}/>
// }

// function Profile({user}:any){
//   return<p>Hello {user}</p>
// }

// export default berak
