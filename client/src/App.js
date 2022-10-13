import './App.scss';
import Home from "./pages/Home";
import Error from "./components/Error";
import TopAppBar from "./components/TopAppBar";
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import { useSelector } from "react-redux";

function App() {
  
  const {details} = useSelector(state => state.userReducer)

  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path={`/details/${details.id}`} element={<Details/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
