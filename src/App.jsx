import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import React from "react";
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Userlist from "./pages/userlist/Userlist";
import UserPage from "./pages/user/userPage";

function App() {
  return (
    <Router>
      <Topbar />
          <div className="container">
            <Sidebar />
              <Routes>
                 <Route path="/home" element={<Home />} />
                 <Route path="/users" element={<Userlist />} />
                 <Route path="/user:userid" element={<UserPage/>} />
              </Routes>
          </div>  
    </Router>
  );  
}

export default App
