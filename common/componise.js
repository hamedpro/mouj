var componise = {
    renderFunctions : {}
}
componise.renderComponent = function(object){
    
    if(object.componentName == "tip"){
        var template = 
        `
        <div class="mb-2">
            <span><img src="${object.iconSrc}"></span><h6 class="tip text-secondary">${object.slot}</h6>
            <br>
        </div>
        `;
        document.write(template)
    }
    if(object.componentName == "support-option"){
        var template = 
        `    
            <div class="row mb-1 mx-2" dir='rtl'>
            <div class="col-1">
                <img src="${object.iconSrc}">
            </div>
            <div class="col">
                ${object.slot}
            </div>
        </div>
        `;
        document.write(template);
    }
    if(object.componentName == "myheader"){
        var template = 
        `
        <div class="header row m-0">
            <div class="col d-flex align-items-center title overflow-hidden"> 
                <h2 class='text-light d-inline url'>vahed</h2>
            </div>
            <a href='' class="col-2 d-flex justify-content-center align-items-center">
                <img src="${object.personIconSrc}" class="person_icon">
            </a>
        </div>
        `;
        document.write(template)
    }
}