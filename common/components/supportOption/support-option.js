var template = 
`    
    <div class="row mb-1 mx-2" dir='rtl'>
    <div class="col-1">
        <img v-bind:src="getImgUrl(icon_src)">
    </div>
    <div class="col">
        
    </div>
</div>
`
Vue.component('support-option',{
    template
})
