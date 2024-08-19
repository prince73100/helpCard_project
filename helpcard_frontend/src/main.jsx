import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Addhelpcard from './component/Addhelpcard.jsx'
import helpCardstore from './store/index.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: '/addcard', element: <Addhelpcard /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={helpCardstore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
