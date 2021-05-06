var template = 
`
<div id="payment-success" class="content-container">
    <h1>your payment was successful !</h1>
    <h1>transaction_id is {{this.$route.params.transaction_id}}</h1>
    <a href="#/">go to home page</a>
</div>
`;

Vue.component('payment-success',{
    template,
    data:function(){
        return{

        }
    },
    created:function(){
        let transaction_id = this.$route.params.transaction_id
        //update page data with transaction data => 
       
    }
})