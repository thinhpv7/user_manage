import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            tempValue : '',
            userObj : {}
        };
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true){
            return <div className = "btn btn-block btn-outline-secondary mr-1" onClick = {() => this.props.ketNoi()}>Đóng lại</div>
        }else{
            return <div className = "btn btn-block btn-outline-info mr-1" onClick = {() => this.props.ketNoi()}>Thêm mới</div>
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue : event.target.value
        });
        this.props.getTextSearchProps(this.state.tempValue)
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj : info
        })
        this.props.getUserEditInfoApp(info)
    }

    isShowEditUser = () => {
        if(this.props.editUserStatus === true){
            return (<EditUser
                        getUserEditInfo = {(info) => this.getUserEditInfo(info)}
                        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                        editUserObject = {this.props.editUserObject}
                    />
            )
        }
    }

    
    render() {
        // console.log(this.props.editUserObject)
        return (
            
                <div className="col-12">
                    {this.isShowEditUser()}
                    <div className="form-group">
                        <div className="btn-group">
                            <input type="text"  className="form-control" onChange = {(event) => this.isChange(event)} placeholder="Nhâp từ khóa tìm kiếm " aria-describedby="helpId" />
                            <div className="btn btn-info" onClick = {(dl) => this.props.getTextSearchProps(this.state.tempValue)}>
                                Tìm kiếm
                            </div>
                        </div> 
                        <div className = "btn-group ml-2">
                            
                            {this.hienThiNut()}
                            
                        </div> 
                    </div>
                </div>
            
        );
    }
}

export default Search;