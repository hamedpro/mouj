import { Component } from "react";
import "./styles.css"
import {custom_ajax , custom_ajax_default_path} from "../../api_client/custom_ajax";
import light_bulb_white from "../../common/bootstrap-icons/lightbulb-white.svg"
export class Register extends Component{
    //todo make sure button disable when username is taken
    //bootstrap disabled class does it now but im not sure
    constructor(props){
        super(props)
        this.state = {
            entered_username_is_taken : false
        }
    }
    check_if_username_is_available = ()=>{
        var username = document.getElementById('username_input').value;
        fetch('../api/requests.php?func_name=is_username_available&username='+username,)
        custom_ajax({
            params:{
                func:"is_username_available",
                username:username
            }
        })
        .then(is_username_available=>{
            this.setState({
                entered_username_is_taken:! is_username_available
            })
        })
    }
    submit_data = ()=>{
        if(! window.confirm('صحت اطلاعات را تایید می کنید ؟')) return false; 
        var username = document.getElementById('username_input').value;
        custom_ajax({
            params : {
                func:"new_user",
                username
            }
        }).then(()=>{
            console.log('new username saved successfuly!')
            window.location.assign('#/home')
        })
    }
    render = ()=>{
        return(
            <div className="content-container" id="register">
            <div className="row mt-4 justify-content-center align-items-center">
                <div className="col-7 d-flex ">
                    <h1 className="text-light" style={{textAlign:"center"}} dir="rtl">عضویت در سایت به سادگی چند کلیک !</h1>
                </div>
                
            </div>
            <div className="row justify-content-center d-flex" dir='rtl'>
                <div className="col-9">
                    <h5 className="text-secondary" style={{textAlign:"center"}}>تنها با انتخاب نام کاربری عضو سایت ما شده و از همه قابلیت های مخصوص کاربران استفاده کنید !</h5>
                </div>
                
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-9" style={{direction:"rtl"}}>
                    <label htmlFor="username_input" className="text-light mb-2">نام کاربری دلخواه شما :</label>
                    <input type="text" id="username_input" className="form-control" style={{direction:"rtl"}} onChange={this.check_if_username_is_available} />
                </div>
            </div>
            <div className="row justify-content-center mb-2">
                <div className="col-9">
                    <div className="tips_container mt-1" id="tips_container_1">
                        <div style={{display:this.state.entered_username_is_taken?"block":"none"}}>
                            <img src={light_bulb_white} alt='tip svg icon'/>
                            <span className="text-danger">این نام کاربری توسط شخص دیگری انتخاب شده است</span>
                        </div>  
                            
                    
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-9 d-grid gap-2 mb-2">
                    <button className={`btn btn-success ${this.state.entered_username_is_taken?"disabled":""}`} id="submit_button" onClick={this.submit_data}>ثبت همین نام کاربری</button>
                </div>
            </div>
            <div className="row justify-content-center mt-1">
                <div className="col-9 tips_container">
                    
                </div>
            </div>
            
            </div>
        )
    }
}