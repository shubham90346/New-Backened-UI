import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import Userimage from '../images/Userimage.jpg'
import { MdOutlineDashboard } from 'react-icons/md'
import { LiaAddressCardSolid } from 'react-icons/lia'
import { VscGraph } from 'react-icons/vsc'
import { SiTemporal } from 'react-icons/si'
import { TbReportSearch } from 'react-icons/tb'
import { MdCompareArrows } from 'react-icons/md'
import { useState } from 'react'
import Dashboard from '../Components/Dashboard'
import SalesReport from '../Components/SalesReport'
import Comparison from '../Components/Comparison'
import ItemReport from '../Components/ItemReport'
import CogsReport from '../Components/CogsReport'


function Home(props) {
  const [active, IsActive] = useState(1);

  const handlelog = () => {
    sessionStorage.clear();
  }


  return (
    <div>
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
              <p className='mt-3 d8 dropdown-toggle' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >Admin</p>

              <ul class="dropdown-menu" >
               
                <li>  <a href="/forgotpassword" className="link logo1 dropdown-item">Forgot Password</a></li>
                <li><a href="/" className="link logo1 d-flex dropdown-item" onClick={handlelog} >Logout</a></li>
              </ul>

              {/* <div class="accordion accordion-flush mt-2" id="accordionFlushExample">
                <div class="accordion-item logo2">
                  <button class="accordion-button collapsed " data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  </button>
                  <div id="flush-collapseOne" className="accordion-collapse collapse">
                    <a href="/" className="link-primary logo1 d-flex" onClick={handlelog} >Logout</a>
                    <a href="/forgotpassword" className="link-primary logo1">Forgot Password</a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className='row aq z2'>
          <div className='col-lg-2'>
            <div className='container ' >
              <ul className="list-group mt-1" >
                <li className="t5 trtt " onClick={() => IsActive(1)} style={active === 1 ? { backgroundColor: 'rgb(224,243,255)', border: "5px solid rgb(224,243,255)", borderRadius: "5px" } : { color: 'rgb(65,84,241)' }}>
                  <MdOutlineDashboard className='t1' />
                  Dashboard</li>

                <li className="t5 mt-1" onClick={() => IsActive(2)} style={active === 2 ? { backgroundColor: 'rgb(224,243,255)', borderRadius: "5px", border: "5px solid rgb(224,243,255)" } : { color: 'rgb(56,87,143)' }}>
                  <VscGraph className='t1' />
                  Sales Report
                </li>
                <li className="t5 mt-1" onClick={() => IsActive(3)} style={active === 3 ? { backgroundColor: 'rgb(224,243,255)', borderRadius: "5px", border: "5px solid rgb(224,243,255)" } : { color: 'rgb(56,87,143)' }}>
                  <MdCompareArrows className='t1' />
                  Comparison Report
                </li>

                <li className="t5 mt-1" onClick={() => IsActive(4)} style={active === 4 ? { backgroundColor: 'rgb(224,243,255)', borderRadius: "5px", border: "5px solid rgb(224,243,255)" } : { color: 'rgb(56,87,143)' }}>
                  <TbReportSearch className='t1' />
                  Items Report
                </li>

                <li className="t5 mt-1" onClick={() => IsActive(5)} style={active === 5 ? { backgroundColor: 'rgb(224,243,255)', borderRadius: "5px", border: "5px solid rgb(224,243,255)" } : { color: 'rgb(56,87,143)' }}>
                  <SiTemporal className='t1' />
                  Cogs Report
                </li>
              </ul>
            </div>
          </div>

          <div className='col-lg-10 active t4'>
            {active == 1 && <>
              <Dashboard />
            </>}
            {active == 2 && <>
              <SalesReport />
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
    </div>
  );
}

export default Home;