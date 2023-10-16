import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      {/* Import Navbar.jsx */}
      <Navbar />
      <AllRoutes/>
      {/* Import AllRoutes.jsx */}
    </div>
  );
}

export default App;
