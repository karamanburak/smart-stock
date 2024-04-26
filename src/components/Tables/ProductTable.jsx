import * as React from 'react';
import { useSelector } from 'react-redux';
import useStockCall from '../../hooks/useStockCall';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DataTable from '../Commons/DataTable';
import { editDeleteIconDark, editDeleteIconLight } from '../../styles/globalStyle';
function getRowId(row){
    // console.log(row);
    return row._id
}

export default function ProductTable() {
    const { mode } = useSelector(state => state.darkMode)
    const {products} = useSelector(state=> state.stock)
    const {deleteStockData} = useStockCall()

    const columns = [
        { field: "_id", headerName: "ID", minWidth: 40, maxWidth: 70, headerAlign: "center", align: "center", flex: 0.8 },
        {
            field: 'categoryId',
            headerName: 'Category',
            minWidth: 150,
            editable: false,
            headerAlign:"center",
            align:"center",
            flex: 2,
            valueGetter: (value) => {
                // console.log(value);
                // console.log(row);
                return value?.name || 'N/A'
            }
        },
        {
            field: 'brandId',
            headerName: 'Brand',
            minWidth: 150,
            headerAlign: "center",
            align:"center",
            flex: 2,
            valueGetter: (value) => value?.name || 'N/A'
        },
        {
            field: 'name',
            headerName: 'Name',
            type: 'text',
            minWidth: 150,
            headerAlign: "center",
            align: "center",
            flex: 2,
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
                <DeleteForeverIcon
                sx={mode ? editDeleteIconLight : editDeleteIconDark}
                    onClick={() => deleteStockData("products", params.id)}
                />
            ),
        },
    ];


    return <DataTable rows={products} columns={columns} />;
    

}