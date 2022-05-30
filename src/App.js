import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StaffSignUp from './components/StaffSignUp';
import UserSignUp from './components/UserSignUp';
import PrivateComponent from './components/PrivateComponent';
import StaffLogin from './components/StaffLogin';
import UserLogin from './components/UserLogin';
import AddDog from './components/AddDog';
import DogList from './components/DogList';
import DogListForStaff from './components/DogListForStaff';
import UpdateDogs from './components/UpdateDog';
import AddMessage from './components/AddMessage';
import MessageList from './components/MessageList';
import MessageListForStaff from './components/MessageListForStaff';
import RespondMessage from './components/RespondMessage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/staffdog" element={<DogListForStaff />} />
            <Route path="/add" element={<AddDog />} />
            <Route path="/update/:id" element={<UpdateDogs />} />
            <Route path="/staffmessagelist" element={<MessageListForStaff />} />
            <Route path="/respond/:id" element={<RespondMessage />} />
          </Route>


          <Route path="/staffsignup" element={<StaffSignUp />} />
          <Route path="/stafflogin" element={<StaffLogin />} />
          <Route path="/usersignup" element={<UserSignUp />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/" element={<DogList />} />
          <Route path="/addmessage" element={<AddMessage />} />
          <Route path="/messagelist" element={<MessageList />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
