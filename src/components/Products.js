import React from 'react'

export default function Products() {
  return (
    <React.Fragment>
      <h2 className='text-center my-5 font-weight-bold'>
        Product list
      </h2>
      <table
        className='table table-stripped'
      >
        <thead
          className='bg-info table-dark'
        >
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Price</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </React.Fragment>
  )
}
