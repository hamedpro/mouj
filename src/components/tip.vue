<template>
    <div class="mb-2">
    <span><img src="../assets/bootstrap-icons/lightbulb-white.svg"></span><h6 class="tip text-secondary"><slot></slot></h6>
    <br>
</div>
</template>

<script>
export default {
    name:'tip'
}
</script>

<style scoped>
.tip{
    direction: rtl;
    margin-right: 10px;
    text-align: right;
    display: inline;
    /* margin-bottom: 4px; */
}
</style>