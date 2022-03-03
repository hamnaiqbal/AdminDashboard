import React from 'react'
import "./Topbar.css"
import {NotificationsNone,Language,Settings} from '@material-ui/icons';
import image from "./Me.jpeg";

export default function Topbar() {
  return (
    <div className='Topbar'>
        <div className="TopbarWrapper">
            <div className="topleft">Admin Dashboard</div>
            <div className="topright">
                <div className="topRightIcons">
                    <NotificationsNone/>
                    <span className='iconsBag'>2</span>

                </div>

                <div className="topRightIcons">
                    <Language/>
                    <span className='iconsBag'>2</span>

                </div>

                <div className="topRightIcons">
                    <Settings/>
                
                </div>
                <img src={image} className="topAvatar"></img>

            </div>

        </div>
    </div>
  )
}
