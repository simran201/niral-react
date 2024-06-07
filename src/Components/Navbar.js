import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='bg-dark text-white container-fluid'>
    <div className='top-navbar d-flex justify-content-between p-3'>
        <div className='img-container d-flex'>
        <div className='small-img p-3d-flex justify-content-end ms-auto'>
        <FaTelegramPlane size={30}/>
</div>
        <div className='main-logo'>
            <img src='' alt=''/>
            </div>
            </div>
<div className='noti-img'>
<IoIosNotifications size={30}/>
</div>
            </div>
            <div className='bottom-navbard row p-3 d-flex align-items-center' >
                <div className='heading-content col-8'>
                    <h2>Track Your Parcel                    </h2>

                        <p>Enter Your Parcel tracking number to track your parcel live</p>
                </div>
                <div className='search-bar col-4'>
                <div className='form-control
               mr-sm-2'
               >
               <input
              type="search"
              placeholder="Tracking Number"
              className="me-2 form-control"
              aria-label="Search"
            />
              </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar
