// import logo from './logo.svg';
import './App.css';
import { Home } from './Home'
import {Scan} from './Scan';
import React from 'react';
import {QrReader} from 'react-qr-reader';
import { useState } from 'react';
import info from './db.json'
import {Routes, Route, useNavigate} from 'react-router-dom';

export const Qrreader = () => {

  const [data,setData] = useState()
  const [isShown,setIsShown]=useState(true)
  const navigate = useNavigate()
//  const [res,setRes] = useState(info)
  return (
   
    <div className="App" >

       <div className='QR_Reader'>
       <center>Align QR code to Scan</center>
      {isShown && (<QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            setIsShown(false)
            let students = info.find(function(val)  
            {
            return (result?.text == val.name);
         });
         if(students){
           navigate('home', {state:students.name})
          }
          else{
            navigate('scan',{state:result?.text})
          }
        }
          if (!!error) {
            console.info(error);
          }
        }}
      />
      )}
         </div> 
  </div>
  
  )}
