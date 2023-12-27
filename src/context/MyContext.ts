import React from "react";
import { User } from "../type";

interface Data{
    users:User[],
    createuser:Function
    deleteuser:Function
}
export const MyContext=React.createContext<Data>({}as Data)