import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DatePlanner from "./components/datePlanner";
import FoodList from "./components/foodList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DatePlanner />} />
        <Route path="/food/:type" element={<FoodList />} />
      </Routes>
    </Router>
  );
}

export default App;


