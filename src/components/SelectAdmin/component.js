import { Component } from "react";
import "./styles.css"
import {custom_ajax} from "../../api_client/custom_ajax"
import Option from "../Option/Option"
export default class SelectAdminPage extends Component{
    componentDidMount = ()=>{
        var self = this 
        custom_ajax({
            params:{
                func:"get_admins"
            }
        })
        .then(admins=>{
            self.setState({
                admins:admins
            })
        })
    }
    constructor(){
        super()
        this.state = {
            admins :[]
        }
        //redirect to admin page if user has loged in before
        if(window.localStorage.getItem('admin_username')){
            window.location.assign('#/admin')
        }
    }
    redirect_to_admin_password_check(username){
        window.location.assign('#/admin-password-check/'+username)
    }
    render(){
        return (
            <div>
                <div className="row justify-content-center d-flex mt-3">
                    <div className="col-6">
                        <h1 className="text-light rtl-center">ورود به پنل مدیر</h1>
                    </div>
                </div>  
                <div className="row justify-content-center d-flex mt-1">
                    <div className="col-10">
                        <h5 className="text-secondary rtl-center">نام کاربری خود را از میان موارد زیر انتخاب کنید</h5>
                    </div>
                </div>  
                
                <div className="row d-flex justify-content-center mt-1">
                    <hr className="bg-light w-75" />
                </div>
                <div id="dataContainer">
                    {this.state.admins.map(admin=>{
                        return(
                            <div onClick={()=>window.location.assign('#/admin-password-check/'+admin.username)}>
                                <Option key={admin.id} title={admin.username} content="" ></Option>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}