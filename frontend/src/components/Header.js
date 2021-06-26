import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ height: "10vh", backgroundColor: "#111111" }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          Retro Blog
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fw-bold me-3 fs-5 text-light" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {
              userInfo ?
              <li className="nav-item">
                <div className="pt-2">
                  <button className='btn btn-blue'>
                    <Link to='/profile'>{userInfo.name}</Link>
                  </button>
                  <button className='btn btn-blue'>
                    <Link to='/admin/posts'>All posts</Link>
                  </button>

                  <button className='btn btn-blue' onClick={logoutHandler}>
                    Logout
                  </button>
                </div>
              </li>
              :
              <li className="nav-item">
                <Link className="nav-link active fw-bold me-3 fs-5 text-light" to="/login">
                  Login
                </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
    // <div>
    //   {userInfo ? (
    //     <div>
          
    //     </div>
    //   ) : (
    //     <Link to='/login'>Login</Link>
    //   )}
    // </div>
  )
}

export default Header
