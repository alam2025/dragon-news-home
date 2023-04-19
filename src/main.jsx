import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './componets/Layout/Main';
import Home from './componets/Home/Home';
import Login from './componets/Login/Login';
import About from './componets/About/About';
import Career from './componets/Career/Career';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: ()=>fetch('http://localhost:3000/'),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'career',
        element: <Career />
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
