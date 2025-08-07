import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import  Home from './components/Home';
import  Header from './components/Header';
import  Contactus from './components/Contactus';
import  Dashboard from './components/Dashboard';
import  footer from './components/Footer';
import  Galary from './components/Galary';
import  Login from './components/Login';
import  Signup from './components/Signup';
import  Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1> Hi Welcome to React JS application</h1>
      <BrowserRouter>
        <Header />
         <Home />
         <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/galary' element={<Galary/>}/>
          <Route path='/contactus' element={<Contactus/>}/>
         </Routes>
         <Footer />
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
