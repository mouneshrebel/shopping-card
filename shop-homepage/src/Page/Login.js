import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";
import Cookies from "js-cookie";
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
      email: "spr887011@gmail.com",
      password: "1234",
    });

    const [isVisible, setIsVisible] = useState({
      status: "visually-hidden",
      message: "null",
    });

    function HandleResponse(response) {
      setIsLoading(false);
      if(response.data == false){
        setIsVisible({
            status: "visually-true",
            message: "Invalid username and password",
          });
      }
      else {
        Cookies.set("shop_login", JSON.stringify(response.data), {
          sameSite: "None",
          secure: true,
        });
        navigate("/shop-homepage");
      } 
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      setIsLoading(true);
      HandleResponse(await axios.post("https://shop-home.onrender.com/" + "login", data));
    }
  
    function handleData(event) {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  return (
    <div className="LoginMainDiv bg-dark">
      
      <form id="loginForm" className="loginFormcls" onSubmit={handleSubmit}>
      <h2 className="text-light LoginMainDivh1 mb-4">Shopping App</h2>
        <input
          type="email"
          name="emailid"
          className=""
          value={data.email}
          onChange={handleData}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          className=""
          value={data.password}
          onChange={handleData}
          placeholder="Password"
          required
        />
        <label htmlFor="emailid" className={isVisible.status}>
          {isVisible.message}
        </label>
        <button
          type="submit"
          className="btn btn-light btn-block btn-large  mt-2"
        >
          Login
        </button>
      </form>
      {isLoading && (
        <div className="isLoadingLogin">
          <div className="spinner-border  text-primary"></div>
        </div>
      )}
    </div>
  )
}

export default Login;
