import "./WidgetSmall.css";
import { Visibility } from "@mui/icons-material";

export default function WidgetSmall() {
  return (
    <div className="widgetsmall">
        <span className="widgetsmallTitle">Novos Membros</span>
        <ul className="widgetsmallList">
            <li className="widgetsmallItem">
                <img src="./src/assets/dog.jpg" alt="" className="widgetsmallImg"/>
                <div className="widgetsmallUser">
                    <span className="widgetsmalluserName">Pedro</span> 
                    <span className="widgetsmallUserTitle">Engenheiro de Software</span>
                </div>
                <button className="widgetsmallButton">
                <Visibility className="widgetsmallIcon"/>
                    Exibir
                </button>
            </li>
            <li className="widgetsmallItem">
                <img src="./src/assets/dog.jpg" alt="" className="widgetsmallImg"/>
                <div className="widgetsmallUser">
                    <span className="widgetsmalluserName">Rafael</span> 
                    <span className="widgetsmallUserTitle">Engenheiro de Software</span>
                </div>
                <button className="widgetsmallButton">
                <Visibility className="widgetsmallIcon"/>
                    Exibir
                </button>
            </li>
            <li className="widgetsmallItem">
                <img src="./src/assets/dog.jpg" alt="" className="widgetsmallImg"/>
                <div className="widgetsmallUser">
                    <span className="widgetsmalluserName">Douglas</span> 
                    <span className="widgetsmallUserTitle">Engenheiro de Software</span>
                </div>
                <button className="widgetsmallButton">
                <Visibility className="widgetsmallIcon"/>
                    Exibir
                </button>
            </li>
            <li className="widgetsmallItem">
                <img src="./src/assets/dog.jpg" alt="" className="widgetsmallImg"/>
                <div className="widgetsmallUser">
                    <span className="widgetsmalluserName">Carla</span> 
                    <span className="widgetsmallUserTitle">Engenheiro de Software</span>
                </div>
                <button className="widgetsmallButton">
                <Visibility className="widgetsmallIcon"/>
                    Exibir
                </button>
            </li>
            <li className="widgetsmallItem">
                <img src="./src/assets/dog.jpg" alt="" className="widgetsmallImg"/>
                <div className="widgetsmallUser">
                    <span className="widgetsmalluserName">Leticia</span> 
                    <span className="widgetsmallUserTitle">Engenheiro de Software</span>
                </div>
                <button className="widgetsmallButton">
                <Visibility className="widgetsmallIcon"/>
                    Exibir
                </button>
            </li>
        </ul>
    </div>
  );
}
