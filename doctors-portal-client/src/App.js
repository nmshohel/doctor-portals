import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
          <AuthProvider>
            <Router>
              <Routes>
                  <Route path="/appointment" element={<Appointment/>}/>
                  <Route path="/home" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/register" element={<Register/>}/>
                </Routes>
              </Router>
          </AuthProvider>
    </div>
  );
}

export default App;
