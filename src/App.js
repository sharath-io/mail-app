import {Routes,Route} from 'react-router-dom';

import './App.css';
import {Inbox} from './pages/inbox';
import {Spam} from './pages/spam';
import {Trash} from './pages/trash';
import {Header} from './components/header';
import { MailDetails } from './pages/mailDetails';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Inbox/>} />
        <Route path="/spam" element={<Spam/>} />
        <Route path="/trash" element={<Trash/>} />
        <Route path="/mail/:mailmId" element={<MailDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
