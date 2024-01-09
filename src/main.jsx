import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Statistics from '../../../career-hub/career-hub/src/components/Statistics/Statistics.jsx'
// import Home from '../../../career-hub/career-hub/src/components/Home/Home.jsx'
import App from './App.jsx'
import Donation from './components/Donation/Donation.jsx'
import Home from './components/Home/Home.jsx'
import Root from './components/Root/Root.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
