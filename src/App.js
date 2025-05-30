import React, { useState, useEffect, useMemo } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import broadiumlogo from "./Assets/logo.svg";
import personimg from "./Assets/person.png";
import Leads from "./Pages/Leads/Leads";
import ViewLead from "./Pages/Leads/ViewLead";
import Dashboard from "./Pages/Dashboard/Dashboard";

const App = ({ onLogout, message }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeitems, setActiveitems] = useState(null);

  const items = useMemo(
    () => [
      { id: 1, name: "Dashboard", route: "/dashboard" },
      { id: 2, name: "Leads", route: "/leads" },
    ],
    []
  );

  useEffect(() => {
    const currentItem = items.find((item) => item.route === location.pathname);
    setActiveitems(currentItem?.id || null);
  }, [location, items]);

  const handleitemsClick = (item) => {
    setActiveitems(item.id);
    navigate(item.route);
  };

  return (
    <div className="App">
      <div className="app-side-bar">
        <img src={broadiumlogo} className="home-broadium-logo" alt="broadium Logo" />
        {/* <div className="userprofile">
          <div
            className="avatar"
            style={{
              backgroundImage: `url(${personimg})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="avatar-data">
            <p>Profile</p>
            <h4>Admin</h4>
          </div>
        </div> */}
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              className={activeitems === item.id ? "selected-item" : "unselected"}
              onClick={() => handleitemsClick(item)}
            >
              {item.name}
            </li>
          ))}
          <li className="unselected" onClick={onLogout}>
            Logout
          </li>
        </ul>
      </div>
      <div className="app-right">
      
          <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/view-lead/:id" element={<ViewLead />} />
          </Routes>
    
      </div>
    </div>
  );
};

export default App;
