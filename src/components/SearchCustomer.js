import React, { useEffect, useState } from 'react'
import CustomerList from './CustomerList'
import List from '../List';

function SearchCustomer() {
  const [value, setValue] = useState('');
  const [data, setData] = useState(List)

  useEffect(() => {
    const filteredData = List.filter(customer => customer.name.toLowerCase().startsWith(value) || customer.location.toLowerCase().startsWith(value));
    console.log('filteredData = ', filteredData);
    setData(prevData => [...filteredData]);
  }, [value])
  

  return (
    <>
    <div className='layout-row align-items-center justify-content-center mt-30'>
        <input 
          className='large mx-20 w-20'
          data-testid='search-input'
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Enter search term (Eg: Phil)'
        />
    </div>
    <CustomerList customers={data}/>
    </>
  )
}

export default SearchCustomer