let rollTotal = document.querySelector("#Rolls");
let totalEntry = document.querySelector("#result");
let allRolls = document.querySelector("#showRoll");
let allLists = document.querySelector("#lists");

rollTotal.addEventListener("click", function () {
    let dieRolls = [];
    let allInput = document.querySelector("#sum").value;
    let sum = 0;
    let total = 0;
    while (sum < allInput) {
        let x = Math.floor(Math.random() * 6) + 1;
        dieRolls.push(x);
        total += dieRolls[sum];
        sum += 1;
    }
    totalEntry.innerHTML = total;
    console.log(dieRolls);
    allRolls.addEventListener("click", function () {
        str = "<ol>";
        dieRolls.forEach(function (die) {
            str += "<li>" + die + "</li>";
        });
        str += "</ol>";
        allLists.innerHTML = str;
    });
});

allRolls.addEventListener("click", function () {
    let sum1 = 0;
    str = "<ol>";
    while (sum1 < dieRolls.length) {
        str += "<li>" + dieRolls[sum1] + "</li>";
        sum1 += 1;
    }
    // diseRolls.forEach(function (dise) {
    //   str += "<li>" + dise + "</li>";
    // });
    str += "</ol>";
    lists.innerHTML = str;
})
