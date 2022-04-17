import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import TrainInfos from "./container/TrainInfos";
import Trains from "./container/Trains";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Trains />} />
        <Route path="/train/:trainId" element={<TrainInfos />} />
        <Route>No Train Game</Route>
      </Routes>
    </div>
  );
}

export default App;
