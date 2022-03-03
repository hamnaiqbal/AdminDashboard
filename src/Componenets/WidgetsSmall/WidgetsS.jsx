import React from 'react';
import "./WidgetsS.css";
import pic from "./Ham.jpeg";

export default function WidgetsS() {
  return (
   <div className="widgetSmall" style={{backgroundColor:"#25a5be"}}>
       <span className="widgetSmallTitle">New Members</span>
       <ul className='widgetSmallList'>
         <li className='widgetSmallItem'>
           <img src={pic} className='widgetSmallImage'></img>
           <div className="WidgetSmUser">
             <span className="widgetSmUserName">Hamna Iqbal Khan</span>
             <span className="widgetSmUserJob">Computer Scientist</span>
           </div>
           <button className='btnSmall'>View</button>
         </li>

         <li className='widgetSmallItem'>
           <img src={pic} className='widgetSmallImage'></img>
           <div className="WidgetSmUser">
             <span className="widgetSmUserName">Hamna Iqbal Khan</span>
             <span className="widgetSmUserJob">Computer Scientist</span>
           </div>
           <button className='btnSmall'>View</button>
         </li>


         <li className='widgetSmallItem'>
           <img src={pic} className='widgetSmallImage'></img>
           <div className="WidgetSmUser">
             <span className="widgetSmUserName">Hamna Iqbal Khan</span>
             <span className="widgetSmUserJob">Computer Scientist</span>
           </div>
           <button className='btnSmall'>View</button>
         </li>


         <li className='widgetSmallItem'>
           <img src={pic} className='widgetSmallImage'></img>
           <div className="WidgetSmUser">
             <span className="widgetSmUserName">Hamna Iqbal Khan</span>
             <span className="widgetSmUserJob">Computer Scientist</span>
           </div>
           <button className='btnSmall'>View</button>
         </li>


         <li className='widgetSmallItem'>
           <img src={pic} className='widgetSmallImage'></img>
           <div className="WidgetSmUser">
             <span className="widgetSmUserName">Hamna Iqbal Khan</span>
             <span className="widgetSmUserJob">Computer Scientist</span>
           </div>
           <button className='btnSmall'>View</button>
         </li>
         <li className='widgetSmallItem'>
           <img src={pic} className='widgetSmallImage'></img>
           <div className="WidgetSmUser">
             <span className="widgetSmUserName">Hamna Iqbal Khan</span>
             <span className="widgetSmUserJob">Computer Scientist</span>
           </div>
           <button className='btnSmall'>View</button>
         </li>
         
       </ul>

   </div>
  )
}
