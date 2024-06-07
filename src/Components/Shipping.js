import React from 'react'

const Shipping = () => {
  return (
    <div style={{ padding: '20px' }} className='d-flex justify-content-around'>
      <div className="card mb-3 d-flex">
        <div className="card-body">
          <h5 className="card-title">#5R9G87R</h5>
          <h6 className="card-subtitle mb-2 text-muted">14 May 2023</h6>
          <div className="mb-2">
            <strong>From</strong>
            <p className="mb-1">1234 Elm Street Springfield, IL 62701</p>
          </div>
          <div className="mb-2">
            <strong>To</strong>
            <p className="mb-1">5678 Maple Avenue Seattle, WA 98101</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Delivery Status:</span>
            <span className="badge bg-success">Delivered</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">#8T9G88P</h5>
          <h6 className="card-subtitle mb-2 text-muted">14 May 2023</h6>
          <div className="mb-2">
            <strong>From</strong>
            <p className="mb-1">1234 Elm Street Springfield, IL 62701</p>
          </div>
          <div className="mb-2">
            <strong>To</strong>
            <p className="mb-1">5678 Maple Avenue Seattle, WA 98101</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Delivery Status:</span>
            <span className="badge bg-warning">Canceled</span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">#8T9G88P</h5>
          <h6 className="card-subtitle mb-2 text-muted">14 May 2023</h6>
          <div className="mb-2">
            <strong>From</strong>
            <p className="mb-1">1234 Elm Street Springfield, IL 62701</p>
          </div>
          <div className="mb-2">
            <strong>To</strong>
            <p className="mb-1">5678 Maple Avenue Seattle, WA 98101</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span>Delivery Status:</span>
            <span className="badge bg-danger">Canceled</span>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Shipping
