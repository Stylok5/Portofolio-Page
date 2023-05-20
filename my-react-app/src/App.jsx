import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styling/main.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
