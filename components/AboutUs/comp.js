import { Component } from "react";

export default class AboutUs extends Component{
    render(){
        return (
            <div id="support" className="content-container">
                <div className="row justify-content-center align-items-center mt-3">
                    <div className="col-6">
                        <h1 className="text-primary" style={{direction:'rtl',textAlign:"center"}}>بخش درباره ما</h1>
                    </div>
                </div>
                
                <div className=" mt-2 row justify-content-center align-items-center">
                    <div className="col-10">
                        <h4 className="text-secondary" style={{direction:'rtl',textAlign:"center"}}>درباره ما و فعالیت هایمان بیشتر بدانید</h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-9 ">
                        <hr className="bg-light" />
                </div>
            </div>
            </div>
        )
    }
}