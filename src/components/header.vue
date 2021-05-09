<template>
<div class="header row">
    <div class="col d-flex align-items-center title px-3 overflow-hidden"> 
        <h2 class='text-light d-inline url'>vahed</h2>
    </div>
   <a href='#/user-home' class="col-2 d-flex justify-content-center align-items-center">
        <img src="./front-end/archive/bootstrap-icons/person-check-fill-white.svg" class="person_icon">
   </a>
    
</div>
</template>

<script>
export default{
    name:'my-header'
}
</script>

<style scoped>
.header{
    position: relative;
    height: 60px;
    margin: 0px;
    padding: 0;
    /* top: 0px; */
    background-color: indigo;
    width: 100%;
    /* left: 0px; */
}
.header .url{
    color: white;
}

.header a.link_container{
    height:100%;
    width:100%;
}
.header .person_icon{
    height: 75%;
    transition:0.2s;
    padding: 8px;
    border-radius: 15px;
}
.header .person_icon:hover{
    background-color: purple;
}
.header .url{
    margin: 0;
    padding: 0;
}
</style>