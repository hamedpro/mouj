<template>
    <div id="support" class="content-container">
        <div class="row justify-content-center align-items-center mt-3">
            <div class="col-6">
                <h1 class="text-primary" style="direction: rtl;text-align:center;">به بخش پشتیبانی ما خوش آمدید</h1>
            </div>
        </div>
        
        <div class="row justify-content-center align-items-center">
            <div class="col-10">
                <h4 class="text-secondary" style="direction: rtl;text-align:center;">ما منتظر درخواست های پشتیبانی شما هستیم!</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9 ">
                <hr class="bg-light">
            </div>
        </div>

        <div class="container">
            <div class="row support-option-header mb-2" dir='rtl'>
                <div class="align-items-center col-2 d-flex justify-content-center"><img src="../assets/bootstrap-icons/link-45deg-white.svg"></div>
                <div class="col p-0"><h1 class='text-light p-2'>اطلاعات خود موسسه</h1></div>
            </div>
            
            <div class="row px-2">
                <div class="col-4">
                    <h3 class="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div class="col d-flex justify-content-start align-items-center">
                    <h3 class="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <div class="row px-2">
                <div class="col-4">
                    <h3 class="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div class="col d-flex justify-content-start align-items-center">
                    <h3 class="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <div class="row px-2">
                <div class="col-4">
                    <h3 class="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div class="col d-flex justify-content-start align-items-center">
                    <h3 class="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <hr>

            <div class="row support-option-header mb-2" dir='rtl'>
                <div class="align-items-center col-2 d-flex justify-content-center"><img src="../assets/bootstrap-icons/mailbox2-white.svg"></div>
                <div class="col p-0"><h1 class='text-light p-2'>ثبت درخواست پشتیبانی جدید</h1></div>
            </div>
           
            <supportOption icon_src='../assets/bootstrap-icons/lightning-fill-white.svg'><a class='text-info' href="#/support-form"><h5>درخواست پشتیبانی سریع</h5></a></supportOption>
            
        </div>
        
    </div>
</template>

<script>
import supportOption from "./support-option.vue"
export default {
    name:'support',
    components:{
        supportOption
    }
}
</script>

<style scoped>
#support{
    direction: rtl;
}

#support #new_support_ticket{
    width:100%
}

#support .support-option-header img {
    height: 35px;
}
</style>