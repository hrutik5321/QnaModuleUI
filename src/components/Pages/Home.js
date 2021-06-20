import React from "react";
import { isAutheticated } from "../../Backend/authapicalls";
import Base from "../../layouts/Base";
const Home = () => {
  const { user } = isAutheticated();
  return (
    <Base>
      {user ? <h1>Hellow {user.name}</h1> : <h1>Please Signin To See Name</h1>}
    </Base>
  );
};

export default Home;
