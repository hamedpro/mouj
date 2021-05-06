var template = 
`
<div id="form" class="content-container">
    <div class="row justify-content-center d-flex">
        <div class="col-9">
            <h1 class="text-light">بخش ثبت مسئله جدید</h1>
        </div>
    </div>
    <div class="row justify-content-center d-flex">
        <div class="col-9">
            <h1 class="text-secondary">پیام شما را در اسرع وقت پاسخگو خواهیم بود .</h1>
        </div>
    </div>
    <div class="row justify-content-center-d-flex">
        <div class="col-9">
            <input type="text" class="form-control" id="username">
        </div>
    </div>
    
    
    <div class="row justify-content-center-d-flex">
        <div class="col-9">
            <input type="text" class="form-control" id="subject">
        </div>
    </div>
    <div class="row justify-content-center-d-flex">
        <div class="col-9">
            <input type="text" class="form-control" id="content">
        </div>
    </div>
    <div class="row justify-content-center d-flex">
        <div class="col-9">
            <button class="btn btn-success" @click="submit_data">ثبت اطلاعات</button>
        </div>
    </div>

</div>
`;

Vue.component('support-form',{
    template,
    methods:{
        submit_data:function(){
            //build object for send into our api =>
            let data_object = {
                function_name : 'new_issue',
                username:$('#username').val(),
                subject:$('#subject').val(),
                content:$('#content').val()
            } 
            //send data to api =>
            take_action(data_object).then(message =>{
                if(message == 'true'){
                    alert('با موفقیت ثبت شد.')
                    window.location.assign('#/support')
                }else{
                    alert('مشکلی پیش آمد ، لطفا دوباره امتحان کنید.')
                };
            })

        }
    }
})