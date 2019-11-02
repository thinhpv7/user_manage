import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data'

const uuidv1 = require('uuid/v1');

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      hienThiForm : false,
      dataUser : DataUser,
      searchText : '',
      editUserStatus : false,
      editUserObject : {}
    }
  }

  
  componentWillMount() {
    //kiem tra xem co local
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser))
    }
    else{
      var temp = JSON.parse(localStorage.getItem("userData"))
      this.setState({
        dataUser : temp
      })

    }
  }
  

  getTextSearch = (dl) => {
    this.setState({
      searchText : dl
    })
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm : !this.state.hienThiForm
    })
  }

  getNewUserData = (name, tel, permission) => {
    console.log("Ket noi den add user thanh cong.....")
    var item = {};
    item.id = uuidv1()
    item.name = name
    item.tel = tel
    item.permission = permission
    var items = this.state.dataUser
    items.push(item)

    this.setState({
      dataUser : items
    })
    //console.log(this.state.dataUser)
    //lưu dữ liệu vào localStorage
    localStorage.setItem("userData", JSON.stringify(items))
  }

  editUser = (user) => {
    console.log("ket noi thanh cong app voi table data row....")
    this.setState({
      editUserObject : user
    })
    // console.log(user)
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    })
  }

  getUserEditInfoApp = (info) => {
    // console.log("Thong ton nhan duoc tu Edit user la: " + info.name)
    this.state.dataUser.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name
        value.tel  = info.tel
        value.permission = info.permission
      }
    })
    //lưu lại dữ liệu vào trong localStorage
    localStorage.setItem("userData", JSON.stringify(this.state.dataUser))
  }

  deleteUser = (idUser) => {
    var tempData = this.state.dataUser
    tempData = tempData.filter(item => item.id !== idUser )
    this.setState({
      dataUser : tempData
    })
    //đưa dữ liệu vào localStorage
    localStorage.setItem("userData", JSON.stringify(tempData))
  }


  render() {

    localStorage.setItem("key1", "Hello !!!!")
    console.log(localStorage.getItem("key1"))
    localStorage.removeItem("key1")


    var ketQua = []
    this.state.dataUser.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item)
      }
    })

    return (
      <div>
        <Header/>
        <div className = "searchForm">
          <div className = "container">
            <div className = "row">
              <Search 
                getTextSearchProps = {(dl) => this.getTextSearch(dl)} 
                ketNoi = {() => this.doiTrangThai()} 
                hienThiForm = {this.state.hienThiForm}
                editUserStatus = {this.state.editUserStatus}
                changeEditUserStatus = {() => this.changeEditUserStatus()}
                editUserObject = {this.state.editUserObject}
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
              />
              <div className="col-12">
                <hr />
              </div>
              <TableData 
                editFun = {(user) => this.editUser(user)} 
                dataUserProps = {ketQua}
                changeEditUserStatus = {() => this.changeEditUserStatus()}
                deleteUser = {(idUser) => this.deleteUser(idUser)}
              />
              <AddUser add = {(name, tel, permission) => this.getNewUserData(name, tel, permission)} hienThiForm = {this.state.hienThiForm}/>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
