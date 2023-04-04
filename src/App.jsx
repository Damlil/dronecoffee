import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Nav from './views/Nav'
import Menu from './views/Menu'
import About from './views/About'
import Cart from './views/Cart' 
import Status from './views/status' 





const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/nav',
    element: <Nav />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/cart/:order',
    element: <Cart />
  },
  {
    path: '/status',
    element: <Status />
  }

])


function App() {






  return (
    <div className="App">
      <RouterProvider router= { router } />
    </div>
  )
}

export default App
