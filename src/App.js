import React,{useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main";
function App() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="App bg-gray-100 dark:bg-gray-700 dark:text-gray-100 h-max">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}/>
        <Main
          darkMode={darkMode}/>
      </div>
    </div>
  );
}

export default App;
