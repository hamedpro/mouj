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
                <tip v-if="just_english_warning">تنها از حروف انگلیسی و اعداد استفاده کنید</tip>
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

var created = function(){
    let this_component = this;
    

    $('#register').ready(function(){
        $("#register input#username_input").on('input',function(){
            take_action({
                function_name:'is_username_available',
                username:$("#register input#username_input").val()
            }).then(message=>{
                if(message == "true"){
                    this_component.username_is_taken = false;
                    $("#register .submit_button").removeClass('disabled')
                }else if(message == 'false'){
                    this_component.username_is_taken = true;
                    $("#register .submit_button").addClass('disabled')
                }
            })
        })
    })
}
var methods = {
    submit:function(){
        let user_confirm = confirm('صحت اطلاعات را تایید می کنید ؟');
        if(!user_confirm) return false; 
        console.log('test');
        //prepare data object for our api =>
        let username = $("#register input#username_input").val();
        let data_object = {
            function_name:'add_new_user',
            username
        }
        take_action(data_object).then(function(message){
            if(message == "true"){
                alert('اطلاعات شما با موفقیت ثبت شد.')
            }
        })
    }
};

export default {
    name:'register',
    created,
    components:{
        tip
    },
    methods,
    data:function(){
        return {
        just_english_warning:false,
        username_is_taken:false
     }
    }
}
</script>

<style scoped>
#register .submit_button{
    transition:0.4s;
}

</style>