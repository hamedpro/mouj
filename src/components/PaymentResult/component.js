import { Component } from "react";
import { custom_ajax } from "../../api_client/custom_ajax";
export class PaymentResult extends Component{
    constructor(){
        super();
        this.state = {
            username:"loading",
            plan_id:"loading",
            amount:"loading",
            category:"loading",
            info:"loading"
        }
    }
    componentDidMount = ()=>{
        var payment_data = JSON.parse(window.localStorage.getItem('payment_data'));
        this.setState(payment_data,()=>{
            window.localStorage.removeItem('payment_data')
        })
    }
    render = ()=>{
        return (
            <div id="payment-success" className="content-container">
                <div className="row justify-content-center d-flex mt-3">
                    <div className="col-8">
                    <h1 className="text-success" dir="rtl" style={{textAlign:"center"}}>پرداخت شما با موفقیت انجام شد</h1> 
                    </div>
                </div>
                <div className="row justify-content-center d-flex mt-1">
                    <div className="col-10">
                        <h5 className="text-secondary" dir="rtl" style={{textAlign:"center"}}>اطلاعات پرداخت شما به شرح زیر است :</h5>
                    </div>
                </div>
                <div className="row mx-2 mt-4" dir="rtl">
                    <div className="col-4">
                        <h4 className="text-secondary" dir="rtl">نام کاربری:</h4>
                    </div>
                    <div className="col">
                        <h2 className="text-warning" dir="rtl" id="username">{this.state.username}</h2>
                    </div>
                </div>
                <div className="row mx-2" dir="rtl">
                    <div className="col-4">
                        <h4 className="text-secondary" dir="rtl">مبلغ:</h4>
                    </div>
                    <div className="col">
                        <h2 className="text-warning" dir="rtl" id="amount">{this.state.amount}</h2>
                    </div>
                </div>
                <div className="row mx-2" dir="rtl">
                    <div className="col-4">
                        <h4 className="text-secondary" dir="rtl">شماره طرح: </h4>
                    </div>
                    <div className="col">
                        <h2 className="text-warning" dir="rtl" id="info">{this.state.plan_id}</h2>
                    </div>
                </div>
                <div className="row mx-2" dir="rtl">
                    <div className="col-4">
                        <h4 className="text-secondary" dir="rtl">برای:</h4>
                    </div>
                    <div className="col">
                        <h2 className="text-warning" dir="rtl" id="category">{this.state.category}</h2>
                    </div>
                </div>
                <div className="row m-3" dir="rtl"></div>
                    <div className="col-4 d-grid p-1">
                        <a className="btn btn-outline-danger btn-sm" href="#/support">گزارش خطا</a>
                    </div>
                    <div className="col d-grid p-1">
                        <a className="btn btn-success" href="#/home">بازگشت به صفحه اصلی</a>
                </div>
            </div>
        )
    }
}