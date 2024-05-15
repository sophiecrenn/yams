import './App.css';
import HomePage from './pages/Home/home';
import GamePage from './pages/Game/game';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/game' element={<GamePage/>}/>
</Routes>
  );
}

export default App;