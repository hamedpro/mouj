import "./styles.css"
import "../../common/common.css"
import { Component } from "react"
import SupportOption from "../supportOption/SupportOption"
import lightning_svg from "../../common/bootstrap-icons/lightning-fill-white.svg"
import mailbox_svg from "../../common/bootstrap-icons/mailbox2-white.svg"
import link_svg from "../../common/bootstrap-icons/link-45deg-white.svg"
class Support extends Component{
    render(){
        return (
        <div id="support" className="content-container">
        <div className="row justify-content-center align-items-center mt-3">
            <div className="col-6">
                <h1 className="text-primary" style={{direction:'rtl',textAlign:"center"}}>به بخش پشتیبانی ما خوش آمدید</h1>
            </div>
        </div>
        
        <div className="row justify-content-center align-items-center">
            <div className="col-10">
                <h4 className="text-secondary" style={{direction:'rtl',textAlign:"center"}}>ما منتظر درخواست های پشتیبانی شما هستیم!</h4>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-9 ">
                <hr className="bg-light" />
            </div>
        </div>

        <div className="container">
            <div className="row support-option-header mb-2" dir='rtl'>
                <div className="align-items-center col-2 d-flex justify-content-center"><img alt="empty" src={link_svg} /></div>
                <div className="col p-0"><h1 className='text-light p-2'>اطلاعات خود موسسه</h1></div>
            </div>
            
            <div className="row px-2">
                <div className="col-4">
                    <h3 className="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div className="col d-flex justify-content-start align-items-center">
                    <h3 className="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <div className="row px-2">
                <div className="col-4">
                    <h3 className="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div className="col d-flex justify-content-start align-items-center">
                    <h3 className="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <div className="row px-2">
                <div className="col-4">
                    <h3 className="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div className="col d-flex justify-content-start align-items-center">
                    <h3 className="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <hr />

            <div className="row support-option-header mb-2" dir='rtl'>
                <div className="align-items-center col-2 d-flex justify-content-center"><img alt="empty" src={mailbox_svg   } /></div>
                <div className="col p-0"><h1 className='text-light p-2'>ثبت درخواست پشتیبانی جدید</h1></div>
            </div>
            <SupportOption icon_src={lightning_svg}>
                <a className="text-info" href="../supportForm"><h5>درخواست پشتیبانی سریع</h5></a>
            </SupportOption>
            
        </div>
        
    </div>   
    )
    }
}

export default Support;