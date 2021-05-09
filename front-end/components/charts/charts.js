var template = 
`
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
`;
Vue.component('charts',{
    template,
    created:function(){
        $("#charts").ready(()=>{
        
        })
    },
    methods:{
        
        
    }
})
