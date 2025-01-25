import React from 'react'
import { Outlet } from 'react-router';

function Go() {
    
  return (
    <div>
      go페이지입니다.
      <Outlet/>
    </div>
  )
}

export default Go
