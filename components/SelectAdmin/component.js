import { Component } from "react";
import "./styles.css"

import Option from "../Option/Option"
import arrow_svg from "../../common/bootstrap-icons/chevron-left-white.svg"
export default class SelectAdminPage extends Component{
    componentDidMount = ()=>{
        
        var self = this 
        window.custom_ajax({
            params:{
                func:"get_admins"
            }
        })
        .then(admins=>{
            self.setState({
                admins:admins
            },()=>{
                //redirect to admin page if user has loged in before
                if(window.localStorage.getItem('admin_username')){
                    window.location.assign('#/admin')
                }
            })
        })
    }
    constructor(){
        super()
        this.state = {
            admins :[]
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
                            <div key={admin.id} onClick={()=>window.location.assign('#/admin-password-check/'+admin.username)}>
                                <Option  title={admin.username} content="کاربر با دسترسی ادمین" >
                                    <img alt="chevron left white svg" src={arrow_svg} />
                                </Option>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}