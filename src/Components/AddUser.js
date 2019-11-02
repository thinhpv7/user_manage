import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : "",
            name : "",
            tel : "",
            permission : ""
        }

    }

    isChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        
        this.setState({
            [name]:value
        })
        //package to item
        // var item = {};
        //     item.id =  this.state.id
        //     item.name = this.state.name
        //     item.tel = this.state.tel
        //     item.permission  = this.state.permission
        // console.log(this.state)
        
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return(
                <div className = "col-12">
                    <form>
                        <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" name = "name" className="form-control" onChange = {(event) => this.isChange(event)}  placeholder="Nhập tên người dùng" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name = "tel" className="form-control" onChange = {(event) => this.isChange(event)}  placeholder="Nhập số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name = "permission" required onChange = {(event) => this.isChange(event)}>
                                        <option value>Chọn quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderater</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type = "reset" 
                                        className="btn btn-block btn-primary" 
                                        onClick = {(name, tel, permission) => this.props.add(this.state.name, 
                                                                                            this.state.tel, 
                                                                                            this.state.permission
                                                                                        )}
                                        value = " Thêm mới "
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        // console.log(this.props.hienThiForm)
        // console.log(this.state)
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>
            

        );
    }
}

export default AddUser;