import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navcomp from './Shared/Navcomp';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Rooms from './Pages/Rooms/Rooms';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Beijing from './TravelPage/Beijing';
import Maldiv from './TravelPage/Maldiv';
import India from './TravelPage/India';
import Italy from './TravelPage/Italy';
import Piran from './TravelPage/Piran';
import Karkow from './TravelPage/Karkow';
import Bali from './TravelPage/Bali';

function App() {
  return (
    <div className="App">
      <Navcomp></Navcomp>
    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/rooms' element={<Rooms></Rooms>}> </Route>
      <Route path='/contact' element={<Contact></Contact>}> </Route>
      <Route path='/login' element={<Login></Login>}> </Route>
      <Route path='/beijing' element={<Beijing></Beijing>}> </Route>
      <Route path='/maldiv' element={<Maldiv></Maldiv>}> </Route>
      <Route path='/india' element={<India></India>}> </Route>
      <Route path='/italy' element={<Italy></Italy>}> </Route>
      <Route path='/piran' element={<Piran></Piran>}> </Route>
      <Route path='/karkow' element={<Karkow></Karkow>}> </Route>
      <Route path='/bali' element={<Bali></Bali>}> </Route>
    </Routes>
    </div>
  );
}

export default App;
