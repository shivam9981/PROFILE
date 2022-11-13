import React from 'react'
import '../style/Error.css'

import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className='error-one'>
      <div >
        <h1 className='sixer' id='page'>404</h1>
        <p className='sixer'>Page Not Found</p>
      </div>
      <Link className="btn btn-primary" to="/">GO TO HOME PAGE</Link>

    </div>
  )
}

export default Errorpage