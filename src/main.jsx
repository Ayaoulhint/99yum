import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import {Home,Recipe,Blog,About,Contact} from './Components'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
     <Route index  element={<Home/>} />  
      <Route path="recipe" element={<Recipe />} /> 
     <Route path="blog" element={<Blog/>} /> 
     <Route path="about-us" element={<About/>} /> 
    <Route path="contact-us" element={<Contact/>} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
