import React, { useContext } from 'react'
import { FilterContext } from '../Context/FilterProvider';
import styles from './Header.module.css'
import { v4 as uuidv4 } from 'uuid';
import { useDarkMode } from '../Context/DarkModeContext';
import { HiMoon , HiSun } from "react-icons/hi";

export default function () {
  const {darkMode, toggleDarkMode } = useDarkMode();
  const {handleFilter ,filters , filter} = useContext(FilterContext);

  return (
    <header className={styles.header}>
        <button className={styles.toggle} onClick={toggleDarkMode}>
          {!darkMode ? <HiMoon /> : <HiSun/> }
        </button>
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
