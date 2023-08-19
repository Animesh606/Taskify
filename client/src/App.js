import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/LoginPage';
import SignUp from './Pages/SignUpPage';
import Error404 from './Pages/Error404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>} />
          <Route path='about' element={<About/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='*' element={<Error404/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
