
import Navbar from "./components/Navbar/index"
import Main from "./components/Main/index"
import Country from "./components/Country";
function App() {
  return (
    <div className="App bg-gray-100 h-max">
      <Navbar/>
      <Main/>
      <Country/>
    </div>
  );
}

export default App;
