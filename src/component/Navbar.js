import React from 'react'
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {

    const history = useNavigate()
    const handlechick = () => {
        localStorage.removeItem('token')
        history('/login')
    }
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">PRFILE-INFORMATION</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">SHIVAM</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contect">Contect</Link>
                                </li>
                                {!localStorage.getItem('token') ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup">Signup</Link>
                                        </li>
                                    </>
                                    :
                                    <Link className="nav-link" to='/login' onClick={handlechick}>Logout</Link>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar