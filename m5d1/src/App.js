import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import MyNavbar from './components/MyNavbar';
import CompanyDetail from './components/CompanyDetail';


function App()
{
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:companyName' element={<CompanyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
