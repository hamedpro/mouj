import { Component } from "react";
import "./styles.css"
import chevron_left_white from "../../common/bootstrap-icons/chevron-left-white.svg"
import TimelineBox from "./TimelineBox/TimelineBox";
import {custom_ajax} from "../../api_client/custom_ajax"
import CurrentPlan from "./CurrentPlan/comp";
class Charts extends Component{
    constructor(props){
        super(props)
        this.state = {
            plans : [],
            users : []
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
        custom_ajax({
            params:{
                func:"get_users"
            }
        })
        .then(users=>{
            this.setState({
                users
            })
        })
    }
    render_users_icons(){
        var elements = []
        if(this.state.users.length > 12){
            for(let i=0;i<12;i++){
                elements.push(<div className="user" key={i}/>)
            }
            return elements
        }else{
            for(let i=0;i<this.state.users.length;i++){
                elements.push(<div className="user" key={i} />)
            }
            return elements
        }
        
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
                    <div className="col-6 text-light d-flex justify-content-center"><p onClick={()=>document.getElementById("current_plans_section").scrollIntoView({behavior:"smooth"})}>پروژه جاری</p><span className="mx-1"><img alt="chevron left white" src={chevron_left_white}/></span></div>
                    
                </div>
            </div>
            <div className="custom-section" style={{background:"deepskyblue"}} id='current_plans_section'>
            <div className="row currentProjectBoxTitle mt-3 d-flex justify-content-center">
                <div className="col-9">
                    <h2 className="text-light bg-primary rounded py-1" style={{textAlign:"center"}}>طرح های باز فعلی</h2>
                </div>
            </div>
            
            {this.state.plans.filter(plan=>plan.status === "open").map(plan=>{
                return(
                    <CurrentPlan plan_id={plan.id} key={plan.id} />
                )
            })}
            </div>
            
            <div className="custom-section" style={{background:"darkblue"}}>
                <div className="row timelineBoxesTitle mb-3 dir_rtl px-3 pt-3">
                    <h4 className="text-info">لیست تمام طرح ها تا این لحظه :</h4>
                </div>
                {this.state.plans.map(plan=>{
                    return(
                        <TimelineBox
                        key={plan.id}
                        title="no title"
                        items={[{title:plan.title,content:plan.description,url:"#/plans/"+Number(plan.id)}]}
                        />
                    )
                })}

            </div>
            
            
            <div id="users_section" className="custom-section" style={{background:"lightgreen"}}>
                <div className="row dir_rtl p-2">
                    <h5 className="text-dark ">اعضا و خیرین پروژه موج</h5>
                </div>
                <div className="users px-1">
                    {this.render_users_icons()}
                    
                </div>
                <div className="row dir_rtl px-2 pt-1 pb-2 " style={{textAlign:"right"}}>
                    <a href="#/users">{this.state.users.length > 12 ? "+"+(this.state.users.length-12)+" کاربر دیگر":"+ صفر کاربر دیگر"}<span>کاربر دیگر</span></a>
                </div>
                
            </div>
        
        </>
    
        )
    }
}

export default Charts;