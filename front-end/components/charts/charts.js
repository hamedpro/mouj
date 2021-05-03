var template = 
`
<div id="charts" class="content-container">
    <div class="row py-2 mb-2" dir='rtl'>
        <div class="col d-flex justify-content-center align-items-center">
            <canvas id='chart1'></canvas>
        </div>
    </div>
    <div class="row ">
        <div class="col d-flex justify-content-center align-items-center">
            <h2 class="text-primary">موضوع اصلی میاد اینجا</h2>
        </div>
        
    </div>
    <div class="row justify-content-center d-flex" dir='rtl'>
        <div class="col-10">
            <h3 class="text-secondary" style="text-align:center;">حامد اینجا است و می خواهد اینجا بماند و اگر اینجا ماندن را دوست داشت می تواند بیشتر هم بماند</h3>
        </div>
        
    </div>
    <hr class="bg-info m-4">
    <div class="row py-2 mb-2" dir='rtl'>
        <div class="col d-flex justify-content-center align-items-center">
            <canvas id='chart2'></canvas>
        </div>
    </div>
    <div class="row">
        <div class="col d-flex justify-content-center align-items-center">
            <h2 class="text-primary">موضوع اصلی میاد اینجا</h2>
        </div>
        
    </div>
    <div class="row justify-content-center d-flex" dir='rtl'>
        <div class="col-10">
            <h3 class="text-secondary" style="text-align:center;">حامد اینجا است و می خواهد اینجا بماند و اگر اینجا ماندن را دوست داشت می تواند بیشتر هم بماند</h3>
        </div>
        
    </div>

</div>
`;
Vue.component('charts',{
    template,
    created:function(){
        $("#charts").ready(()=>{
            console.log('hamed')
            let chart1 = new Chart('chart1',{
                type:'pie',
                label:"hamed",
                data:{
                    datasets:[{
                        labels:["good",'bad','new','s','sfsd'],
                        data:[40,30,20,11,26],
                        backgroundColor:['blue','brown','purple'],
                        borderColor:"blue"
                    }]
                        
                },
                options:{
                    responsive:false
                }
            })
            let chart2 = new Chart('chart2',{
                type:'pie',
                label:"hamed",
                data:{
                    datasets:[{
                        labels:["good",'bad','new'],
                        data:[20,30,40],
                        backgroundColor:['blue','green','purple'],
                        borderColor:"blue"
                    }]
                        
                },
                options:{
                    responsive:false
                }
            })
            
        })
    },
    methods:{
        load_charts(){
            
        }
        
    }
})
