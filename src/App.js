import React,{useState} from "react"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage";
import CountryPage from "./components/CountryPage/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App bg-gray-100 dark:bg-gray-700 dark:text-gray-100 h-max">
        <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Switch>
          <Route exact path="/">
            <HomePage darkMode={darkMode}/>
          </Route>
          <Route path="/country/:id">
            <CountryPage />
          </Route>
        </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
