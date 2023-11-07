import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import HomeLogin from "./pages/homeLogin";
import CardObjek from "./components/card/cardObjek";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomeLogin />} />
        <Route path="/card" element={<CardObjek />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
