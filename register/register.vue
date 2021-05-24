<template>
    <div class="content-container" id="register">
    <div class="row mt-4 justify-content-center align-items-center">
        <div class="col-7 d-flex ">
            <h2 class="text-light" style="text-align:center;" dir="rtl">عضویت در سایت به سادگی چند کلیک !</h2>
        </div>
        
    </div>
    <div class="row justify-content-center d-flex" dir='rtl'>
        <div class="col-9">
            <h3 class="text-secondary" style="text-align:center;">تنها با انتخاب نام کاربری عضو سایت ما شده و از همه قابلیت های مخصوص کاربران استفاده کنید !</h3>
        </div>
        
    </div>
    <div class="row justify-content-center mt-3">
        <div class="col-9" style="direction:rtl;">
            <label for="username_input" class="text-light mb-2">نام کاربری دلخواه شما :</label>
            <input type="text" id="username_input" class="form-control" style="direction:ltr">
        </div>
    </div>
    <div class="row justify-content-center mb-2">
        <div class="col-9">
            <div class="tips_container mt-1">
                
                <tip v-if="username_is_taken"><span class="text-danger">کاربر دیگری این نام کاربری را انتخاب کرده است </span></tip>
                
            </div>
        </div>
    </div>
    <div class="row justify-content-center align-items-center">
        <div class="col-9 d-grid gap-2 mb-2">
            <button class="btn btn-success submit_button disabled" @click="submit">ثبت همین نام کاربری</button>
        </div>
    </div>
    <div class="row justify-content-center mt-1">
        <div class="col-9 tips_container">
            <tip>هر لحظه که سوالی به ذهنتان خطور کرد با ما در میان بگذارید <a href="#/support">اطلاعات بیشتر</a></tip>
        </div>
    </div>
    
</div>      
</template>

<script>
import tip from "./tip.vue";

var methods = {
    submit:function(){
        let user_confirm = confirm('صحت اطلاعات را تایید می کنید ؟');
        if(!user_confirm) return false; 
        
        let data_object = {
            function_name:'add_new_user',
            username:document.getElementById('username_input').value
        }
        let url = "http://localhost:80/git/vahed-app/src/back-end/actions.php";
        fetch(url,{
            method:"POST",
            body:JSON.stringify(data_object)
        }).then(res=>res.json()).then(data=>{
            if(data == true){
                alert('با موفقیت انجام شد')
            }else{
                alert('مشکلی به وجود آمد،دوباره امتحان کنید')
            }
        })
    }
};

export default {
    name:'register',
    components:{
        tip
    },
    methods,
    data:function(){
        return {
            username_is_taken:false
        }
    },
    updated:function(){
        document.getElementById('username_input').addEventListener('input',function(){
                console.log('test')
                let url = "http://localhost:80/git/vahed-app/src/back-end/actions.php" ;
                fetch(url,{
                    method:"POST",
                    body:JSON.stringify({
                        function_name:'is_username_avaiable',
                        username:document.getElementById('username_input').value
                    })
                }).then(res=>{
                    console.log(res)
                    this.username_is_taken = JSON.parse(res) ? false : true
                })
            })
    }
}
</script>

<style scoped>
.submit_button{
    transition:0.4s;
}

</style>