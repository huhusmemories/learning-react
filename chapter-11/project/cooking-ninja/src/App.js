import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Page components
import Navbar from './components/Navbar'
import Search from './pages/search/Search'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import ThemeSelector from './components/ThemeSelector'

// Style
import './App.css'
import { useTheme } from './hooks/useTheme'

function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar  />
        <ThemeSelector/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/create">
            <Create/>
          </Route>

          <Route path="/search">
            <Search/>
          </Route>

          <Route path="/recipes/:id">
            <Recipe/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
