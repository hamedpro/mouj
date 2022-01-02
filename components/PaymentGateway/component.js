import { Component } from "react";
import {custom_ajax} from "../../custom_ajax"
export default class PaymentGateway extends Component{
    pay_button_onclick = ()=>{
        var payment_data = JSON.parse(window.localStorage.getItem('payment_data'))
        custom_ajax({
            params:{...payment_data,func:"new_transaction"}
        }).then(()=>{
            window.location.assign('#/payment-result')
        },()=>{
            window.alert("saving new transaction to db was not successfuly : [error in custom ajax]")
        })
    }
    render(){
        return (
            <>
                <div className="d-flex row justify-content-center mt-4">
                    <div className="col-9">
                        <h3 className="text-light" style={{direction:'rtl',textAlign:"center"}}>شبیه ساز درگاه پرداخت اینترنتی</h3>
                    </div>
                </div>
                <div className="d-flex row justify-content-center">
                    <div className="col-9">
                        <h6 className="text-secondary" style={{direction:'rtl',textAlign:"center"}}>در این فاز تستی ما درگاه پرداخت واقعی نداریم و برای این منظور این صفحه فرایند پرداخت را برای شما شبیه سازی میکند</h6>
                    </div>
                </div>
                <hr className="w-75 mx-auto position-relative bg-light" />
                <div className="row d-flex justify-content-center mb-4">
                    <button className="btn btn-success w-75" id="pay_button" onClick={this.pay_button_onclick}>pay</button>
                </div>
                
            </>
            
        )
    }
}
