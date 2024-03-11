

document.addEventListener("DOMContentLoaded", function () {
    addEventListener('change', function (eventData){

        let grossyear = document.getElementById("grossyear").value;
        let grossmonthly =grossyear/12;  
        //round to the cent Math.floor(x*100)/100
        
        document.getElementById("grossmonthly").innerText = (Math.round(grossmonthly*100)/100);
        document.getElementById("fedtaxes").innerText = ((Math.round(grossmonthly*100*.12)/100));
        document.getElementById("statetaxes").innerText = ((Math.round(grossmonthly*100*.07)/100));
        document.getElementById("socialsec").innerText = ((Math.round(grossmonthly*100*.062)/100));
        document.getElementById("medicare").innerText = ((Math.round(grossmonthly*100*.0145)/100));
        document.getElementById("retirement").innerText = ((Math.round(grossmonthly*100*.05)/100));
        document.getElementById("insurance").innerText = (180);
        // document.getElementById("netmonthly").innerText = (grossmonthlygrossmonthly-(Math.round(grossmonthly*100*.12)/100)-(Math.round(grossmonthly*100*.07)/100)-(Math.round(grossmonthly*100*.062)/100)-(Math.round(grossmonthly*100*.0145)/100)-(Math.round(grossmonthly*100*.05)/100)-180); //use the round here

        netMonthly = ((Math.round(grossmonthly*100*.3165)/100 - 180));
        console.log(netMonthly)
        document.getElementById("netmonthly").innerText = netMonthly;
        document.getElementById("netmonthly2").innerText = netMonthly;
        document.getElementById("netmonthly3").innerText = netMonthly;


        document.getElementById("savings").innerText = ((Math.round(netMonthly*100*.10)/100));
        document.getElementById("housing").innerText = ((Math.round(netMonthly*100*.20)/100));
        document.getElementById("utilities").innerText = ((Math.round(netMonthly*100*.05)/100));
        document.getElementById("transportation").innerText = ((Math.round(netMonthly*100*.15)/100));
        document.getElementById("studentloans").innerText = ((Math.round(netMonthly*100*.15)/100));
        document.getElementById("food").innerText = ((Math.round(netMonthly*100*.10)/100));
        document.getElementById("clothing").innerText = ((Math.round(netMonthly*100*.05)/100));
        document.getElementById("personal").innerText = ((Math.round(netMonthly*100*.10)/100));
        document.getElementById("remainder").innerText = ((Math.round(netMonthly*100*.10)/100));
        
        


        let chartsavings = document.getElementById('Psavings').value;
        document.getElementById("Piesavings").innerText = (((Math.round((chartsavings / netMonthly)*100.00)) + '%'));

        let charthousing = document.getElementById('Phousing').value;
        document.getElementById("Piehousing").innerText = (((Math.round((charthousing / netMonthly)*100.00)) + '%'));

        let chartutilties = document.getElementById('Putilities').value;
        document.getElementById("Pieutilties").innerText = (((Math.round((chartutilties / netMonthly)*100.00)) + '%'));

        let charttransportation = document.getElementById('Ptransportation').value;
        document.getElementById("Pietransportation").innerText = (((Math.round((charttransportation / netMonthly)*100.00)) + '%'));

        let chartstudentloans = document.getElementById('Pstudentloans').value;
        document.getElementById("Piestudentloans").innerText = (((Math.round((chartstudentloans / netMonthly)*100.00)) + '%'));

        let chartfood = document.getElementById('Pfood').value;
        document.getElementById("Piefood").innerText = (((Math.round((chartfood / netMonthly)*100.00)) + '%'));

        let chartclothing = document.getElementById('Pclothing').value;
        document.getElementById("Pieclothing").innerText = (((Math.round((chartclothing / netMonthly)*100.00)) + '%'));

        let chartpersonal = document.getElementById('Ppersonal').value;
        document.getElementById("Piepersonal").innerText = (((Math.round((chartpersonal / netMonthly)*100.00)) + '%'));


        document.getElementById('Premainder').innertext = (netMonthly - chartsavings - charthousing - chartutilities - chartransportation - chartstudentloans - chartfood - chartcothing - chartpersonal);

        let chartremainder = document.getElementById("Premainder").value;
        document.getElementById("Pieremainder").innerText = (((Math.round((chartremainder / netMonthly)*100.00)) + '%'));

    });

});

function changepage() {
    let index = document.getElementById("index");
    index.classList.add("hidden");
    let budget = document.getElementById("budget");
    budget.classList.remove("hidden")
}

function goback() {
    let budget = document.getElementById("budget");
    budget.classList.add("hidden");
    let index = document.getElementById("index");
    index.classList.remove("hidden")
}