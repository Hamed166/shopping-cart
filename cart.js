
 
function updateProductNumber(product, price, isIncreasing){
    const productNumber = document.getElementById(product + '-number');
    let productInput = productNumber.value;
    if(isIncreasing== true){
        productInput = parseInt(productInput) + 1;
    }else if(productInput>0){
        productInput = parseInt(productInput) - 1
    }
    productNumber.value = productInput;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput * price ;
}

// phone event handlar...........................

document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1250, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1250, false);
})



// case event handler................................

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 60,true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case',60,false);
    // ;

})

