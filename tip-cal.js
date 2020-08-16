var billTotal = document.getElementById("bill-amount");
var service = document.getElementById("service-select");
var numPeople = document.getElementById("num-people");
var multiplePeople = document.getElementById("each-text");

var calculateTip = () => {

    var serviceVal = service.options[service.selectedIndex];
    console.log(billTotal);

    if (billTotal.value == "" || serviceVal.value == "" || numPeople.value == "")
    {
        alert("Please enter values");
        return;
    }   

    if (numPeople.value <= 1)
    {
        numPeople.value = 1;
        multiplePeople.style.display = "none";
    }

    else 
    {
        multiplePeople.style.display = "block";
    }
    var total = ((billTotal.value * serviceVal.value) / numPeople.value);
    total = total.toFixed(2);


    document.getElementById("total-tip").innerHTML = "<span> $ </span>" + total;
    document.getElementById("tip-amount").style.display = "block";

}




