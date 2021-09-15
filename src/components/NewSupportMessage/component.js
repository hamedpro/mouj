import { Component } from "react";
import "./styles.css"
import {custom_ajax} from "../../api_client/custom_ajax"
export default class NewSupportMessage extends Component{
    submit_data = async function () {
        var user_confirm = window.confirm('آیا صحت اطلاعات را تایید می کنید؟'); 
        if (!user_confirm) return
        var username = document.getElementById('username').value;
        var subject = document.getElementById('subject').value;
        var content = document.getElementById('content').value;
    
        //check if username does not exists in db
        custom_ajax({
            params:{
                func:"new_support_message",
                subject,
                content,
                username
            }
        })
        .then(()=>{
            alert('با موفقیت ثبت شد')
        },()=>{
            alert('در فرایند ثبت درخواست خطایی به وجود آمد')
        })
        .finally(()=>{
            window.location.assign("#/support")
        })
    }
    render(){
        return (
            <div id="support-form" className="content-container">
        <div className="row justify-content-center d-flex">
            <div className="col-9">
                <div className="row mt-4">
                    <div className="col">
                        <h1 className="text-light">بخش ثبت مسئله جدید</h1>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <h5 className="text-secondary">پیام شما را در اسرع وقت پاسخگو خواهیم بود .</h5>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col" dir="rtl">
                        <label htmlFor="username" className="text-light mb-1">نام کاربری :</label>
                        <input type="text" className="form-control" id="username" />
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col" dir="rtl">
                        <label htmlFor="subject" className="text-light mb-1">موضوع :</label>
                        <input type="text" className="form-control" id="subject" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col" dir="rtl">
                        <label htmlFor="content" className="text-light mb-1">متن درخواست</label>
                        <input type="text" className="form-control" id="content" style={{height:'100px'}} />
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col d-grid gap-2">
                        <button className="btn btn-success" id="submit_data" onClick={this.submit_data}>ثبت اطلاعات</button>
                    </div>
                </div>
                <hr className="bg-light" />
                <div className="row tips_container">
                   {/*  <script>
                        componise.renderComponent({
                            componentName:"tip",
                            iconSrc:'../common/bootstrap-icons/lightbulb-white.svg',
                            slot:'درخواست پشتیبانی شما ان شاء الله به زودی بررسی خواهد شد'
                        })
                    </script> */}
                    
                </div>
            </div>
        </div>
        
    
       
       
    
    </div> 
        )
    }
}
