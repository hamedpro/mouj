<template>
    <div id="charts" class="content-container">
    <div class="row" style="height:130px;">
        <div class="purple">
            <h2 class="text-light">30000 +</h2>
        </div>
    </div>
    <div class="row justify-content-center d-flex">
        <div class="col-8">
            <h3 class="text-info rtl-center">تا به حال جه کرده ایم ؟</h3>
        </div>
    </div>
    <div class="row justify-content-center d-flex">
        <div class="col-10">
            <h5 class="text-secondary rtl-center">آمار فعالیت ما را در لحظه مشاهده کنید و نظر بدهدید و بیسار و فلان</h5>
        </div>
    </div>
    <div class="row d-flex justify-content-around flex-wrap" style="height:400px;" id="info_buttons_container">
        <button class="btn btn-info">hamed</button>
        <button class="btn btn-info">hamed</button>
        <button class="btn btn-info">hamed</button>
        <button class="btn btn-info">hamed</button>
        <button class="btn btn-info">hamed</button>
    </div>
</div>
</template>

<script>
export default {
    name:'charts'
}
</script>

<style scoped>
#charts .purple{
    width: 49%;
    background-color: purple;
    height: 61px;
    transform: skew(342deg,0deg) translateX(-50%);
    position: absolute;
    border-radius: 10px;
    left: 50%;
    top: 38px;
    display:flex;
    align-items: center;
    justify-content: center;

}
#charts .purple *{
    transform:skew(10deg,0deg);
}
#charts .rtl-center{
    direction: rtl;
    text-align:center;
}
#charts button{
    height:30px;
    width:initial;
}
</style>