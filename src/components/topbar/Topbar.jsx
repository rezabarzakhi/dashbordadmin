import React from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWarpper">
        <div className="topleft">
          <span className="logo">rezabarzakhi</span>

        </div>
        <div className="topright">
            <div className="topbarIconContainer">
              <NotificationsIcon/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <LanguageIcon/>
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <SettingsIcon/>
            </div>
            <img className="topAvatar" src="/images\adminpic.jpg"/>
          
        </div>
      </div>
    </div>
  );
}
