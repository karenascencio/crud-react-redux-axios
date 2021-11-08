import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav
      className='navbar nav-bar-expand-lg navbar-dark bg-info justify-content-between'
    >
      <div className='container'>
        <h1>
          <Link 
            to={'/'}
            className='text-light'
          >
            CRUD - React, Redux, REST API AND AXIOS
          </Link>
        </h1>
      </div>
      <Link
        className='btn btn-danger main_post d-block d-md-inline-block'
        to={'/products/new'}
      >
          Add product &#43;
        </Link>
    </nav>
  )
}
