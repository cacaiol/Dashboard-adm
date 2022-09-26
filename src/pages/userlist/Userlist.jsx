import "./Userlist.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function Userlist() {
    
    const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Usuário', width: 200,
     renderCell: (params)=>{
      return (
        <div className="userlistUser">
          <img className="userlistImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
     } },
    { field: 'email', headerName: 'Email', width: 200 },

    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'Transações',
      headerName: 'Transações R$',
      width: 160,
    },
    {
      field:'ações',
      headerName:'Ações',
      width:'150',
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/"+params.row.id}>
              <button className="userlistEdit">Editar</button>
            </Link>
            <DeleteOutline className="userlistDelete" onClick={()=>handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];

  const rows = [
    { id: 1, username: 'Pedro',
     avatar: "./src/assets/dog.jpg",
     email: "pedro@gmail.com",
     status:"Ativo",
     transações:"R$ 1.300,00"
    },

    { id: 2, username: 'Marcos',
     avatar: "./src/assets/dog.jpg",
     email: "marcos@gmail.com",
     status:"Ativo",
     transações:"1"
    },

    { id: 3, username: 'Douglas',
     avatar: "./src/assets/dog.jpg",
     email: "douglas@gmail.com",
     status:"Ativo",
     transações:"1"
    },

    { id: 4, username: 'Rafael',
     avatar: "./src/assets/dog.jpg",
     email: "rafael@gmail.com",
     status:"Ativo",
     transações:"1"
    },

    { id: 5, username: 'Carla',
     avatar: "./src/assets/dog.jpg",
     email: "carla@gmail.com",
     status:"Ativo",
     transações:"1"
    },

    { id: 6, username: 'Larissa',
     avatar: "./src/assets/dog.jpg",
     email: "larissa@gmail.com",
     status:"Ativo",
     transações:""
    },

  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />   
    </div>
  )
}
