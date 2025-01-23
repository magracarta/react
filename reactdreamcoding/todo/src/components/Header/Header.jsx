import React, { useContext } from 'react'
import { FilterContext } from './FilterProvider';
import styles from './Header.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function () {
  const {handleFilter ,filters , filter} = useContext(FilterContext);
  return (
    <header className={styles.header}>
        <ul className={styles.filters}>
            {filters.map(elem=>
              <li key={uuidv4()}><button 
              className={`${styles.filter} ${filter == elem.toLowerCase() && styles.selected}`} 
              onClick={handleFilter}>{elem}</button></li>
            )}
        </ul>
    </header>
  )
}
