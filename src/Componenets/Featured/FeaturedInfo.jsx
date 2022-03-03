import React from 'react'
import "./FeaturedInfo.css"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem a1">
            <span className="featuredTitle"> Revenue</span>
            <div className="FeaturedMoneyContainer">
                 <span className="FeaturedMoney"> $45,000</span>
                 <span className="FeaturedMoneyRate">  -11.4 <ArrowCircleDownIcon className='fIcon negative'/> </span>
            </div>
            <span className="FeaturedSubTitle">
                Revenue Generated As Compared To Last Year 2021
            </span>
        </div>

        {/* --------------------------------------------------------------------------------------- */}

        <div className="featuredItem a2">
            <span className="featuredTitle">Sales</span>
            <div className="FeaturedMoneyContainer">
                 <span className="FeaturedMoney"> $35,000</span>
                 <span className="FeaturedMoneyRate"> -11.4 <ArrowCircleDownIcon className='fIcon negative'/></span>
            </div>
            <span className="FeaturedSubTitle">
               Total Sales of the year
            </span>
        </div>

        {/* -------------------------------------------------------------------------------------------- */}

        <div className="featuredItem a3">
            <span className="featuredTitle">Cost</span>
            <div className="FeaturedMoneyContainer">
                 <span className="FeaturedMoney"> $45,000</span>
                 <span className="FeaturedMoneyRate">11.4 <ArrowCircleUpIcon className='fIcon'/></span>
            </div>
            <span className="FeaturedSubTitle">
               Total Cost Spend on Marketing
            </span>
        </div>
    </div>
  )
}
