import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className="flex">
      <div className='basis-[12%] h-screen'>
        <Sidebar/>
      </div>
      <div className='basis-[88%] border'>
        <Home/>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default App;
