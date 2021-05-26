var template = 
`
<div class="header row m-0">
    <div class="col d-flex align-items-center title overflow-hidden"> 
        <h2 class='text-light d-inline url'>vahed</h2>
    </div>
   <a href='#/user-home' class="col-2 d-flex justify-content-center align-items-center">
        <img src="../common/bootstrap-icons/person-check-fill-white.svg" class="person_icon">
   </a>
    
</div>
`;
Vue.component('myheader',{
    template,
})

