import React from "react";
import Header from "../Components/Header";
import Card from "../Card";
import SwipeImages from "../Components/SwipeImages"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

function Home() {
  const [cardData, setCardData] = useState([]);
  const [cart,setCart]=useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookieValue = Cookies.get("shop_login");
        const loginDataFromCookie = cookieValue
          ? JSON.parse(cookieValue)
          : null;
        const items = await axios.get("https://shop-home.onrender.com/" + "home", {
          headers: {
            Authorization: `Bearer ${loginDataFromCookie}`,
          },
        });
        if (items === false) {
          alert("Session Expired, Please login again");
          navigate("/");
        } else {
          setCardData(items.data);
        }
      } catch (error) {
        alert("Server time out");
        navigate("/");
        console.error(error);
      }
    };
    fetchData();
  },[]);
  
  return (
    <div>
      <Header cart={cart}/>
      <div className="Shopinstyle bg-dark mb-5">
        <h1>Shop in style</h1>
        <h5>Explore the great shopping experience</h5>
      </div>
      <SwipeImages/>
      <div className="container">
        <div className="row">
          {cardData[0] && cardData.map((data) => {
            return (
              <Card
                key={data._id}
                imageurl={data.imageurl}
                heading={data.heading}
                isRating={data.isRating}
                money={data.money}
                btnContent={data.btnContent}
                setCart={setCart}
              />
            );
          })}
        </div>
      </div>
      <footer className="mb-0 mt-5">
        <div className="bg-dark">
          <h5 className="mb-0 mt-5">Copyright © Shop in style 2023</h5>
        </div>
      </footer>
    </div>
  );
}

export default Home;
