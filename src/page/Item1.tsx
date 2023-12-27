import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import "./style.css";
export const Item1: React.FC = React.memo((): JSX.Element => {
    const {users,deleteuser}=useContext(MyContext)
    // console.log(users);
  return (
    <div className="Item1">
      <h1>Item1</h1>
     <table border={3}>
        <thead>
            <tr>
                <td>Name</td>
                <td>Surame</td>
                <td>See</td>
                <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            {users.map((elm)=>
            <tr key={elm.id}>
             <td>{elm.name}</td>
             <td>{elm.surname}</td>
             <td><Link to={'/see/'+elm.id}>see</Link></td>
             <td><button onClick={()=>deleteuser(elm.id)}>Del</button></td>


            </tr>)

            }
        </tbody>
     </table>
      
    </div>
  );
});
