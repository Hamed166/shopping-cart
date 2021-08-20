
 
function updateTotalCase(){
    const caseNumber = document.getElementById('case-number');
    const caseInput = caseNumber.value;
    caseNumber.value = parseInt(caseInput) + 1;
}

document.getElementById('case-plus').addEventListener('click', function(){
    updateTotalCase();
})

document.getElementById('case-minus').addEventListener('click', function(){
    const caseNumber = document.getElementById('case-number');
    const caseInput = caseNumber.value;
    caseNumber.value = parseInt(caseInput) - 1;

})

