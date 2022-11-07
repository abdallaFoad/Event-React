import Home from './Pages/Home/Home';
import './desigen-system/style.css'
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> } />
      </Routes>
    </div>
  );
}

export default App;
