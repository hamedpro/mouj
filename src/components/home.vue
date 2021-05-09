<template>
    <div class='home content-container'>
    
    <home-option
        title="شرکت سریع در طرح"
        info="با حداقل هزار تومان به جمع میلیونی ما بپیوندید !"
        link="#/new"
        image_src="./front-end/archive/bootstrap-icons/tornado-white.svg"
    ></home-option>
    <hr>
    <home-option
        title="تا به حال چه کرده ایم ؟"
        info="شما میتونید آمار های دقیق فعالیت ما تا این لحظه رو در این قسمت مشاهده کنید"
        link="#/charts"
        image_src="./front-end/archive/bootstrap-icons/pie-chart-white.svg"
    ></home-option>
    <hr>
    <home-option
        title="پشتیبانی"
        info="درخواست پشتیبانی جدیدی ثبت کنید تا پاسخگوی شما باشیم"
        link="#/support"
        image_src="./front-end/archive/bootstrap-icons/envelope-white.svg"
    ></home-option>
    <hr>
    

    
</div>
</template>

<script>
import homeOption from './home-option.vue'
export default {
    name:"home",
    components:{
        homeOption
    }
}
</script>
