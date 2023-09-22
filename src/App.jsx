import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Component/Portfolio/Portfolio';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';


const router =createBrowserRouter([
{path:'' , element:<Home/>},
{path:'home' , element:<Home/>},
{path:'portfolio' , element:<Portfolio/>},
{path:'About' , element:<About/>},
{path:'Contact' , element:<Contact/>},
{path:'*' , element: <div >
  <h1>Not Found</h1>
</div>},
])



function App() {
  return <>
  
  <RouterProvider    router={router}/>
  </>
    
  
}

export default App;
