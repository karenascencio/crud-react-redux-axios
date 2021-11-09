import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Redux actions
import { createNewProductAction } from '../actions/productActions'

export default function NewProduct() {

  // use useDispatch and it creates a function
  const dispatch = useDispatch()

  // call action
  const addProduct = () => dispatch ( createNewProductAction() )

  // when form is submited
const submitNewProduct = event => {
  event.preventDefault()

  // Validate form

  // check for errors

  // create new product
  addProduct()
}

  return (
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>
              Add new item
            </h2>
            <form
              onSubmit={submitNewProduct}
            >
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
                Add item
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
