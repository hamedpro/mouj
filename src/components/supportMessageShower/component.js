import { Component } from "react";
import "./styles.css"
import {custom_ajax} from '../../api_client/custom_ajax'
class SupportMessageShowPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            support_message_id:props.support_message_id,
            subject:"loading",
            content:"loading"
        }
    }
    load_support_message_data = ()=>{
        custom_ajax({
            params:{
                func:"get_support_message",
                support_message_id:this.state.support_message_id
            }
        })
        .then(support_message=>{
            this.setState({
                subject:support_message.subject,
                content:support_message.content
            })
        })
    }
    componentDidMount = ()=>{
        this.load_support_message_data()
    }
    toggle_support_message_status = ()=>{
        custom_ajax({
            params:{
                func:"toggle_support_message_status",
                support_message_id:this.state.support_message_id
            }
        })
        .then(r=>{
            alert('done')
        })
        this.load_support_message_data()
    }
    render(){
        return (
            <div>
            <div className="row mt-4 d-flex justify-content-center">
                <div className="col-7">
                    <h2 className="text-light rtl-center">بخش رسیدگی به درخواست های پشتیبانی</h2>
                </div>
                </div>
                <div className="row mb-2 d-flex justify-content-center mt-1">
                    <div className="col-9">
                        <h5 className="text-secondary rtl-center">پس از رسیدگی به این گزارش وضعیت آن را با استفاده از دکمه پایین صفحه به رسیدگی شده تغییر دهید</h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <hr className="bg-light w-75"/>
                </div>
                <div className="row" style={{direction:'rtl',textAlign:'right'}}>
                    <div className="col px-5">
                        <h4 className="text-light">
                            اطلاعات این درخواست:
                        </h4>
                    </div>
                </div>
                <div className="box" id="data_container">
                    {"موضوع این درخواست پشیبانی"+this.state.subject}
                </div>
                
                <div className="row mt-4" style={{direction:'rtl',textAlign:'right'}}>
                    <div className="col px-5">
                        <h4 className="text-light">
                            متن درخواست:
                        </h4>
                    </div>
                </div>
                <div className="box" id="content_container">{this.state.content}</div>
                
                <button className="btn btn-success" id="submit_button" onClick={this.toggle_support_message_status}>تغییر وضعیت این گزارش</button>
                <button className="btn btn-secondary mb-5" id="back_button">بازگشت</button>
  
                </div>
        )
    }
}

export default SupportMessageShowPage;