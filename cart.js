
 
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

    getTotalPrice();
}

function getInputTotal(product){
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;
}

function getTotalPrice(){
    
    const phoneTotal = getInputTotal('phone') * 1250;
    const caseTotal = getInputTotal('case') * 60;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const priceTotal = subTotal + taxAmount;


    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-price').innerText = priceTotal;

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

