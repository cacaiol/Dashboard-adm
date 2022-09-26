import "./NewUser.css"

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle">Novo Usuário</h1>
        <form action="" className="newUserForm">
            <div className="newUserItem">
                <label htmlFor="">Nome de Usuário</label>
                <input type="text" placeholder="Leticia" />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Nome Completo</label>
                <input type="text" placeholder="Leticia Rufino" />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="leticia@gmail.com" />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Senha</label>
                <input type="text" placeholder="Senha" />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Senha</label>
                <input type="text" placeholder="Senha" />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Endereço</label>
                <input type="text" placeholder="New York | USA" />
            </div>
            <div className="newUserItem">
                <label htmlFor="">Genêro</label>
                <div className="newUserGender">
                    <input type="radio" name="genêro" id="masculino" value="masculino"/>
                    <label For="masculino">Masculino</label>
                    <input type="radio" name="genêro" id="feminino" value="feminino"/>
                    <label For="feminino">Feminino</label>
                    <input type="radio" name="genêro" id="outros" value="outros"/>
                    <label For="outros">Outros</label>
                </div>
            </div>
            <div className="newUserItem">
                <label htmlFor="">Ativar</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">Sim</option>
                    <option value="no">Não</option>
                </select>
            </div>
            <button className="newUserButton">Criar</button>
        </form>
    </div>
  )
}
