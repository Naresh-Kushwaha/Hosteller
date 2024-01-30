import React from "react";
import logo from './logo.png';
import Typewriter from 'typewriter-effect';
import './home.css';
import Hostel7 from "./hostel7/hostel7";

export default function Home(){
     return<>
     <div>
     <div className=" homepage h-svh flex flex-col w-screen  ">
        <div  className="flex justify-center">
            <img className="h-56 rounded-full " src={logo}></img>
       </div>
       <nav >
       <ul className="flex font-bold flex-row text-xl justify-evenly m-5">
        <li> <a href="/ hostel7/hostel7">Hostel 1</a> 
</li>

     
        <li>Hostel 2</li>
        <li>Hostel 3</li> 
        <li>Hostel 4</li>
        <li>Hostel 5</li>
        <li>Hostel 6</li>
        <li>Hostel 7</li>
        <li>Hostel 8</li>
       </ul>
       </nav>
       <div  className=" my-10 text-2xl font-extrabold text-center">
       <Typewriter
  options={{
    strings: ['Jabalpur Engineering College', 'We in it , We win it','United we stand Divided we fall','दलं सततं रक्षेत्'],
    autoStart: true,
    loop: true,
  }}
/>
       </div>
       
     </div>
    
     </div>
     </>
}