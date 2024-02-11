let form_input = document.getElementById('myForm');
var input1 = document.getElementById('usd');
var input2 = document.getElementById('cad');
let usd_input = 0;
let cad_input = 0;
let conversion_rate = 1.35;

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    usd_input = form_input.elements['usd'].value;
    cad_input = form_input.elements['cad'].value;
    
    input1.value = convertToUSD(cad_input);
    input2.value = convertToCAD(usd_input); 
});

function disableAlternative() {    
    if (input1.value.trim() !== '') {
        input2.disabled = true;
    } else {
        input2.disabled = false;
    }
    
    if (input2.value.trim() !== '') {
        input1.disabled = true;
    } else {
        input1.disabled = false;
    }
}

function convertToUSD(cad_value) {
    converted_USD = cad_value / conversion_rate;
    return parseFloat(converted_USD.toFixed(3));
}

function convertToCAD(usd_value) {
    converted_CAD = conversion_rate * usd_value;
    return parseFloat(converted_CAD.toFixed(3));
}

function submitFunction() {
    usd_input = form_input.elements['usd'].value;
    cad_input = form_input.elements['cad'].value;
    
    input1.value = convertToUSD(cad_input);
    input2.value = convertToCAD(usd_input);    
}