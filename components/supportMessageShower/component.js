import { Component } from "react";
import "./styles.css"
import envelope_white from "../../common/bootstrap-icons/envelope-white.svg"
class SupportMessageShowPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            support_message_id:props.support_message_id,
            subject:"loading",
            content:"loading",
            support_message_status:null
        }
    }
    load_support_message_data = ()=>{
        window.custom_ajax({
            params:{
                func:"get_support_message",
                support_message_id:this.state.support_message_id
            }
        })
        .then(support_message=>{
            this.setState({
                subject:support_message.subject,
                content:support_message.content,
                support_message_status:support_message.status
            })
        })
    }
    get_back_to_admin_page = ()=>{
        window.location.assign('#/admin/support_messages')
    }
    componentDidMount = ()=>{
        this.load_support_message_data()
    }
    close_support_message = ()=>{
        window.custom_ajax({
            params:{
                func:"close_support_message",
                support_message_id:this.state.support_message_id
            }
        })
        .then(r=>{
            alert('done')
            this.load_support_message_data()
        })
        
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
                <div className="box" id="data_container" style={{direction:"rtl",padding:"10px",paddingTop:'5px'}}>
                    <img src={envelope_white} alt="info circle svg white"/>
                    <span className="text-white px-1">موضوع :</span>
                    <span className="text-white">{this.state.subject}</span>
                </div>
                
                <div className="row mt-4" style={{direction:'rtl',textAlign:'right'}}>
                    <div className="col px-5">
                        <h4 className="text-light">
                            متن درخواست:
                        </h4>
                    </div>
                </div>
                <div className="box" id="content_container">{this.state.content}</div>
                <div className="mark_as_done_box" style={{display:this.state.support_message_status==="open"?"block":"none"}}>
                    <h1 dir="rtl">تغییر وضعیت این گزارش به رسیدگی شده</h1>
                    <input className="form-control bg-light border-info dir_rtl" style={{textAlign:"right"}} type="text" placeholder="یادداشتی بنویسید ..."></input>
                    <button className="btn btn-success mt-2 text-white" onClick={this.close_support_message}>تغییر وضعیت</button>
                </div>
                <div className="mark_as_done_box" style={{display:this.state.support_message_status==="closed"?"block":"none"}}>
                    <h1 className='absolute_center text-white'>به این گزارش در گذشته رسیدگی شده است</h1>
                </div>
                <button className="btn btn-info mb-5" id="back_button" onClick={this.get_back_to_admin_page}>بازگشت</button>
  
                </div>
        )
    }
}

export default SupportMessageShowPage;