import { Component } from "react";
import "./styles.css"
class SelectPlanPage extends Component{
    render(){
        return(
            <div>
                <div className="row justify-content-center d-flex mt-3">
                    <div className="col-6">
                        <h1 className="text-light rtl-center">انتخاب طرح مورد نظر برای پرداخت</h1>
                    </div>
                </div>  
                <div className="row justify-content-center d-flex mt-1">
                    <div className="col-10">
                        <h5 className="text-secondary rtl-center">در بین طرح های فعال فعلی که در بخش پایین متمایز شده اند بر روی طرح مورد نظر خود کلیک بفرمایید</h5>
                    </div>
                </div>  
                
                <div className="row d-flex justify-content-center mt-1">
                    <hr className="bg-light w-75"/>
                </div>
                <div id="data_container">

                </div>
            </div>
        )
    }
}
export default SelectPlanPage;