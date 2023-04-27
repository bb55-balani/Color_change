// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
function App() {
  return (
    <>
    <center><h1>Learning React Router Dom</h1><i><h5>Use to navigate without reloading the page </h5></i></center>
    {/* To connect with the browser url we can use BrowserRouter  */}
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
