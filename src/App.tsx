import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
