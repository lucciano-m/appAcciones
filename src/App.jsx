import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Login from './pages/login/Login';
import Acciones from './pages/home/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Acciones />}/>
      </Routes>
    </Router>
    </>
    );
}

export default App;
