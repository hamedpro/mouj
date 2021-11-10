import { Component } from "react";
import IntroBox from "../IntroBox/component"
import "./styles.css"
export default class SupportMessages extends Component{
    render(){
        return(
            <div id='support_messages_comp'>
                <IntroBox title='بخش پشتیبانی سایت' info="برای ارتباط  با بخش پشتیبانی یک درخواست پشتیبانی جدید باز کنید" />
                <div className="row d-flex justify-content-center dir_rtl mt-2">
                    <div className="col-9 d-flex flex-row dir_rtl">
                        <button onClick={()=>{window.location.assign('#/support-messages/new')}} id="new_support_message" className="btn btn-info">درخواست پشتیبانی جدید</button>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-2 dir_rtl">
                    <div className="col-9 d-flex dir_rtl">
                        <button onClick={()=>{window.location.assign("#/support-messages/check_status")}} id="check_status_of_support_message" className="btn btn-info">پیگیری وضعیت درخواست قبلی</button>
                    </div>
                </div>
            </div>
        )
    }
}