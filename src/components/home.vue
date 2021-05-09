<template>
    <div class='home content-container'>
    
    <homeOption
        title="شرکت سریع در طرح"
        info="با حداقل هزار تومان به جمع میلیونی ما بپیوندید !"
        link="#/new"
        image_src="../assets/bootstrap-icons/tornado-white.svg"
    ></homeOption>
    <hr>
    <homeOption
        title="تا به حال چه کرده ایم ؟"
        info="شما میتونید آمار های دقیق فعالیت ما تا این لحظه رو در این قسمت مشاهده کنید"
        link="#/charts"
        image_src="../assets/bootstrap-icons/pie-chart-white.svg"
    ></homeOption>
    <hr>
    <homeOption
        title="پشتیبانی"
        info="درخواست پشتیبانی جدیدی ثبت کنید تا پاسخگوی شما باشیم"
        link="#/support"
        image_src="../assets/bootstrap-icons/envelope-white.svg"
    ></homeOption>
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
