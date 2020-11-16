import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const User = () => {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [address, setAddress] = useState("");

  useEffect(() => {
    facade.fetchUserData().then((data) => setDataFromServer(data.msg));
    facade.fetchAddress().then((data) => setAddress(data));
  }, []);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
      <h3>Fra {address.street} {address.houseNumber}</h3>
    </div>
  );
};

export default User;
