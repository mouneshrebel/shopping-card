import React from "react";

function Header(data) {
   
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <button className="StartBootstrap ">Start shopping</button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Products
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex fullcart">
              <a className="nav-link " href="">
                <button className="btn btn-outline-dark" type="">
                  <i className="fas fa-shopping-cart"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {data.cart}
                  </span>
                </button>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
