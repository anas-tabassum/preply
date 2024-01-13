import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import MyRoutes from "../components/MyRoutes.jsx";
const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <MyRoutes />
      </Router>
    </div>
  );
};

export default App;
