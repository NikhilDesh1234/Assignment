import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Seats from './Components/Seats';
import Salesmembers from './Components/Salesmembers';
import Analytics from './Components/Analytics';
import Chatsandtags from './Components/Chatsandtags';
import Custom from './Components/Custom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Seats />} />
          <Route exact path="/salesmembers" element={<Salesmembers />} />
          <Route exact path="/analytics" element={<Analytics />} />
          <Route exact path="/chatsandtags" element={<Chatsandtags />} />
          <Route exact path="/custom" element={<Custom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
