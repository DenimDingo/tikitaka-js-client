import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Chat from './page/chat/Chat'
import SideBar from './page/side/Sidebar';

function App() {
  return (
    <div id='board'>
      <HashRouter>
      <SideBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
