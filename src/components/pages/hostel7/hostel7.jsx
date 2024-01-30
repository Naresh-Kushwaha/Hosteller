import React from "react";
import './hostel7.css';
import data from "./data";

export default function Hostel7(){
   
    return<>
    <div className="hostel7 " >
        <div>
            <h1 className="text-2xl font-extrabold">HOSTEL 7</h1>
            <h1 className=" text-2xl  py-6 font-extrabold text-blue-900"></h1>
        </div>
        <div className=" h-32 w-auto  ">
            <img className=" h-full "src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"></img>
            <h1>Name :</h1>
            <h1>Semester</h1>
            <h1>Branch:</h1>
            <h1>From:</h1>
        </div>

    <div className="my-44  "> 
        <ul className="  grid sm:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-20  ">
       
        {
            data.map((item)=>(
                
                <li className="w-44 ">
                    <img  src={item.img}></img>
                    <h1>Name :{item.name}</h1>
                <h1>Semester:{item.semester}</h1>
                <h1>Branch:{item.branch}</h1>
                <h1>From:{item.from}</h1></li>
            ))
        } </ul>
   </div></div>
    </>

}