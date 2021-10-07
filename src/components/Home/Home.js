import "./styles.css"
import { Component } from "react"
import HomeOption from "./HomeOption/comp"
import tornado_white from "../../common/bootstrap-icons/tornado-white.svg"
import pie_chart_white from "../../common/bootstrap-icons/pie-chart-white.svg"
import envelope_white_svg from "../../common/bootstrap-icons/envelope-white.svg"
import award_white_svg from "../../common/bootstrap-icons/award-white.svg"
class Home extends Component{
    render = ()=>{
        return (
            <>
                <HomeOption title="شرکت سریع در طرح" title_href="#/new-transaction" icon_src={tornado_white} info="با حداقل هزار تومان به جمع میلیونی ما بپیوندید !" />
                <hr />
                <HomeOption title="تا به حال چه کرده ایم ؟" title_href='#/charts' icon_src={pie_chart_white} info='شما میتونید آمار های دقیق فعالیت ما تا این لحظه رو در این قسمت مشاهده کنید' />
                <hr />
                <HomeOption title="درخواست پشتیبانی" title_href="#/support-messages" info="درخواست پشتیبانی جدیدی ثبت کنید تا پاسخگوی شما باشیم" icon_src={envelope_white_svg} />                
                <hr />
                <HomeOption title="درباره ما" title_href="#/about-us" info="برای مشاهده اطلاعات بیشتری درباره ما و این موسسه کلیک کنید" icon_src={award_white_svg} />                
                <hr />

            </>
        )
    }
}

export default Home;