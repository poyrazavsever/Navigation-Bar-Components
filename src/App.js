import './index.css';
import {Routes, Route} from "react-router-dom"
import NavbarOne from './Navbar1';
import NavbarTwo from './Navbar2';

function App() {
  return (
    <div>

      <Routes>

        <Route path="/" element={<NavbarOne />} />

        <Route path="/navigationbar2" element={<NavbarTwo />} />

      </Routes>

    </div>
  );
}

export default App;
