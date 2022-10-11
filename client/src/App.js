import './App.scss';
import Home from "./pages/Home";
import Error from "./components/Error";
import TopAppBar from "./components/TopAppBar";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopAppBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
