import { Component } from "react";
import "./styles.css"
//todo => select plan box and 1% for group checkbox
class NewTransaction extends Component{
    redirect_to_payment_gateway = () =>{
        if(! window.confirm('آیا صحت اطلاعات را تایید می کنید؟')) return;
        //redirect to payment gateway =>
        let amount = Number(document.getElementById('amount').value);
        let username = document.getElementById('username').value;
        let category = document.getElementById('category').value;
        let info = "empty";
        var data = {
            amount,
            username,
            category,
            info,
            plan_id:2
        };
        window.localStorage.setItem('payment_data',JSON.stringify(data))
        window.location.assign('#/payment-gateway')
    }
    render(){
        return (
            <div id="new" className="content-container">
            <div className="row justify-content-center align-items-center my-4">
                <div className="col-8 ">
                    <h1 className="text-light title" dir='rtl'>شما هم با شرکت در این طرح مسلمانی را خوشحال کنید !</h1>
                </div>
                
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-9 d-grid gap-2" style={{direction:"rtl"}}>
                    <label htmlFor="username" className="text-light">نام کاربری :</label>
                    <input type="text" id="username" className="form-control border-0"/>
                    <div className="tips_container">
                       {/*  <script>
                            componise.renderComponent({
                                componentName:"tip",
                                iconSrc:'../common/bootstrap-icons/lightbulb-white.svg',
                                slot:'اگر کاربر سایت نیستید یا نام خود را به فارسی بنویسید یا برای ثبت نام فوق سریع <a href="#/register">اینجا</a> کلیک کنید.'
                            })
                        </script> */}

                    </div>
        
                    <label htmlFor="amount" className="text-light">مبلغ به ریال :</label>
                    <input type="number" id="amount" className="form-control border-0" placeholder="مثلا 20000" />
                    <label htmlFor="category" className="text-light">نوع کمک :</label>
                    <select id="category" className="form-select border-0">
                    
                    <option value="mouj">شرکت در طرح موج</option>
                        <option value="anese">کمک به همین موسسه</option>
                    </select>
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
                    {/* <script>
                        componise.renderComponent({
                            componentName:"tip",
                            iconSrc:'../common/bootstrap-icons/lightbulb-white.svg',
                            slot:'ما آسان ترین نوع ثبت نام را برای این سایت انتخاب کرده ایم، تنها با انتخاب نام کاربری عضو شوید! <a href="#/register">اطلاعات بیشتر</a>'
                        })
                    </script> */}
                   
                </div>
            </div>
        
        </div>
        )
    }
}
export default NewTransaction;