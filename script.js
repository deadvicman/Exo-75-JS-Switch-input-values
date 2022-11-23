let switch1 = document.getElementById("switch");
switch1.addEventListener('click',function() {
    let result = document.getElementById("input2").value;
    document.getElementById("input2").value = document.getElementById("input1").value;
    document.getElementById("input1").value = result;
    console.log("click") });