import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Userimage from './images/Userimage.jpg'
import { AiOutlineRocket } from 'react-icons/ai'
import { LiaAddressCardSolid } from 'react-icons/lia'

import './Comparison.css';
import './index.css';
import { useEffect, useState } from 'react'
import Dashboard from './Components/Dashboard'
import SalesReport from './Components/SalesReport'
import Comparison from './Components/Comparison'
import ItemReport from './Components/ItemReport'
import CogsReport from './Components/CogsReport'
import Login from './Components/Login'
import Home from './Pages/Home'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageNotFound from './Pages/PageNotFound'
import toast, { Toaster } from 'react-hot-toast';
import Forgotpassword from './Components/Forgotpassword'
import ProtectedRoute from './Auth/ProtectedRoute'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Navigate to="/login" />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }>
          
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}
export default App;
