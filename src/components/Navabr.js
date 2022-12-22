import React from 'react'
const Navabr = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark   nav">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/dashboard">Dashboard</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/masterprice">Master Price</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/customprice">Custom Prce</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/calender">Calender</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/reports">Reports</a>
              </li>
            </ul>
            <span className="navbar-text active">
              Login
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navabr