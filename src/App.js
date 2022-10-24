import './index.css';
import {Routes, Route, NavLink} from "react-router-dom"
import NavbarOne from './Navbar1';
import classNames from 'classnames';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/navigation1" element={<NavbarOne />} />
      </Routes>

      <div>

        <NavLink to="/navigation1"  className={({ isActive }) =>
        classNames({
          "text-xl font-medium" : true,
          "text-indigo-700" : isActive 
        
        })}>1- Navbar</NavLink>

      </div>
    </div>
  );
}

export default App;
