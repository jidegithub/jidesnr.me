import Index from './pages/index'
import Work from './pages/work'
import About from './pages/about'
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
    {
      path: "/work",
      element: <Work/>
    },
    {
      path: "/about",
      element: <About/>
    },
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
