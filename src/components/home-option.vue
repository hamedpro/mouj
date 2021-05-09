<template>
    <div class="home-option row">
    <div class="col-3 d-flex justify-content-center align-items-center" style='margin-right:1%;'>
        <img v-bind:src="image_src" class='option-icon'>
    </div>
    <div class="col mt-3">
        <h2 class="title"><a v-bind:href="link" style="text-decoration:none" class="text-info">{{title}}</a></h2>
        <h4 class='text-secondary info'>{{info}}</h4>
    </div>
    
</div>
</template>

<script>
export default {
    name:'home-option',
    props:{
        title:String,
        info:String,
        image_src:String,
        link:String
    }
}
</script>

<style scoped>
.home-option{
    direction:rtl;
}
.home-option .option-icon{
    width: 72%;
}
.home-option .info{
    max-width: 85%;
}
.home-option .title{
    max-width: 85%;
}
</style>