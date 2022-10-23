import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CreateAccount from './pages/createAccount';
import { getAllMovies } from './utils/moviesUtils';
import LoginPage from './pages/login';
// import { Button } from 'react-bootstrap';
import Main from './pages/main';
import Subscriptions from './pages/subscriptions';
import UsersManagment from './pages/usersManagment';
import Movies from './pages/movies';
import { useDispatch } from 'react-redux';
import {} from './utils/moviesUtils';
import { getAllPermissions } from './utils/permissionsUtils';
import { getAllMembers } from './utils/membersUtils';
import { getAllDataBaseUsers, getAllJsonFileUsers } from './utils/usersUtils';
import { getAllSubscriptions } from './utils/subscriptionsUtils';
import { setAllMovies, setAllDataBaseUsers, setAllPermissions, setAllJsonFileUsers, setAllMembers, setAllSubscriptions} from './Redux/actions';
import Users from './pages/users';
import AddUser from './pages/addUser';
import EditUser from './pages/editUser';
import AddMovie from './pages/addMovie';
import AllMovies from './pages/allMovies';
import EditMovie from './pages/editMovie';
import AddMember from './pages/addMember';
import AllMembers from './pages/allMembers';
import EditMember from './pages/editMember';

function App() {
  
  const dispatch = useDispatch()

  //consider add date logic for sessionStorage when mount the app, to avoid code duplicate..


  useEffect(()=>{
    //get Movies
    const getMovies = async() => {
      // debugger
      const allMovies = await getAllMovies()
      // console.log(allMovies);
      dispatch(setAllMovies(allMovies))
    }
    getMovies()
  //get JsonFile users
  const getJsonFileUsers = async() => {
    const allUsers = await getAllJsonFileUsers()
    // console.log(allUsers);
    dispatch(setAllJsonFileUsers(allUsers))
  }
  getJsonFileUsers()
  //get Users
  const getDataBaseUsers = async() => {
    const allUsers = await getAllDataBaseUsers()
    // console.log(allUsers);
    dispatch(setAllDataBaseUsers(allUsers))
  }
  getDataBaseUsers()
  //get permissions
  const getPermissions = async() => {
    const allPermissions = await getAllPermissions()
    // console.log(allPermissions);
    dispatch(setAllPermissions(allPermissions))
  }
  getPermissions()
  //get members 
  const getMembers = async() => {
    const allMembers = await getAllMembers()
    // console.log(allMembers);
    dispatch(setAllMembers(allMembers))
  }
  getMembers()

  //get subscriptions
  const getSubscriptions = async() => {
    const AllSubscriptions = await getAllSubscriptions()
    // console.log(AllSubscriptions);
    dispatch(setAllSubscriptions(AllSubscriptions))
  }
  getSubscriptions()
  },[])

  

  return (
    <div className="App">
      <h1>Cinema Managment System</h1>

      


      
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/createAccount' element={<CreateAccount />} />
        <Route path='/main' element={<Main/>}>
          <Route path='/main/movies' element={<Movies />} >
            <Route path='/main/movies/allMovies' element={<AllMovies/>}/>
            <Route path='/main/movies/addMovie' element={<AddMovie/>}/>
            <Route path='/main/movies/editMovie' element={<EditMovie/>}/> 
          </Route>
          <Route path='/main/subscriptions/editMember' element={<EditMember />}/>
          <Route path='/main/subscriptions' element={<Subscriptions />} >
            <Route path='/main/subscriptions/allMembers' element={<AllMembers />}/>
            <Route path='/main/subscriptions/addMember' element={<AddMember />}/>
          </Route>
          <Route path='/main/editUser' element={<EditUser/>} />
          <Route path='/main/userManagment' element={<UsersManagment />} >
            <Route path='/main/userManagment/addUser' element={<AddUser/>}/>
            <Route path='/main/userManagment/allUsers' element={<Users/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;