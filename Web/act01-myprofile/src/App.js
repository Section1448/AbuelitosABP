import './App.css';
import Counter from './Pages/Counter/counter';
import NavBar from './components/NavBar';
import Profile from './Pages/Profile/profile';
import Classes from './Pages/Classes/classes';
import Gallery from './Pages/Gallery/gallery';
import Limit from './Pages/Limit/limit';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/perfil" element={<Profile />} />
        <Route path="/clases" element={<Classes />} />
        <Route path="/contador" element={<Counter />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/limite" element={<Limit />} />
      </Routes>
      </BrowserRouter>
         
    </div>
  );
}
//<Counter />
export default App;
