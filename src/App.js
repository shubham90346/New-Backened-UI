import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Userimage from './images/Userimage.jpg'
import { AiOutlineRocket } from 'react-icons/ai'
import { LiaAddressCardSolid } from 'react-icons/lia'
import './App.css';
import './Comparison.css';
import { useState } from 'react'
import Dashboard from './Components/Dashboard'
import SalesReport from './Components/SalesReport'
import Comparison from './Components/Comparison'
import ItemReport from './Components/ItemReport'
import CogsReport from './Components/CogsReport'
import Login from './Components/Login'

function App() {
  const [active, IsActive] = useState(1);
  return (
//     <div>
//       <Login/>
//  </div>
    <div className="App">
      <div className='row '>
        <div className='col-lg-8 text-start'>
          <div className='d-flex mt-2 ' >
            <p className='fw-bold  zxz' > Demeter Fragrances</p>
            <FontAwesomeIcon icon={faBars} className='d1 mt-2' />
            <input type="text" className='form-label a1 ' placeholder='Search' />
          </div>

        </div>
        <div className='col-lg-4 d-flex justify-content-end '>
          <div className='d9 d-flex'>
            <img src={Userimage} className='sizing1' />
            <p className='mt-3 d8 '>Admin   </p>
          </div>
          {/* <p className=''>VP People Manager </p> */}

         
        </div>
      </div>

      <div className='row aq'>
        <div className='col-lg-2'>
         

          <div className='container ' >
            <ul className="list-group " >

              <li className="fw-bold " onClick={() => IsActive(1)} style={active === 1 ? { backgroundColor: 'rgb(224,243,255)' } : { color: 'black' }}>
                <AiOutlineRocket className='t1' />
                Dashboard
              </li>

              <li className="t5" onClick={() => IsActive(2)} style={active === 2 ? { backgroundColor: 'rgb(224,243,255)' } : { color: 'black' }}>
                <LiaAddressCardSolid className='t1' />
                Sales Report
              </li>

              <li className="t5" onClick={() => IsActive(3)} style={active === 3 ? { backgroundColor: 'rgb(224,243,255)'}  : { color: 'black' }}>
                <LiaAddressCardSolid className='t1' />
                Comparison Report     
              </li>

              <li className="t5"  onClick={() => IsActive(4)} style={active === 4 ? { backgroundColor: 'rgb(224,243,255)'}  : { color: 'black' }}>
                <LiaAddressCardSolid className='t1' />
                Items Report</li>

              <li className="t5" onClick={() => IsActive(5)} style={active === 5 ? { backgroundColor: 'rgb(224,243,255)'}  : { color: 'black' }}>
                <LiaAddressCardSolid className='t1' />
                Cogs Report</li>

            </ul>
          </div>

        </div>
        <div className='col-lg-10 active t4'>

          {active == 1 && <>
            <Dashboard />
          </>}
          {active == 2 && <>
            <SalesReport/>
          </>}
          {active == 3 && <>
            <Comparison />
          </>}
          {active == 4 && <>
            <ItemReport />
          </>}
          {active == 5 && <>
            <CogsReport />
          </>}
        </div>
      </div>
    </div>
   
  );
}

export default App;
