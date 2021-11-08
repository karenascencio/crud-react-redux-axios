import React from 'react'

export default function EditProduct() {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Edit item
            </h2>
            <form>
              <div className='form-group'>
                <label htmlFor='product-name'> Product name:</label>
                <input
                  type='text'
                  id='product-name'
                  className='form-control'
                  placeholder='e.g. Apple...'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='product-name'> Product price:</label>
                <input
                  type='text'
                  id='product-price'
                  className='form-control'
                  placeholder='e.g. 1.99...'
                />
              </div>
              <button
                type='submit'
                className='btn btn-info font-weight-bold text-uppercase d-block w-100'
              >
                Save changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
