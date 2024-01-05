import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
 import MenuAppBar from "./MenuAppBar";
import Login from './Login';
import Signin from './Signin'
// import Statement from './Statement';
// import Loans from "./Loans";
// import Depo from "./Depo";
// import Profile from "./Profile";


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/MenuAppBar' element={<MenuAppBar/>}/>
        </Routes>
      </Router>
      {/* <ButtonAppBar/> */}
      {/* <Statement/> */}
      {/* <Loans/> */}
      {/* <Depo/> */}
      {/* <Profile/> */}

    </div>
  );
}

export default App;
