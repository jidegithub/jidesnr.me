import Index from './pages/index'
// import Projects from './pages/projects'
// import About from './pages/about'
import NotFoundPage from './pages/404'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import './App.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>
    },
    // {
    //   path: "/projects",
    //   element: <Projects/>
    // },
    // {
    //   path: "/about",
    //   element: <About/>
    // },
    {
      path: "*",
      element: <NotFoundPage/>
    }
  ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
