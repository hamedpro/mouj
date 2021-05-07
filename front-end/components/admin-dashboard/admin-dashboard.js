var template = 
`  
<div id="admin-dashboard" class="content-container" dir='rtl'>
    <button class="btn btn-primary m-2">تغییر سطح دسترسی کاربر</button>
    <button class="btn btn-primary m-2" @click='reset_factory'>ریست فکتوری</button>
    <button class="btn btn-primary m-2">مشاهده درخواست های پشتیبانی</button>
    
</div>
`;

Vue.component("admin-dashboard",{
    template,
    methods:{
        reset_factory(){
            if(!confirm('are you sure ?')) return;
            take_action({
                function_name:'delete_database'
            }).then(message =>{
                alert(message=='true' ? 'done':'error')
            })
        }
    }
})