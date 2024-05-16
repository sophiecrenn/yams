import './App.css';
import HomePage from './pages/Home/home';
import GamePage from './pages/Game/game';
import ConnexionPage from './pages/Connexion/connexion';
import DashboardPage from './pages/Dashboard/dashboard';
import NavBar from './components/Navigation/navbar';
import { Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    <>
<NavBar/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/game' element={<GamePage/>}/>
  <Route path='/connexion' element={<ConnexionPage/>}/>
  <Route path='/dashboard' element={<DashboardPage/>}/>
</Routes>
</>
  );
}

export default App;