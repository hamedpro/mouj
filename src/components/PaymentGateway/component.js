import { Component } from "react";
import Link from "react-router-dom"
class PaymentGateway extends Component{
    render = ()=>{
        return (
            <button class="btn btn-success" id="pay_button"><a to='#/paymentResult'>pay</a></button>
        )
    }
}
export default PaymentGateway;