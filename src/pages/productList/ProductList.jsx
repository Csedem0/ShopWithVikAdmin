import "./productList.css";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "redux/apiCalls";
import { DataGrid } from "@material-ui/data-grid";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  // Define columns dynamically based on availability
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "price", headerName: "Price", width: 160 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 120,
      editable: true, // Make the column editable if needed
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  // Check if any product is unavailable (inStock === false)
  const hasUnavailableProducts = products.some((product) => !product.inStock);

  // Conditionally add the Stock column based on availability
  if (!hasUnavailableProducts) {
    columns.splice(2, 0, { field: "inStock", headerName: "Stock", width: 200 });
  }

  // Render the DataGrid with dynamically adjusted columns
  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={12}
        checkboxSelection
      />
    </div>
  );
}
