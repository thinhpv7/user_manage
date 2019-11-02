import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            id : this.props.editUserObject.id,
            name : this.props.editUserObject.name,
            tel : this.props.editUserObject.tel,
            permission : this.props.editUserObject.permission

        }
    }
    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }

    saveButton = () => {

        var info = {}
        info.id = this.state.id
        info.name = this.state.name
        info.tel = this.state.tel
        info.permission = this.state.permission
        
        this.props.getUserEditInfo(info)
        this.props.changeEditUserStatus() //ẩn form
    }
    
    render() {
        // console.log(this.props.editUserObject)
        return (
            <div>
                <div className = "col-12">
                    <form>
                        <div className="card text-white bg-warning mb-3 mt-2">
                            <div className="card-header text-center">Sửa thông tin User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input
                                        defaultValue = {this.props.editUserObject.name}
                                        onChange = {(event) => this.isChange(event)}
                                        type="text" name = "name" 
                                        className="form-control" 
                                        placeholder="Nhập tên người dùng" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        defaultValue = {this.props.editUserObject.tel}
                                        onChange = {(event) => this.isChange(event)}
                                        type="text" name = "tel" 
                                        className="form-control" 
                                        placeholder="Nhập số điện thoại" 
                                    />
                                </div>
                                <div className="form-group">
                                    <select 
                                        defaultValue = {this.props.editUserObject.permission} 
                                        onChange = {(event) => this.isChange(event)}
                                        className="custom-select" name = "permission" required
                                    >
                                        <option value>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderater</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type = "button" 
                                        className="btn btn-block btn-danger"
                                        value = " Lưu thông tin "
                                        onClick = {() => this.saveButton()}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;