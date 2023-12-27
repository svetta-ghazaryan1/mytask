import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { User } from "../type";
import "./style.css";

export const Item4: React.FC = React.memo((): JSX.Element => {
  const params = useParams();
  // useParamsy vercnum e tvyal ejin poxancavc parametry
  // tvyal depqum see vor kar koxqin grel ein// {id:value}  qani vor pathi mej grel enq hetyevyal tarberakov /see/:id
  console.log(params);

  const { users } = useContext(MyContext);
  console.log(users);
  const [person, setPerson] = useState<User>({} as User);

  useEffect(() => {
    if (params.id) {
      const us = users.find((elm) => elm.id == Number(params.id));
      console.log(us);
      if (us) {
        setPerson({ ...us });
      }
    }
  }, [params]);

  return (
    <div className="Item4">
      <h1>Item4</h1>
      <h3>{person.name} {person.surname}</h3>
      <p>{person.email}</p>
      <p>{person.age}</p>
    </div>
  );
});
