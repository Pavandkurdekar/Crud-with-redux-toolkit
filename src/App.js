import './App.css';
import AddUser from './Components/AddUser';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route
 } from 'react-router-dom';

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<center>
<Routes>
 
  <Route path='/add-user' element={<AddUser/>}></Route>
  <Route path='/all-users' element={<Cards/>}></Route>
 
</Routes>
</center>
</BrowserRouter>

</>
  );
}

export default App;
