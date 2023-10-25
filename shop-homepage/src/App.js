import "./App.css";
import Home from "./Page/Home";
import Login from "./Page/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/shop-homepage" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
