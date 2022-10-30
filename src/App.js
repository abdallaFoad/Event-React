import Home from './Pages/Home/Home';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App" style={{height: '4000px'}}>
      <Routes>
        <Route path='/' element={<Home /> } />
      </Routes>
    </div>
  );
}

export default App;
