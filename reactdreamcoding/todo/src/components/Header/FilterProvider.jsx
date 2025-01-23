import React, { createContext, useEffect, useState } from 'react'

export const FilterContext=createContext();

let filters = ['all', 'active','completed'];
export function FilterProvider({children}) {
  const [filter, setFilter] = useState('all');
  const handleFilter = (e)=> setFilter(e.target.innerText.toLowerCase());
  return (
    <FilterContext.Provider value={{filter, handleFilter,filters}}>
        {children}
    </FilterContext.Provider>
  )
}
