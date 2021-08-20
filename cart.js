
 
function updateTotalCase(isIncreasing){
    const caseNumber = document.getElementById('case-number');
    let caseInput = caseNumber.value;
    if(isIncreasing== true){
        caseInput = parseInt(caseInput) + 1;
    }else if(caseInput>0){
        caseInput = parseInt(caseInput) - 1
    }
    caseNumber.value = caseInput;

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseInput * 60 ;

}

document.getElementById('case-plus').addEventListener('click', function(){
    updateTotalCase(true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateTotalCase(false);
    // ;

})

