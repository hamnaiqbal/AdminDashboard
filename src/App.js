

import Sidebar from './Componenets/Sidebar/Sidebar';
import Topbar from './Componenets/Topbar/Topbar';
import "./App.css";
import Home from './Pages/Home';
import {
   BrowserRouter as Router,
   Switch,
   Route,

} from "react-router-dom";
import UserL from './Pages/UserList/UserL';
import User from './Pages/user/User';
import NewUser from './Pages/newUser/NewUser';
import ProdList from './Pages/ProductList/ProdList';




function App() {
   return (
      <div className="App">
         <Router>
            <Topbar />
            <div className='container'>
               <Sidebar />
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>

                  <Route exatc path="/Users">
                     <UserL />
                  </Route>

                  <Route exatc path="/user/:userId">
                    <User/>
                  </Route>

                  <Route exatc path="/newUser">
                    <NewUser/>
                  </Route>


                  {/* -------------------------------------------- */}

                  <Route exatc path="/product">
                     <ProdList />
                  </Route>

                  <Route exatc path="/product/:productId">
                  <ProdList />
                  </Route>

                  <Route exatc path="/newProduct">
                  <ProdList />
                  </Route>

                   {/* -------------------------------------------- */}






               </Switch>



            </div>


         </Router>




      </div>
   );
}

export default App;
