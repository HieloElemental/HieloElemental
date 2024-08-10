import Home from "./pages/Home";
import NavBar from "./components/NavBar/index";
import DarkMode from "./containers/DarkMode";
import { LocalStorageProvider } from "./contexts/LocalStorageProvider";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/Blog/pages/BlogPost/index";

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
      { path: "/HieloElemental/", element: <Home /> },
      { path: "/HieloElemental/projects", element: <Projects /> },
      { path: "/HieloElemental/blog", element: <Blog /> },
      {
        path: "/HieloElemental/blog/:blogname",
        element: <BlogPost />,
        loader: async ({ params }) => params.blogname,
      },
    ],
    errorElement: (
      <>
        <NavBar />
        <p className='flex flex-col min-h-screen items-center justify-center gap-4 text-center h-full font-azeret-mono text-stone-900 dark:text-stone-100'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl underline'>
            Page not found
          </h1>
          <h2 className='text-9xl text-red-500 no-underline'>404</h2>
        </p>
      </>
    ),
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
