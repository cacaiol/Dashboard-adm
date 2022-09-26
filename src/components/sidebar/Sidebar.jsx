import "./Sidebar.css";
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report} from '@mui/icons-material/';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
       <div className="sidebarContainer">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                             <LineStyle className="sidebarIcon"/>
                                 Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                             <Timeline className="sidebarIcon"/>
                                 Análise
                        </li>
                        <li className="sidebarListItem">
                             <TrendingUp className="sidebarIcon"/>
                                Vendas
                        </li>
                    </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Menu Rápido</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                             <PermIdentity className="sidebarIcon"/>
                                 Usuário
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                             <Storefront className="sidebarIcon"/>
                                 Produtos
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                             <AttachMoney className="sidebarIcon"/>
                                Transações
                        </li>
                        <li className="sidebarListItem">
                             <BarChart className="sidebarIcon"/>
                                Relatório
                        </li>
                    </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notificações</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                             <MailOutline className="sidebarIcon"/>
                                 E-mail
                        </li>
                        <li className="sidebarListItem">
                             <DynamicFeed className="sidebarIcon"/>
                                 Feedback
                        </li>
                        <li className="sidebarListItem">
                             <ChatBubbleOutline className="sidebarIcon"/>
                                Mensagens
                        </li>
                    </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Colaboradores</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                             <WorkOutline className="sidebarIcon"/>
                                 Gerir
                        </li>
                        <li className="sidebarListItem">
                             <Timeline className="sidebarIcon"/>
                                 Estatísticas
                        </li>
                        <li className="sidebarListItem">
                             <Report className="sidebarIcon"/>
                                Report
                        </li>
                    </ul>
            </div> 
       </div>
    </div>
  );
}
