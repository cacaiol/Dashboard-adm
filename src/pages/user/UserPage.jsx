
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./UserPage.css";

export default function UserPage() {
  return (
    <div className="user">
       <div className="userTitleContainer">
            <h1 className="userTitle">Editar Usuário</h1>
            <Link to="/newUser">
            <button className="userAddButton">Criar</button>
            </Link>
       </div>
       <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img className="userShowImg" src="./src/assets/dog.jpg" alt="" />
                    <div className="userShowTopTittle">
                        <span className="userShowUsername">Pedro</span>
                        <span className="userShowUserTittle">Analista de Dados</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">Detalhes da Conta</span>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon" />
                        <span className="userShowInfoTitle">Pedro99</span>
                    </div>
                    <div className="userShowInfo">
                        <CalendarToday className="userShowIcon"/>
                        <span className="userShowInfoTitle">05/08/1999</span>
                    </div>
                    <div className="userShowInfo">
                        <MailOutline  className="userShowIcon"/>
                        <span className="userShowInfoTitle">pedro99@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                        <LocationSearching  className="userShowIcon"/>
                        <span className="userShowInfoTitle">São Paulo | Brasil</span>
                    </div>
                    <div className="userShowInfo">
                        <PermIdentity className="userShowIcon"/>
                        <span className="userShowInfoTitle">Pedro99</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdadeTitle">Editar</span>
                <form action="" className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Nome de Usuário</label>
                            <input type="text" placeholder="pedro99" className="userUpdateInput" />
                        </div>
                        <div className="userUpdateItem">
                            <label>Nome Completo</label>
                            <input type="text" placeholder="Pedro Joaquim" className="userUpdateInput" />
                        </div> 
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder="pedro99@gmail.com" className="userUpdateInput" />
                        </div> 
                        <div className="userUpdateItem">
                            <label>Endereço</label>
                            <input type="text" placeholder="São Paulo | Brasil" className="userUpdateInput" />
                        </div> 
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="./src/assets/dog.jpg" alt="" className="userUpdateImg" />
                            <label htmlFor="file"><Publish/></label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="userUpdateButton">Atualizar</button>
                    </div>
                    
                </form>
            </div>
       </div>
    </div>
  )
}
