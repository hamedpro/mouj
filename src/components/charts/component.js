import { Component } from "react";
import "./styles.css"
import chevron_left_white from "../../common/bootstrap-icons/chevron-left-white.svg"
import TimelineBox from "./TimelineBox/TimelineBox";
class Charts extends Component{
    load_current_plan_data = ()=>{

    }
    scroll_to_current_plan_section = ()=>{
        //todo 
    }
    render(){
        return (
        <>
            <div className="custom-section" style={{background:"indigo"}}>
                <div className="row justify-content-center d-flex mt-4">
                    <div className="col-4">
                        <div className="custom-section-image"></div>
                    </div>
                </div>
                <div className="row justify-content-center d-flex mt-4">
                    <div className="col-9 mb-1">
                        <h2 className=" rtl-center text-light">گزارش فعالیت های تیم موج</h2>
                    </div>
                </div>
                
                <div className="row justify-content-center d-flex mb-2 mt-1">
                    <div className="col-10">
                        <h6 className="text-primary text-info" style={{textAlign:"center",direction:"rtl"}}>مثلا این یه متن تستی و بلند است که وقتی اینجا قرار می گیرد ۳ قسمت می شود و می تواند توضیحی درباره این پروژه باشد </h6>
                    </div>
                </div>
                
                <div className="row justify-content-center d-flex mb-2">
                    <div className="col-10">
                        <h6 className="text-primary text-info" style={{textAlign:"center",direction:"rtl"}}>مثلا این یه متن تستی و بلند است که وقتی اینجا قرار می گیرد ۳ قسمت می شود و می تواند توضیحی درباره این پروژه باشد </h6>
                    </div>
                </div>

                <div className="row d-flex justify-content-center dir_rtl mt-3 mb-1">
                    <div className="col-6 text-light d-flex justify-content-center"><p onClick={this.scroll_to_current_plan_section}>پروژه جاری</p><span className="mx-1"><img alt="chevron left white" src={chevron_left_white}/></span></div>
                    
                </div>
            </div>
            <div className="custom-section" style={{background:"deepskyblue"}}>
            <div className="row currentProjectBoxTitle mt-3 d-flex justify-content-center">
                <div className="col-6">
                    <h2 className="text-light bg-primary rounded py-1" style={{textAlign:"center"}}>طرح فعلی</h2>
                </div>
            </div>
            <div className="lastDoneWork mb-4">
                <div className="row pt-2 px-2">         
                    <div className="col-8 mx-0">
                        <h2 className="text-light mx-0 dir_rtl">طرح شماره ۲</h2>
                        <p className="text-light dir_rtl">به نامه نامه نامه نامه نامه نام خداوند بخشنده مهربان</p>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="main_icon"></div>
                    </div>
                </div>
                <div id="items" className="row mt-2">
                    <div className="col d-flex flex-column">
                        <div className="item">
                            <div className="icon"></div>
                            <div className="content">به نام خدا</div>
                        </div>
                        <div className="item">به نام خدا</div>
                        <div className="item">به نام خدا</div>
                    </div>
                    <div className="col d-flex flex-column">
                        <div className="item">به نام خدا</div>
                        <div className="item">به نام خدا</div>
                        <div className="item">به نام خدا</div>
                        
                        <div className="item">به نام خدا</div>
                    </div>
                </div>

                <div className="row dir_rtl px-2 mt-3">
                    <h5 className="text-light">میزان پیشرفت :‌</h5>
                </div>
                <div className='row px-4 pt-2 pb-3'>
                    <div className="progress">
                        <div className="progressbar bg-success"></div>
                    </div>
                </div>
                
                
            </div>
            </div>
            
            <div className="custom-section" style={{background:"darkblue"}}>
                <div className="row timelineBoxesTitle mb-3 dir_rtl px-3 pt-2">
                    <h4 className="text-info">لیست تمام فعالیت ها :</h4>
                </div>
                <TimelineBox
                 items={[{title:"hamed",content:"content"},{title:"hamed",content:"content"}]} 
                 title="morning"
                />
                
                <TimelineBox
                 items={[{title:"hamed",content:"content"},{title:"hamed",content:"content"}]} 
                 title="morning"
                />
                <TimelineBox
                 items={[{title:"hamed",content:"content"},{title:"hamed",content:"content"}]} 
                 title="morning"
                />
                <TimelineBox
                 items={[{title:"hamed",content:"content"},{title:"hamed",content:"content"}]} 
                 title="morning"
                />
                <TimelineBox
                 items={[{title:"hamed",content:"content"},{title:"hamed",content:"content"}]} 
                 title="morning"
                />

            </div>
            
            
            <div id="users_section" className="custom-section" style={{background:"lightgreen"}}>
                <div className="row dir_rtl p-2">
                    <h5 className="text-dark ">اعضا و خیرین پروژه موج</h5>
                    {/* <span className='badge bg-primary'>3400+</span> */}
                </div>
                <div className="users justify-content-center px-1">
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                    <div className="user"></div>
                </div>
                <div className="row dir_rtl px-3 pt-1 pb-2 " style={{textAlign:"right"}}>
                    <a href="#/">+2000 <span>کاربر دیگر</span></a>
                </div>
                
            </div>
        
        </>
    
        )
    }
}

export default Charts;