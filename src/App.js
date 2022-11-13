import Navbar from "./component/Navbar.js";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.js";
import About from "./component/About.js";
import Contect from "./component/Contect.js";
import Login from "./component/Login.js";
import Signup from "./component/Signup.js";
import Contectdata from './contect/Contectdata'
import Errorpage from "./component/Errorpage.js";
// import { Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Contectdata>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route  path="*" element = {<Errorpage />} />
        </Routes>
        
      </Contectdata>
    </>
  );
}

export default App;
