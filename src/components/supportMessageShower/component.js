import { Component } from "react";

class SupportMessageShowPage extends Component{
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
       
    </div>
    
    <div className="row mt-4" style={{direction:'rtl',textAlign:'right'}}>
        <div className="col px-5">
            <h4 className="text-light">
                متن درخواست:
            </h4>
        </div>
    </div>
    <div className="box" id="content_container"></div>
    
    <button className="btn btn-success" id="submit_button">به این گزارش رسیدگی شد</button>
    <button className="btn btn-secondary mb-5" id="back_button">بازگشت</button>
       


            </div>
        )
    }
}

export default SupportMessageShowPage;