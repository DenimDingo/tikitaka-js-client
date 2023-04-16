import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navigation from './page/Navigation';
import Home from './page/Home/Home';
import Chat from './page/chat/Chat'

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
