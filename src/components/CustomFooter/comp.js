import React, { Component } from "react";
import "./css.css"
import chevron_compact_right_white from "../../common/bootstrap-icons/chevron-compact-right-white.svg"
import {custom_ajax} from "../../api_client/custom_ajax"
export default class CustomFooter extends Component{
    constructor(){
        super()
        this.state = {
            //todo => this line below 
            //nav_bar_links : [{name:"home",href:'#/home'},{name:"support page",href:'#/support-messages'}]
            nav_bar_links : []
        }
    }
    update_nav_bar = ()=>{
        var items = []
            var splited_hash = window.location.hash.split("/")
            for(var i=0;i<splited_hash.length;i++){
                if(i !== 0){
                    var item = {}
                    item.name = splited_hash[i]
                    item.href = "#"
                    for(var ii =0;ii<i;ii++){
                        item.href+="/"+splited_hash[ii+1]
                    }
                    items.push(item)
                }
            }
            this.setState({
                nav_bar_links:items
            })
    }
    componentDidMount(){
        this.update_nav_bar()
        window.addEventListener('hashchange',this.update_nav_bar)
    }
    subscribe_to_sms = () =>{
        var username_input = document.getElementById('sms_subscribe_username_input')
        var phone_number_input = document.getElementById('sms_subscribe_phone_number_input')
        var username = username_input.value
        if(typeof username !== "string" || username === ""){
            alert("نام کاربری صحیح وارد کنید")
            return
        }
        var phone_number = phone_number_input.value
        if(typeof phone_number !== "string" || phone_number.length !== 11){
            alert('شماره موبایل صحیحی وارد کنید')
            return
        }

        custom_ajax({
            params:{
                func:"user_exists",
                username:username
            }
        }).then(data=>{
            if( !data.user_exists){
                alert('کاربری با نام کاربری وارد شده وجود نداشت')
                return
            }
                custom_ajax({
                    params:{
                        func : "subscribe_to_sms",
                        username,
                        phone_number
                    }
                })
                .then(()=>{
                    alert('با موفقیت ثبت شد')
                    username_input.value = ""
                    phone_number_input.value = ""
                },error =>{
                    alert('خطایی رخ داد بعدا دوباره امتحان کنید')
                })
            
        })
        
    }
    render(){
        return(
            <div className="custom_footer pb-3 mt-2">
                <div className="custom-nav-bar">
                    <a href="#/">
                        <div className="item">
                            <svg viewBox="0 0 16 16" className="bi bi-house person_icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                            </svg>
                        </div>
                    </a>
                    
                    {this.state.nav_bar_links.map(i=>{
                        return (
                            <React.Fragment key={i.href}>
                                <div className="seperator">
                                    <img alt="chevron compact right white" src={chevron_compact_right_white} />
                                </div>
                                <div className="item"><a href={i.href}>{i.name}</a></div>
                            </React.Fragment>
                            
                        )
                    })}
                    
                </div>
                
                    <div className="row d-flex justify-content-center my-1 mt-4">
                        <div className="col-9">
                            <h4 className="text-light" style={{textAlign:"center"}}>عضویت در خبرنامه پیامکی پروژه موج</h4>    
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-9">
                            <input id="sms_subscribe_username_input" placeholder="نام کاربری" className="form-control" style={{textAlign:"center",direction:"ltr"}}/>    
                        </div>
                        
                    </div>
                    <div className="row d-flex justify-content-center mt-1">
                        <div className="col-9">
                            <input id="sms_subscribe_phone_number_input" placeholder="09123456789" className="form-control" style={{textAlign:"center",direction:"ltr"}}/>    
                        </div>
                        
                    </div>
                    
                    
                    
                    <div className="row d-flex justify-content-center mt-2">
                        <div className="col-9">
                            <button onClick={this.subscribe_to_sms} className="btn btn-success w-100">عضویت</button>
                        </div>
                        
                    </div>
                    
               <div className="row mt-3">
                   <div className="col-6">
                        <div className="social-media-options p-2 px-1">
                        <div className="row dir_rtl">
                            <h5 className="text-white">با ما همراه باشید</h5>
                    
                        </div>
                        <div className=" dir_rtl row d-flex flex-column text-light">
                            <a className="text-light px-4" href="instagram.com/mouj.project">حساب اینستاگرام</a>
                            <a className="text-light px-4" href="github.com/hamedpro/mouj">مخزن گیت هاب پروژه</a>
                        </div>
                        </div>
                   </div>
                   <div className="col-6">
                        <div className="navigate-options p-2 px-2">
                            <div className="row dir_rtl">
                                <h5 className="text-white">دسترسی آسان</h5>
                        
                            </div>
                            <div className="dir_rtl row d-flex flex-column text-light">
                                <a className="text-light px-4" href="#/new-transaction">تراکنش جدید</a>
                                <a className="text-light px-4" href="#/support-messages">درخواست پشتیبانی جدید</a>
                           
                                <a className="text-light px-4" href="#/about-us">درباره ما</a>
                               
                            </div>
                        </div>
                   </div>
               </div>
                
    
                
    
                <div className='row d-flex justify-content-center mt-3'>
                    <div className="col-10 d-flex justify-content-center">
                        <div className="mouj-icon mx-1"></div>
                        <h2 className="my-0 text-light"><b>mouj</b> project</h2>
                    </div>
                </div>
                
                <div className='row d-flex justify-content-center mt-2'>
                    <div className="col-8 d-flex justify-content-center">
                        <span style={{textAlign:"center"}} className="text-white icon-note">developed with love in tehran with help of contributors</span>
                    </div>
                </div>

                
            </div>
        )
    }
}