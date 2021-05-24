<template>
    <div id="support-form" class="content-container">
    <div class="row justify-content-center d-flex">
        <div class="col-9">
            <div class="row mt-4">
                <div class="col">
                    <h1 class="text-primary">بخش ثبت مسئله جدید</h1>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col">
                    <h5 class="text-secondary">پیام شما را در اسرع وقت پاسخگو خواهیم بود .</h5>
                </div>
            </div>
            <div class="row">
                <div class="col" dir="rtl">
                    <label for="username" class="text-light mb-1">نام کاربری :</label>
                    <input type="text" class="form-control" id="username">
                </div>
            </div>
            <div class="row">
                <div class="col" dir="rtl">
                    <label for="subject" class="text-light mb-1">موضوع :</label>
                    <input type="text" class="form-control" id="subject">
                </div>
            </div>
            <div class="row">
                <div class="col" dir="rtl">
                    <label for="content" class="text-light mb-1">متن درخواست</label>
                    <input type="text" class="form-control" id="content">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col d-grid gap-2">
                    <button class="btn btn-success" @click="submit_data">ثبت اطلاعات</button>
                </div>
            </div>
            <hr class="bg-light">
            <div class="row tips_container">
                <tip>درخواست پشتیبانی شما ان شاء الله به زودی بررسی خواهد شد</tip>
            </div>
        </div>
    </div>
    

   
   

</div>
</template>

<script>
import tip from "./tip.vue";
export default {
    name:'supportForm',
    components:{
        tip
    },
    methods:{
        submit_data:function(){
            if(!confirm('آیا صحت اطلاعات را تایید می کنید؟')) return
            let data_object = {
                function_name : 'new_issue',
                username:document.getElementById('username').value,
                subject:document.getElementById('subject').value,
                content:document.getElementById('content').value
            } 
            let url="http://localhost:80/git/vahed-app/src/back-end/actions.php";
            fetch(url,{
                method:"POST",
                body:JSON.stringify(data_object)
            }).then(res=>res.text())
            .then(function(response){
                console.log(response)
                if(response == "true"){
                    alert('با موفقیت انجام شد.')
                    window.location.assign('#/support');
                }else{
                    alert('مشکلی وجود داشت،دوباره امتحان کنید')
                }
            })

        }
    }
}
</script>

<style scoped>
h1,
input,
h5{
    direction:rtl;
}
h1,
h5{
    text-align:center;
}
</style>