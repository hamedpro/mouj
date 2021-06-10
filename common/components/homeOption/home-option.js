var template = 
`
    <div class="home-option row">
    <div class="col-3 d-flex justify-content-center align-items-center" style='margin-right:1%;'>
        <img v-bind:src="getImgUrl(image_src)" class='option-icon'>
    </div>
    <div class="col mt-3">
        <h2 class="title"><a v-bind:href="link" style="text-decoration:none" class="text-info">{{title}}</a></h2>
        <h4 class='text-secondary info'>{{info}}</h4>
    </div>
    
</div>
`;
Vue.component('home-option',{
    template
})