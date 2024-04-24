import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import useStockCall from '../../hooks/useStockCall';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';

function getRowId(row) {
    // console.log(row);
    return row._id
}

export default function SaleTable({ setInitialState, handleOpen }) {
    const { mode } = useSelector(state => state.darkMode)
    const { sales } = useSelector(state => state.stock)
    const { deleteStockData,putStockData } = useStockCall()

    const columns = [
        {
            field: "updatedAt", headerName: "Date", width: 120, headerAlign: "center", align: "center"
        },
        {
            field: 'brandId',
            headerName: 'Brand',
            minWidth: 100,
            editable: false,
            headerAlign: "center",
            align: "center",
            flex: 2,
            valueGetter: (value) => {
                // console.log(value);
                // console.log(row);
                return value?.name || 'N/A'
            }
        },
        {
            field: 'productId',
            headerName: 'Product',
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 2,
            valueGetter: (value) => value?.name || 'N/A'
        },
        {
            field: 'quantity',
            headerName: 'Stock',
            type: 'number',
            width: 150,
            headerAlign: "center",
            align: "center",
            flex: 0.8,

        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 150,
            headerAlign: "center",
            align: "center",
            flex: 0.8,

        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            width: 150,
            headerAlign: "center",
            align: "center",
            flex: 0.8,
        },
        {
            field: 'actions',
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            minWidth: 40,
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: (params) => (
                // console.log(params)
                <>
                    <EditNoteIcon
                        onClick={() => {
                            handleOpen()
                            setInitialState({})
                        }}
                        sx={{ cursor: "pointer", marginTop: ".8rem" }}
                    />
                    <DeleteForeverIcon
                        sx={{ cursor: "pointer", marginTop: ".8rem" }}
                        onClick={() => deleteStockData("sales", params.id)}
                    />
                </>
            ),
        },
    ];


    return (
        <Box
            sx={{ width: '100%', mt: 2 }}>
            <DataGrid
                autoHeight
                rows={sales}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                getRowId={getRowId}
                pageSizeOptions={[5, 10, 25]}
                // checkboxSelection
                disableRowSelectionOnClick
                slots={{
                    toolbar: GridToolbar,
                }}
            />
        </Box>
    );
}