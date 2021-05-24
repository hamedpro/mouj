<template>
    <div class="row mb-1 mx-2" dir='rtl'>
    <div class="col-1">
        <img v-bind:src="getImgUrl(icon_src)">
    </div>
    <div class="col">
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    name:'supportOption',
    props:{
        icon_src:String 
    },
    methods:{
        getImgUrl(pic){
            return require("../assets/"+pic)
        }
    }
}
</script>