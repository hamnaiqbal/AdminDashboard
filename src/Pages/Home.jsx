import React from 'react'
import Charts from '../Componenets/Charts/Charts';
import FeaturedInfo from '../Componenets/Featured/FeaturedInfo';
import WidgetsS from '../Componenets/WidgetsSmall/WidgetsS';
import WidgetsL from '../Componenets/WidgetsLarge/WidgetsL';
import "./Home.css";


export default function Home() {
  return (
    <div className='Home'>
         <FeaturedInfo/>
         <Charts/>
         <div className='homeWidgets'>

         <WidgetsS/>
         <WidgetsL/>
         
         </div>
       
        </div>
  )
}
