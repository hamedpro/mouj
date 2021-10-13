import React, { Component } from "react";
import "./styles.css"
import {custom_ajax} from "../../api_client/custom_ajax"
import light_bulb_white from "../../common/bootstrap-icons/lightbulb-white.svg"
import Plan from "./Plan/comp"
class NewTransaction extends Component{
    constructor(){
        super()
        this.state = {
            plans:[],
            selected_plan_id : null
        }
    }
    load_plans = ()=>{
        custom_ajax({
            params:{
                func:"get_plans"
            }
        })
        .then(plans=>{
            var edited_plans = plans.filter(plan=>plan.status === "open").map(plan=>{
                return {...plan,props_list:[]}
            })
            this.setState({
                plans:edited_plans
            })
        })
    }
    componentDidMount(){
        this.load_plans()
    }
    redirect_to_payment_gateway = () =>{
        let username = document.getElementById('username').value;
        custom_ajax({
            params:{
                func:"user_exists",
                username
            }
        })
        .then(ajax_data=>{
            if(! window.confirm('آیا صحت اطلاعات را تایید می کنید؟')) return;
            if(!ajax_data.user_exists){
                let p = window.confirm('نام کاربری وارد شده در بین اعضای سایت یافت نشد ایا تمایل دارید بدون عضو شدن ادامه دهید ؟')
                if(!p){
                    return
                }
            }
            if(typeof this.state.selected_plan_id !== "number"){
                alert("لطفا طرح مورد نظر خود را از بین طرح های موجود انتخاب بفرمایید")
                return false
            }
            
            //redirect to payment gateway =>
            let amount = Number(document.getElementById('amount').value);
            
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
        })
        
    }
    select_plan = (plan_id)=>{
        this.setState({
            selected_plan_id : Number(plan_id)
        },()=>{
            console.log('plan selected successfuly, plan id: '+plan_id)
        })
    }
    render(){
        return (
        <>
        <div className="row d-flex justify-content-center align-items-center mt-4">
            <div className="col-8 ">
                <h3 className="text-light title" dir='rtl'>تراکنش جدید</h3>
            </div>
            
        </div>
        <div className="mt-2 row d-flex justify-content-center">
            <div className='col-9'>
                <h6 className="text-secondary dir_rtl" style={{textAlign:"center"}}>با چند کلیک به جمع خیرین طرح موج بپیوندید</h6>
            </div>
        </div>
        <hr className="bg-light" style={{position:"relative",marginLeft:"auto",marginRight:"auto",width:"80%"}} />
        <div className="row justify-content-center align-items-center">
            <div className="col-9 d-grid gap-2" style={{direction:"rtl"}}>
                <label htmlFor="username" className="text-light">نام کاربری :</label>
                <input type="text" id="username" className="form-control border-0"/>
                
                </div>
        </div> 
        <div className='mt-4 row justify-content-center align-items-center'>
            <div className='col-8 d-flex justify-content-center'>
                <b className='text-white dir_rtl' style={{textAlign:"center"}}>انتخاب طرح مورد نظر :</b>
            </div>
        </div>
        <div className='plans_container'>
            {this.state.plans.map(plan=>{
                return(
                    <Plan 
                        title={plan.title} 
                        info={plan.description} 
                        props_list={plan.props_list} 
                        button_onclick_handler={()=>this.select_plan(plan.id)}
                        key={plan.id}
                        />
                )
            })}
            
            <a href='#/plans'>مشاهده همه طرح ها</a>
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
        <div className="row justify-content-center align-items-center mb-2">
            <div className="col-9 tips_container">
                
                <div>
                    <img src={light_bulb_white} alt='tip svg icon'/>
                    <span className="text-light">ما آسان ترین نوع ثبت نام را برای این سایت انتخاب کرده ایم، تنها با انتخاب نام کاربری عضو شوید ! </span><a href="#/register">ثبت نام آسان</a>
                </div>
            </div>
        </div>
    </>
        )
    }
}
export default NewTransaction;