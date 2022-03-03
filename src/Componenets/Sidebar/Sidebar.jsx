import React from 'react'
import "./Sidebar.css";
import {LineStyle, Timeline, TrendingUp,PersonAdd,} from "@material-ui/icons";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MessageIcon from '@mui/icons-material/Message';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'> Dashboard </h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <LineStyle  className="sidebarIcon" style={{color:"#8D3DAF"}}/> Home

                    </li>

                    <li className='sidebarListItem'>
                        
                        <Timeline className="sidebarIcon" style={{color:"#E5D68A"}}/>
                        Analytics

                    </li>

                    <li className='sidebarListItem'>
                        <TrendingUp className="sidebarIcon"  style={{color:"#02B290"}}/> Sales

                    </li>
                </ul>
            </div>

        {/* ------------------------------------------------------------------------------- */}

            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'> Quick Menu </h3>
                <ul className='sidebarList'>
                    <Link to="/users">
                    <li className='sidebarListItem active'>
                    <PersonAdd className="sidebarIcon"   style={{color:"#E8BD0D"}}/>
                        Users
                       
                    </li>
                    </Link>


                    <Link to="/products">
                    <li className='sidebarListItem'>
                    <AccountBalanceIcon  className="sidebarIcon"  style={{color:"#E21717"}}/> Products

                        
                       

                    </li>
                    </Link>

                    <li className='sidebarListItem'>
                        <PaidIcon className="sidebarIcon"   style={{color:"#8D3DAF"}}/> Transactions
                       

                    </li>

                    <li className='sidebarListItem'>
                        <AssessmentIcon className="sidebarIcon"  style={{color:"#CAD5E2"}}/> Reports
                     

                    </li>
                </ul>
            </div>
{/* ------------------------------------------------------------------------------- */}

            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'> Notifications </h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <MarkEmailUnreadIcon className="sidebarIcon"  style={{color:"#120E43"}}/> Mail

                    </li>

                    <li className='sidebarListItem'>
                        
                        <RateReviewIcon className="sidebarIcon"  style={{color:"#6EC72D"}}/>
                        Feedback

                    </li>

                    <li className='sidebarListItem'>
                        <MessageIcon className="sidebarIcon"   style={{color:"#6A1B4D"}}/> Messages

                    </li>
                </ul>
            </div>

{/* ------------------------------------------------------------------------------- */}

            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'> Staff </h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active'>
                        <WorkOutlineIcon className="sidebarIcon"  style={{color:"#F7CD2E"}}/> Manage

                    </li>

                    <li className='sidebarListItem'>
                        
                        <ReportGmailerrorredIcon className="sidebarIcon"  style={{color:"#E07C24"}}/>
                        Reports

                    </li>

                    <li className='sidebarListItem'>
                        <BubbleChartIcon className="sidebarIcon"   style={{color:"#E03B8B"}}/> Statistics

                    </li>
                </ul>
            </div>
        </div>
    
    </div>
  )
}
