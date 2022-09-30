import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Gym from './components/Gym/Gym';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
   
      <Header></Header>  
      <Gym></Gym>
      <Blog></Blog>
       
    </div>
  );
}

export default App;
