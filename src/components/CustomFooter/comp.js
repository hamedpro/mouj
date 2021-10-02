import { Component } from "react";
import "./css.css"
import chevron_compact_right_white from "../../common/bootstrap-icons/chevron-compact-right-white.svg"
export default class CustomFooter extends Component{
    render(){
        return(
            <div className="custom_footer pb-3 mt-4">
                <div className="custom-nav-bar">
                    <div className="item">
                        <svg viewBox="0 0 16 16" className="bi bi-house person_icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                        </svg>
                    </div>
                    <div className="seperator">
                        <img alt="chevron compact right white" src={chevron_compact_right_white} />
                    </div>
                    <div className="item"><a href="#/home">home</a></div>
                </div>
                
                    <div className="row d-flex justify-content-center my-1 mt-3">
                        <div className="col-9">
                            <h4 className="text-light" style={{textAlign:"center"}}>عضویت در خبرنامه پیامکی پروژه موج</h4>    
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-9">
                            <input placeholder="09123456789" className="form-control" style={{textAlign:"center",direction:"ltr"}}/>    
                        </div>
                        
                    </div>
                    
                    <div className="row d-flex justify-content-center mt-2">
                        <div className="col-9">
                            <button className="btn btn-success w-100">عضویت</button>
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
                                <a className="text-light px-4" href="#/support">درخواست پشتیبانی جدید</a>
                                <a className="text-light px-4" href="#/charts">صفحه گزارش ها</a>
                                <a className="text-light px-4" href="#/about-us">درباره ما</a>
                                <a className="text-light px-4" href="#terms-of-use">قوانین و شرایط استفاده</a>
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