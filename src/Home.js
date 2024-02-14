import React from 'react'
import './Home.css'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router';

export const Home = () => {
  const currentDate = new Date;
  const navigate = useNavigate()
  const location = useLocation();
  const data = location.state;
  console.log(data)
  return (

    <div>
      <center>
      <table>
  <tr>  <th>Student Name</th>
    <th>Attendance</th></tr>
     <tr>

    <td>{data}</td>
    <td>{currentDate.toDateString()}</td>
    </tr>
  </table> 

  <button onClick={() => {navigate('/')}}>Go Back</button>
  </center>
    </div>
  )
}
