// Made By - Prajval Patel C0911611
// Date - Feb 11, 2024 

// Declaring variables
let input1 = document.getElementById('usd');
let input2 = document.getElementById('cad');
let conversion_rate = 1.35;

//Function on form submit
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //Setting output in form elements
    if(input1.value != '') {
        input2.value = convertToCAD(input1.value);     
    }
    else {
        input1.value = convertToUSD(input2.value);
    }        
});

//USD value on input function
document.getElementById('usd').addEventListener('input', function() {
    document.getElementById('cad').value = '';
});

//CAD value on on input function
document.getElementById('cad').addEventListener('input', function() {
    document.getElementById('usd').value = '';
});

//Function to convert cad to usd
function convertToUSD(cad_value) {
    converted_USD = cad_value / conversion_rate;
    return parseFloat(converted_USD.toFixed(3));
}

//Function to convert usd to cad
function convertToCAD(usd_value) {
    converted_CAD = conversion_rate * usd_value;
    return parseFloat(converted_CAD.toFixed(3));
}