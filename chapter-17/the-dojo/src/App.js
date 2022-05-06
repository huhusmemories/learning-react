import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// Styles
import './App.css'

// Pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import OnlineUsers from './components/online-users/OnlineUsers'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        <Sidebar />
          <div className="container">
            <Navbar/>
            <Switch>

              <Route exact path='/'>
                {!user && <Redirect to ='/login'/>}
                {user &&  <Dashboard />}
              </Route>

              <Route path='/create'>
                {!user && <Redirect to='login'/>}
                {user && <Create />}
              </Route>

              <Route path='/project/:id'>
                {!user && <Redirect to='/login'/>}
                {user && <Project />}
              </Route>

              <Route path='/login'>
                {user && <Redirect to='/' />}
                {!user && <Login />}
              </Route>

              <Route path='/signup'>
                {user && <Redirect to='/' />}
                {!user && <Signup />}
              </Route>


            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
