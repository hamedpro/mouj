<template>
    <div id="admin-dashboard" class="content-container" dir='rtl'>
    <button class="btn btn-primary m-2">تغییر سطح دسترسی کاربر</button>
    <button class="btn btn-primary m-2" @click='reset_factory'>ریست فکتوری</button>
    <button class="btn btn-primary m-2">مشاهده درخواست های پشتیبانی</button>
    
</div>
</template>

<script>
export default {
    name:'adminDashboard',
    methods:{
        reset_factory(){
            if(!confirm('are you sure ?')) return;
            fetch('url',{
                method:'POST',
                body:JSON.stringify({function_name:'delete_database'})
            }).then(function(response){
                if(response.json() == 'true'){
                    alert('با موفقیت انجام شد')
                }else{
                    alert('there was an error');
                }
            })
        }
    }
}
</script>

<style scoped>
.test{
    width:100%;
    border-radius: 14px 0 14px 0;
    margin: 30px;
    border: none;
    height:100px;
    /* box-sizing: content-box; */
    background-color: antiquewhite;
    box-shadow: 5px 5px 5px 5px rgb(150 150 150 / 50%);
    font-size: 60px;
}
</style>