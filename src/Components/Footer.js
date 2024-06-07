import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { GoIssueTracks } from "react-icons/go";
import { TbBus } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
const Footer = () => {
  return (
    <div>
        <div className='footer d-flex justify-content-between bg-dark text-white'>
            <div className='footercontainer'>
                <div className='footer-img'>
<IoHomeOutline/>
                </div>
                <div className='footerName'>
                    Home
                </div>
            </div>
            <div className='footercontainer'>
                <div className='footer-img'>
<GoIssueTracks/>
                </div>
                <div className='footerName'>
                    Track
                </div>
            </div>
            <div className='footercontainer'>
                <div className='footer-img'>
<TbBus/>
                </div>
                <div className='footerName'>
                    Home
                </div>
            </div>
            <div className='footercontainer'>
                <div className='footer-img'>
<CiUser/>
                </div>
                <div className='footerName'>
                    Home
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
