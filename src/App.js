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
import Destination from './Pages/Destination/Destination';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Userprofile from './Pages/Userprofile/Userprofile';
import MyBooking from './Pages/Userprofile/MyBooking';
import Allusers from './Pages/Userprofile/Allusers';
import Product from './Pages/Product/Product';
import Myproduct from './Pages/Userprofile/Myproduct';
import Payment from './Pages/Userprofile/Payment';

function App() {
  return (
    <div className="App">
      <Navcomp></Navcomp>
    <Routes>
      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/product' element={<Product></Product>}> </Route>
      
      <Route path='profile' element={
        <RequireAuth>
          <Userprofile></Userprofile>
        </RequireAuth>
      }>
         <Route path='mybooking' element={<MyBooking></MyBooking>}> </Route>
         <Route path='alluser' element={<Allusers></Allusers>}> </Route>
         <Route path='productbook' element={<Myproduct></Myproduct>}> </Route>
         
         
        
         </Route>
     
      <Route path='/destination' element={
        <RequireAuth>
          <Destination></Destination>
        </RequireAuth>
      }>
        
       
        
        
        
         </Route>
      
      <Route path='/contact' element={<Contact></Contact>}> </Route>
      <Route path='/login' element={<Login></Login>}> </Route>
      <Route path='/register' element={<Signup></Signup>}> </Route>
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
