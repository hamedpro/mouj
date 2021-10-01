import { Component } from "react";
import "./css.css"
export default class CustomFooter extends Component{
    render(){
        return(
            <div className="custom_footer pb-3 pt-2">
                <div className="social-media-options p-2">
                    <div className="row dir_rtl">
                        <h5 className="text-white">با ما همراه باشید</h5>
                   
                    </div>
                    <div className=" dir_rtl row d-flex flex-column text-light">
                        <a className="text-light px-4" href="instagram.com/mouj.project">حساب اینستاگرام</a>
                        <a className="text-light px-4" href="github.com/hamedpro/mouj">مخزن گیت هاب پروژه</a>
                    </div>
                </div>
    
                <div className="navigate-options p-2">
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
    
                <div className='row d-flex justify-content-center mt-5'>
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