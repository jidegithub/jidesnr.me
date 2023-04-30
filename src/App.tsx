import Index from './pages/index'
import Work from './pages/work'
import About from './pages/about'
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
