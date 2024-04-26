import * as React from 'react';
import { GridActionsCellItem } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import useStockCall from '../../hooks/useStockCall';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DataTable from '../Commons/DataTable';
import { editDeleteIconDark, editDeleteIconLight } from '../../styles/globalStyle';



export default function SaleTable({ setInitialState, handleOpen }) {
    const { mode } = useSelector(state => state.darkMode)
    const { sales } = useSelector(state => state.stock)
    const { deleteStockData } = useStockCall()

    const columns = [
        {
            field: "updatedAt",
            headerName: "Date",
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            valueGetter: (value) => {
                return new Date(value).toLocaleString("de-DE");
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
            valueGetter: (value) => {
                return value?.name ?? 'N/A'
            }
        },
        {
            field: 'productId',
            headerName: 'Product',
            minWidth: 100,
            headerAlign: "center",
            align: "center",
            flex: 1,
            valueGetter: (value) => {
                return value?.name ?? 'N/A'
            }
        },
        {
            field: 'quantity',
            headerName: 'Stock',
            type: 'number',
            minWidth: 50,
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
            flex: 1,
            renderCell: ({ row: { brandId, price, quantity, productId, _id } }) => {
                return [
                    <GridActionsCellItem
                        key={"edit"}
                        icon={<EditNoteIcon />}
                        label="Edit"
                        onClick={() => {
                            handleOpen();
                            setInitialState({ brandId, price, quantity, productId, _id });
                        }}
                        sx={mode ? editDeleteIconLight : editDeleteIconDark}

                    />,
                    <GridActionsCellItem
                        key={"delete"}
                        icon={<DeleteForeverIcon />}
                        label="Delete"
                        onClick={() => deleteStockData("sales", _id)}
                        sx={mode ? editDeleteIconLight : editDeleteIconDark}

                    />,
                ];
            },
        },
    ];
    return <DataTable rows={sales} columns={columns} />;
};