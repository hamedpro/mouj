import { Component } from "react";
import "./styles.css"
import {custom_ajax} from "../../api_client/custom_ajax"
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
                            <div key={admin.id}>{admin.id}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}