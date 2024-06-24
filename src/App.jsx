import Home from "./pages/Home";
import NavBar from "./components/NavBar/index";
import DarkMode from "./containers/DarkMode";
import { LocalStorageProvider } from "./contexts/LocalStorageProvider";

function App() {
  return (
    <LocalStorageProvider>
      <DarkMode>
        <NavBar />
        <Home />
      </DarkMode>
    </LocalStorageProvider>
  );
}

export default App;
