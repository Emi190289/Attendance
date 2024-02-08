// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import {QrReader} from 'react-qr-reader';
import { useState } from 'react';
import info from './db.json'
import QRCode from 'react-qr-code';

function App() {
  const [data,setData] = useState()
  const [add, setAdd] = useState(info)
  // const [res,setRes]=useState()
  let students = info.find(function(val)  
    {
    //  if(data == val.name)
     return data == val.name    
})


  let newstudents = info.every(function(val){
    return data !== val.name
  })

console.log(newstudents)

 const handleClick = () =>
{
  alert("Scan again")
};

  return (
   
    <div className="App" >
       <div className='QR_Reader'>
       <center>Align QR code to Scan</center>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
      />
         </div> 
       
         {data && newstudents && (
          <div className='scanAgain'>
             <p>{data}</p>
            <button onClick={() => {alert('scan ')}}>Scan again</button>
            </div> 
         )}
     <div className='Attendance'>
       
  <table>
  <tr>  <th>Student Name</th>
    <th>Attendance</th></tr>
   
   {students && (
     <tr>
    <td>{students.name}</td>
    <td>Present</td>
    </tr>
   )}
   
  </table>
</div>
  
  </div>
  
  )}

export default App;
