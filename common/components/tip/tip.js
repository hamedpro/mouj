var template = 
`
    <div class="mb-2">
    <span><img :src="imgsrc"></span><h6 class="tip text-secondary"><slot></slot></h6>
    <br>
</div>
`;

Vue.component("tip",{
    template,
    props:["imgsrc"]
})
