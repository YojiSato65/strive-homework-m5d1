import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar';
import CompanyDetail from './components/CompanyDetail';
import Favorites from './components/Favorites'


function App()
{
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:companyName' element={<CompanyDetail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
