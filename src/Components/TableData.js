import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    mappingDataUser = () =>{ 
        return (
            this.props.dataUserProps.map((value, key) => {
                return (
                    <TableDataRow editFunClick = {(user) => this.props.editFun(value)}
                        key = {key}
                        id = {value.id}
                        stt = {key + 1} 
                        name = {value.name} 
                        tel = {value.tel}
                        permission = {value.permission}
                        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
                    />
                )

            })
        )
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser)
    }
    //this.props.editFun
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                    </table>
                </div>
        );
    }
}

export default TableData;