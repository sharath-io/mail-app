import {Routes,Route} from 'react-router-dom';

import './App.css';
import {Inbox} from './pages/inbox';
import {Spam} from './pages/spam';
import {Trash} from './pages/trash';
import {Header} from './components/header';


function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Header/>
      <Routes>
        <Route path="/" element={<Inbox/>} />
        <Route path="/spam" element={<Spam/>} />
        <Route path="/trash" element={<Trash/>} />
      </Routes>
    </div>
  );
}

export default App;
