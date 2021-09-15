import { Component } from "react";
import {custom_ajax} from "../../api_client/custom_ajax"
export default class PaymentGateway extends Component{
    pay_button_onclick = ()=>{
        var payment_data = JSON.parse(window.localStorage.getItem('payment_data'))
        custom_ajax({
            params:{...payment_data,func:"new_transaction"}
        }).then(()=>{
            window.location.assign('#/payment-result')
        },()=>{
            //saving new transaction was not successful
        })
    }
    render = ()=>{
        return (
            <button className="btn btn-success" id="pay_button" onClick={this.pay_button_onclick}>pay</button>
        )
    }
}
