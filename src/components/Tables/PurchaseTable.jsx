import * as React from 'react';
import {  GridActionsCellItem } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import useStockCall from '../../hooks/useStockCall';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DataTable from '../Commons/DataTable';


export default function PurchaseTable({setInitialState,handleOpen}) {
    const { purchases } = useSelector(state => state.stock)
    console.log(purchases);
    console.log("table", purchases);
    const { deleteStockData } = useStockCall()

    const columns = [
        {
            field: "updatedAt", 
            headerName: "Date", 
            minWidth: 150, 
            headerAlign: "center", 
            align: "center",
             renderCell: ({ row }) => {
                return new Date(row.createdAt).toLocaleString("de-DE");
            },
        },
        {
            field: 'firmId',
            headerName: 'Firm',
            minWidth: 100,
            editable: false,
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: ({ row }) => {
                return row?.firmId?.name ?? "N/A";
            },
        },
        {
            field: 'brandId',
            headerName: 'Brand',
            minWidth: 100,
            editable: false,
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: ({ row }) => {
                return row?.brandId?.name ?? "N/A";
            },
        },
        {
            field: 'productId',
            headerName: 'Product',
            minWidth: 100,
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: ({ row }) => {
                return row?.productId?.name ?? "N/A";
            },        
        },
        {
            field: 'quantity',
            headerName: 'Stock',
            type: 'number',
            miWidth: 50,
            headerAlign: "center",
            align: "center",

        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            minWidth: 50,
            headerAlign: "center",
            align: "center",

        },
        {
            field: 'amount',
            headerName: 'Amount',
            type: 'number',
            minWidth: 50,
            headerAlign: "center",
            align: "center",
        },
        {
            field: 'actions',
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            minWidth: 40,
            headerAlign: "center",
            align: "center",
            renderCell: ({
                row: {brandId, productId,quantity,price,firmId,_id},
            }) => {
                return [
                    <GridActionsCellItem
                        key={"edit"}
                        icon={<EditNoteIcon />}
                        label="Edit"
                        onClick={() => {
                            handleOpen()
                            setInitialState({
                                _id,
                                brandId,
                                productId,
                                quantity,
                                price,
                                firmId,
                            });
                        }}
                    />,
                    <GridActionsCellItem
                        key={"delete"}
                        icon={<DeleteForeverIcon />}
                        label="Delete"
                        onClick={() => deleteStockData("purchases", _id)}
                    />,
                ];
            },
        },
    ];
                        
    return <DataTable rows={purchases} columns={columns} />;
};
