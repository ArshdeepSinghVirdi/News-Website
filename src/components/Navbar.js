import React  from 'react'
// import PropTypes from 'prop-types'
//  import {Link} from 'react-router-dom'

const Navbar = () =>{
    return (
        <div>
                 <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                   <a className="navbar-brand"href="/">NewsHunt</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                       <a className="nav-link active" aria-current="page"href="/Home">Home</a>
                        </li>
                                         <li className="nav-item">
                                            <a className="nav-link active"href="/Business">Business</a>

                        </li>
                                         <li className="nav-item">
                                            <a className="nav-link active"href="/Entertainment">Entertainment</a>

                        </li>
                                         <li className="nav-item">
                                            <a className="nav-link active"href="/General">General</a></li>
                                         <li className="nav-item">
                                            <a className="nav-link active"href="/Health">Health</a>

                        </li>
                                         <li className="nav-item">
                                            <a className="nav-link active"href="/Science">Science</a>

                        </li>
                                         <li className="nav-item">
                                            <a className="nav-link active"href="/Sports">Sports</a>

                        </li>
                        <li className="nav-item">
                       <a className="nav-link active"href="/Technology">Technology</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
       </div>
    ) 
}

export default Navbar
