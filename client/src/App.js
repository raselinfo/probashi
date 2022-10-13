import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './views/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/c/t/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
