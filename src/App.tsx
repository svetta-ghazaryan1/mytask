import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import { Item1 } from "./page/Item1";
import { Item2 } from "./page/Item2";
import { Item3 } from "./page/Item3";
import { Error } from "./page/Error";
import { Item4 } from "./page/Item4";
import { User } from "./type";
import { MyContext } from "./context/MyContext";

function App() {

  const[users,setUser]=useState<User[]>([
{id:1,name:"Anna",surname:"Ghazaryan",email:"ahjhag@cm",age:25},
{id:2,name:"Ara",surname:"Ghazaryan",email:"ahjhag@cm",age:22},
{id:3,name:"Karen",surname:"Ghazaryan",email:"ahjhag@cm",age:24},
{id:4,name:"Marat",surname:"Melqonyan",email:"ahjhag@cm",age:23},
{id:5,name:"Meri",surname:"Mikayelyan",email:"ahjhag@cm",age:21},

  ])

  const deleteuser=(id:number)=>{

    setUser([...users.filter((elm)=>elm.id!=id)])

  }

  const createuser=(data:User)=>{
    setUser([...users,{...data,id:Date.now()}])
    
  }
  return (
    <div className="App">
      <MyContext.Provider value={{users, createuser, deleteuser}}>
      <BrowserRouter>
      <header>
        <h1>Menue</h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          
          <li>
            <Link to='/element2'>element</Link>
          </li>
          
          <li>
            <Link to='/good'>GOOD</Link>
          </li>
          
          

        </ul>
      </header>
        <Routes>
          <Route path="/" element={<Item1 />} /> 
      {/* Brouser routery hnaravorutyun e ta;lishimnakan domeyni koxqy mer pathery cuyc tal,liins,router, routes petq e kanchel broser routi taracqum
      liky poxarinum e a href hnaravorutyun e talis mi ejic mek ayl texapoxvel to i mijocov ,  a href refresh er anum anydhat//
      Routes hnaravorutyun e talis routerner xmbavorel mi texum,pathy poxelis popoxvum em miayn elemnti aysinqn mer componenta poxvum
      Route hnaravorutyun e talis yuraqanchyur hamar stexcel path, pathi mej et url anuna elemnti mej el asum em te vor componenty kanchi
      
      */}

          <Route path="/element2" element={<Item2 />} />
          <Route path="/good" element={<Item3 />} />
          <Route path="/see/:id" element={<Item4 />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <footer>
          <h3>Footer</h3>
        </footer>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
