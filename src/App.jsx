import Home from "./pages/Home";
import NavBar from "./components/NavBar/index";
import DarkMode from "./containers/DarkMode";
import { LocalStorageProvider } from "./contexts/LocalStorageProvider";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

function App() {
  return (
    <LocalStorageProvider>
      <DarkMode>
        <RouterProvider router={router} />
      </DarkMode>
    </LocalStorageProvider>
  );
}

export default App;
