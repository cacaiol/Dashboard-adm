import React from 'react';
import "./Topbar.css";
import {NotificationsNone, Language, Settings} from '@mui/icons-material/';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarContainer">
                 <div className="topLeft">
                    <span className="logo">Dashboard Admin</span>
                 </div>
                 <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="./src/assets/dog.jpg" className="topAvatar" alt="Imagem de perfil"></img>
                 </div>
            </div>
        </div>
     );
    }   