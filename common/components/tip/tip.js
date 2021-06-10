var template = 
`
    <div class="mb-2">
    <span><img src="../assets/bootstrap-icons/lightbulb-white.svg"></span><h6 class="tip text-secondary"><slot></slot></h6>
    <br>
</div>
`;

Vue.component("tip",{
    template
})
