import React, { useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./UserList.css";

export default function UserList() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userId)=>{
    setUserDatas(userDatas.filter(user => user.id != userId))

  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "TransActions",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
              <DeleteOutlineIcon className="userListDelete" onClick={()=>userDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        disableSelectionOnClick
      />
    </div>
  );
}
