import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router'
import './Scan.css'


export const Scan = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const data = location.state
  
  return (
    <div>
      <center>
      <p>{data}</p>
      <button onClick={() => {navigate('/')}}>Scan again</button>
      </center>
    </div>
  )
}
