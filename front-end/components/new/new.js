var template = 
`

<div id="new" class="content-container">
    <div class="row justify-content-center align-items-center my-4">
        <div class="col-8 ">
            <h1 class="text-light title" dir='rtl'>شما هم با شرکت در این طرح مسلمانی را خوشحال کنید !</h1>
        </div>
        
    </div>
    <div class="row justify-content-center align-items-center">
        <div class="col-9 d-grid gap-2" style='direction:rtl;'>
            <label for="username" class="text-light">نام کاربری :</label>
            <input type="text" id="username" class="form-control border-0">
            <div class="tips_container">
                <tip>اگر کاربر سایت نیستید یا نام خود را به فارسی بنویسید یا برای ثبت نام فوق سریع <a href="#/register">اینجا</a> کلیک کنید.</tip>
            </div>

            <label for="amount" class="text-light">مبلغ به ریال :</label>
            <input type="number" id="amount" class="form-control border-0" placeholder="مثلا 20000">
            <label for="category" class="text-light">نوع کمک :</label>
            <select id="category" class="form-select border-0">
            
            <option value="vahed">شرکت در طرح واحد</option>
                <option value="anese">کمک به همین موسسه</option>
            </select>
            <button class="btn btn-success" @click="submit_changes">ارسال</button>            
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-9">
            <hr class="bg-light">
        </div>
    </div>
    <div class="row justify-content-center align-items-center">
        <div class="col-9 tips_container">
            <tip>ما آسان ترین نوع ثبت نام را برای این سایت انتخاب کرده ایم، تنها با انتخاب نام کاربری عضو شوید! <a href="#/register">اطلاعات بیشتر</a></tip>
        </div>
    </div>

</div>

`;

Vue.component("new",{
    template,
    data:function(){
        return {
            
        }
    },
    created:function(){
        //change_main_background_color("rgb(235,235,240)");
        
    },
    methods:{
        submit_changes:function(){
            let user_confirm = confirm('آیا صحت اطلاعات را تایید می کنید؟')
            if(!user_confirm) return false;
            //prepar data object for send to our api
            let data_object = {
                function_name:"new_transaction",
                username:$('#new input#username').val(),
                category:$('#new select#category').val(),
                amount:$('#new input#amount').val()
            }
            take_action(data_object).then(message =>{
                if(message == "true") {
                    alert('اطلاعات شما با موفقیت ثبت شد !');
                }else{
                    alert('خطایی پیش آمد،لطفا دوباره امتحان کنید');
                }
            })
        }
    }
})