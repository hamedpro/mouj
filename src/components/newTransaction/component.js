import React, { Component } from "react";
import "./styles.css"
import {custom_ajax} from "../../api_client/custom_ajax"
import light_bulb_white from "../../common/bootstrap-icons/lightbulb-white.svg"
import PlansContainer from "./PlansContainer/comp";
class NewTransaction extends Component{
    constructor(){
        super()
        this.state = {
            plans:[],
            selected_plan_id : null
        }
    }
    componentDidMount(){
        custom_ajax({
            params:{
                func:"get_plans"
            }
        })
        .then(plans=>{
            this.setState({
                plans
            })
        })
    }
    redirect_to_payment_gateway = () =>{
        if(typeof this.state.selected_plan_id !== "number"){
            alert("لطفا طرح مورد نظر خود را از بین طرح های موجود انتخاب بفرمایید")
            return false
        }
        if(! window.confirm('آیا صحت اطلاعات را تایید می کنید؟')) return;
        //redirect to payment gateway =>
        let amount = Number(document.getElementById('amount').value);
        let username = document.getElementById('username').value;
        let one_percent_for_team = document.getElementById('one_percent_for_team').checked;
        let info = "empty";
        var data = {
            amount,
            username,
            one_percent_for_team,
            info,
            plan_id:this.state.selected_plan_id
        };
        window.localStorage.setItem('payment_data',JSON.stringify(data))
        window.location.assign('#/payment-gateway')
    }
    select_plan = (plan_id)=>{
        this.setState({
            selected_plan_id : plan_id
        },()=>{
            console.log('plan selected successfuly, plan id: '+plan_id)
        })
    }
    render(){
        return (
            <div id="new" className="content-container" style={{direction:"rtl"}}>
            <div className="row justify-content-center align-items-center my-4">
                <div className="col-8 ">
                    <h1 className="text-light title" dir='rtl'>شما هم با شرکت در این طرح مسلمانی را خوشحال کنید !</h1>
                </div>
                
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-9 d-grid gap-2" style={{direction:"rtl"}}>
                    <label htmlFor="username" className="text-light">نام کاربری :</label>
                    <input type="text" id="username" className="form-control border-0"/>
                    
                   </div>
            </div> 
            <div className='mt-4 row justify-content-center align-items-center'>
                <div className='col-6'>
                    <b className='text-white' style={{textAlign:"center"}}>انتخاب طرح مورد نظر :</b>
                </div>
            </div>
            <div className='scroll-view mb-3'>
            <PlansContainer>
                {this.state.plans.map(plan=>{
                    return(
                        <React.Fragment key={plan.id}>
                        <div className="plan" >
                            {"plan : "+plan.id}
                            <button onClick={()=>this.select_plan(Number(plan.id))} >select this plan</button>
                        </div>
                       
                        <div className='seperator' />
                        </React.Fragment>
                    )
                })}
                <div className='more'>
                    <div className='circle'>...</div>
                </div>
            </PlansContainer>
                    
                    
            </div>
            
            <div className="row justify-content-center align-items-center">
                <div className="col-9 d-grid gap-2" style={{direction:"rtl"}}>
                    <label htmlFor="amount" className="text-light">مبلغ به ریال :</label>
                    <input type="number" id="amount" className="form-control border-0" placeholder="مثلا 20000" />
                    <div className="my-1">
                        <span className="text-light">یک درصد از مبلغ فوق برای هزینه ها و ... به تیم موج تعلق بگیرد</span>
                        <input className="mx-2" type="checkbox" id="one_percent_for_team" />
                    </div>
                    
                    <button className="btn btn-success" onClick={this.redirect_to_payment_gateway}>ارسال</button>    
                    
                </div>
            </div> 
                            
                
            <div className="row justify-content-center">
                <div className="col-9">
                    <hr className="bg-light" />
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-9 tips_container">
                    
                   <div>
                       <img src={light_bulb_white} alt='tip svg icon'/>
                       <span className="text-light">ما آسان ترین نوع ثبت نام را برای این سایت انتخاب کرده ایم، تنها با انتخاب نام کاربری عضو شوید ! </span><a href="#/register">اطلاعات بیشتر</a>
                   </div>
                </div>
            </div>
        
        </div>
        )
    }
}
export default NewTransaction;