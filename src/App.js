import {Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import ParcelForm from "./Pages/ParcelForm";
import ParcelList from "./Pages/ParcelList";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/parcelform" element={<ParcelForm/>}/>
    <Route path="/parcellist" element={<ParcelList/>}/>
  </Routes>
        );
}

export default App;
