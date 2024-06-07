import React from 'react'

const Services = () => {
  return (
    <>
      <div className='servicesContainer container-fluid'>
        <div className='main-heading p-3 '>
            <h1 className='fw-bold pt-3'>Our Services</h1>
        </div>
        <div className='d-flex justify-content-between row'>
          <div className='servicesDetails col-3'>
            <div className='serviceimg'>
<img src='/bus.jpeg' height={160} width={260} alt='bus'/>
            </div>
            <h6>Ship Parcel</h6>
          </div>
          <div className='servicesDetails col-3'>
            <div className='serviceimg'>
            <img src='/bus.jpeg' height={160} width={260} alt='bus'/>

            </div>
            <h6>Logistic</h6>
          </div> <div className='servicesDetails col-3'>
            <div className='serviceimg'>
            <img src='/bus.jpeg' height={160} width={260} alt='bus'/>

            </div>
            <h6>International</h6>
          </div>
          <div className='servicesDetails col-3'>
            <div className='serviceimg'>
            <img src='/bus.jpeg' height={160} width={260} alt='bus'/>

            </div>
            <h6>Bulk Shipping</h6>
          </div>
      </div>
      </div>
    </>
  )
}

export default Services;

