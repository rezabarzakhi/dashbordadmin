import React, { useState } from "react";
import { products } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./Products.css";

export default function Products() {
  const [productsData, setProductsData] = useState(products);

  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id != productID));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="userListUser">
              <img src={params.row.avatar} className="userListImg" />
              {params.row.title}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="userListDelete" onClick={() => productDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={productsData}
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
        checkboxSelection
      />
    </div>
  );
}
