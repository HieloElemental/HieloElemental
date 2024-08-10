import Home from "./pages/Home";
import NavBar from "./components/NavBar/index";
import DarkMode from "./containers/DarkMode";
import { LocalStorageProvider } from "./contexts/LocalStorageProvider";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog/pages/BlogPost/index";

import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <LocalStorageProvider>
      <DarkMode>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:blogname' element={<BlogPost />} />
            <Route
              path='*'
              element={
                <>
                  <NavBar />
                  <p className='flex flex-col min-h-screen items-center justify-center gap-4 text-center h-full font-azeret-mono text-stone-900 dark:text-stone-100'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl underline'>
                      Page not found
                    </h1>
                    <h2 className='text-9xl text-red-500 no-underline'>404</h2>
                  </p>
                </>
              }
            />
          </Routes>
        </Router>
      </DarkMode>
    </LocalStorageProvider>
  );
}

export default App;
