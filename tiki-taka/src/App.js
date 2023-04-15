import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Chat from './chat/Chat'

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
