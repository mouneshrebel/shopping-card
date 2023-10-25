import React from "react";
import "./Card.css";

function Card(data) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mt-3 mb-3 text-center carddiv">
      <div className="card">
        <img className="card-img-top" src={data.imageurl} alt="Card image" />
        <div className="card-body cardbodydiv">
          <h4 className="card-title">{data.heading}</h4>
          {data.isRating && (
            <div>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
              <i className="fa fa-star goldStar"></i>
            </div>
          )}
          <p className="card-text">{data.money}</p>
          <a  className={`btn btn-outline-dark ${!data.isRating? "mt-4 mb-3" : "mb-3" }`}
         onClick={() => data.setCart((prevState) => prevState + 1)}
          >
            {data.btnContent}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
