import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import AboutPage from './Pages/AboutPage.jsx';
import ContactPage from './Pages/ContactPage.jsx';
import ResourcePage from './Pages/ResourcePage.jsx';
import ResearchPage from './Pages/ResearchPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
children : [
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/resources",
    element: <ResourcePage/>
  },
  {
    path: "/research",
    element: <ResearchPage/>
  },

]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
