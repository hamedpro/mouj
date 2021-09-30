import { Component } from "react";
import "./styles.css"
class Charts extends Component{
    load_current_plan_data = ()=>{

    }
    render(){
        return (
        <>
            <div className="custom-section" style={{background:"deepskyblue"}}>
                <div className="row justify-content-center d-flex mt-4">
                    <div className="col-4">
                        <div className="custom-section-image"></div>
                    </div>
                </div>
                <div className="row justify-content-center d-flex mt-4">
                    <div className="col-9 mb-1">
                        <h3 className=" rtl-center" style={{color:"#0000bb"}}>گزارش فعالیت های تیم موج</h3>
                    </div>
                </div>
                
                <div className="row justify-content-center d-flex mb-3">
                    <div className="col-10">
                        <h6 className="text-primary" style={{textAlign:"center",direction:"rtl"}}>در این بخش میتوانید به صورت شفاف فعالیت های ما را مشاهده بفرمایید !</h6>
                    </div>
                </div>
            </div>
            

            <div className="row d-flex justify-content-center">
                <hr className="bg-light w-75"/>
            </div>


            <div className="row currentProjectBoxTitle">
                <h1 className="text-info">پروژه جاری :</h1>
            </div>
            <div className="lastDoneWork mb-4">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-tsunami" viewBox="0 0 16 16">
                        <path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z"/>
                    </svg>

                </div>
                <h2 className="text-light title" id="title">در حال بارگزاری ...</h2>
                <div className="my_container">
                    <label id="progressLabel">در حال بارگزاری ...</label>
                    <div className="progress" id="progress">
                        <div className="progressbar bg-success" id="progressbar"></div>
                    </div>
                </div>
                
                
                <div className="items" id="items">
                
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <hr className="bg-light w-75"/>
            </div>
            <div className="row timelineBoxesTitle mb-3">
                <h1 className="text-info">لیست تمام فعالیت ها :</h1>
            </div>
            <div id="timelineBoxesContainer"></div>
            
            <div id="users_section">
            <div className="title">users</div>
            <span className='users_count_badge'>3400+</span>

            <div className="users">
                <div className="user"></div>
                <div className="user"></div>
                <div className="user"></div>
                <div className="user"></div>
            </div>

            <a className="other_users">+23434 users</a>
            </div>
        
        </>
    
        )
    }
}

export default Charts;