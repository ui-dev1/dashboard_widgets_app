import React from 'react'
import { useSelector } from 'react-redux';
import Table from '../../../shared/Table/Table';

const UserTable = () => {
    const { tableData } = useSelector(state => state.widgets)
    const columns = [
        {
            field: 'id',
            headerName: 'S.No',
            flex: 1,
            sortable: false,
        },
        {
            field: 'name',
            headerName: 'Name ',
            flex: 1,
        },
        {
            field: 'username',
            headerName: 'User Name',
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email ID',
            flex: 1,
        }
    ];

    return (
        <div>
            <h3>User Table</h3>
            <Table
                columns={columns}
                aria-label='grid'
                data={tableData || []}
            />
        </div>
    );
}

export default UserTable