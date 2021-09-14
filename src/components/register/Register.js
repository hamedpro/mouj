import { Component } from "react";
import "./styles.css"
import {custom_ajax , custom_ajax_default_path} from "../../api_client/custom_ajax";
export class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            username_is_not_available_alert : false
        }
    }
    check_if_username_is_available = ()=>{
        /* var username = document.getElementById('username_input').value;
        fetch('../api/requests.php?func_name=is_username_available&username='+username,)
        .then(res=>res.text())
        .then(res=>{
            
            if(res != 'true'){
                document.getElementById('tips_container_1').style.display = "block";
                document.getElementById('submit_button').classList.add('disabled');
            }else{
                document.getElementById('tips_container_1').style.display = "none";
                document.getElementById('submit_button').classList.remove('disabled');
            }
        }) */
    }
    submit_data = ()=>{
        if(! window.confirm('صحت اطلاعات را تایید می کنید ؟')) return false; 
        var username = document.getElementById('username_input').value;
        custom_ajax({
            url:custom_ajax_default_path,
            params : {
                func:"new_user",
                username
            }
        }).then(()=>{
            console.log('new username saved successfuly!')
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
                    <input type="text" id="username_input" className="form-control" style={{direction:"rtl"}} />
                </div>
            </div>
            <div className="row justify-content-center mb-2">
                <div className="col-9">
                    <div className="tips_container mt-1" id="tips_container_1" style={{display:"none"}}>
                        
                        {/* <script>
                            componise.renderComponent({
                                componentName:"tip",
                                iconSrc:'../common/bootstrap-icons/lightbulb-white.svg',
                                slot:'<span className="text-danger">کاربر دیگری این نام کاربری را انتخاب کرده است </span>'
                            })
                        </script> */}
                    
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-9 d-grid gap-2 mb-2">
                    <button className="btn btn-success" id="submit_button" onClick={this.submit_data}>ثبت همین نام کاربری</button>
                </div>
            </div>
            <div className="row justify-content-center mt-1">
                <div className="col-9 tips_container">
                    
                    {/* <script>
                        componise.renderComponent({
                            componentName:"tip",
                            iconSrc:'../common/bootstrap-icons/lightbulb-white.svg',
                            slot:'هر لحظه که سوالی به ذهنتان خطور کرد با ما در میان بگذارید <a href="#/support">اطلاعات بیشتر</a>'
                        })
                    </script> */}
                </div>
            </div>
            
            </div>
        )
    }
}