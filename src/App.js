import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import First from './Components/First/First';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Service from './Components/Services/Service';
import Home from './Components/Home/Home';
import Course from './Components/Course/Course';
import Partners from './Components/Partners/Partners';
import Contactus from './Components/Contactus/Contactus';



function App() {
  return (
    <BrowserRouter>
     <First/>
     <Navbar/>

    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Blog' element={<Blog/>}/>
      <Route path='Service' element={<Service/>}/>
      <Route path='Course' element={<Course/>}/>
      <Route path='Partners' element={<Partners/>}/>
      <Route path='Contactus' element={<Contactus/>}/>
      
  
      
    </Routes>
     </BrowserRouter>
  );
}

export default App;
