import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css'; 
import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video'
import Try from './Try';
function App() {
  const [sidebarcount, setsidebarcount] = useState(false)
  return (
    <div>
      <NavBar setsidebarcount={setsidebarcount}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home sidebarcount={sidebarcount} setsidebarcount={setsidebarcount}/>}/>
        <Route path='./Pages/Video/Video.js' element={<Video/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
