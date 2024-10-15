import React, { useState } from 'react'
import CustomerList from './CustomerList'
import List from '../List';

function SearchCustomer() {
  const [value, setValue] = useState('');
  return (
    <>
    <div className='layout-row align-items-center justify-content-center mt-30'>
        <input className='large mx-20 w-20' data-testid='search-input' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Enter search term (Eg: Phil)' />
    </div>
    <CustomerList />
    </>
  )
}

export default SearchCustomer